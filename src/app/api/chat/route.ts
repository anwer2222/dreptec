
import { z } from 'zod';
import { openai } from '@ai-sdk/openai';
import { convertToModelMessages, stepCountIs, streamText, tool, ToolSet } from 'ai';
import { getPlan, getPriceInfo, replaceVariables, submitRequest, prompt } from '@/components/AiTools';

export const maxDuration = 30;
  
const toolList: ToolSet = {
  getPlan: tool({
    description: 'To get detailed discription about a subscription plan',
    inputSchema: z.object({
      percentage: z.number().min(0).max(100).nullable().optional().describe('All plans are listed between 0 (cheapest) and 100 (highest price). if used, do not enter planLevel'),
      isBusiness: z.boolean().describe('is the plan for Busnesses or for Starters'),
      planLevel: z.string().nullable().optional().describe("Basic|Standard|Premium|Enterprise|Ultimate"),
    }),
    execute: async ({ percentage, isBusiness, planLevel}) => {
      console.log("getPlan:",isBusiness)
      return getPlan(isBusiness,percentage,planLevel)
    }}),
  submitRequest: tool({
    description: 'To submit a request for the user',
    inputSchema: z.object({
      name: z.string().nullable().optional().describe('if the user provided his/here name'),
      phone: z.string().nullable().optional().describe('if the user provided a phone number'),
      email: z.string().describe('the user email, ask the users about their email'),
      message: z.string().describe('a summary of the user request'),
      selectedPrice: z.number().nullable().optional().describe('if the user selected a price of a candidate plan'),
      selectedPlan: z.string().nullable().optional().describe('if the user selected a plane'),
      requestType: z.string().describe("Subscription|Support|Service|Price|FAQ"),
    }),
    execute: async ({ email,message,requestType,selectedPrice,selectedPlan,name,phone }) => {
      console.log("email:",email)
      return submitRequest(email,message,requestType,selectedPrice,selectedPlan,name,phone)
    },
  })
}

export async function POST(req: Request) {
  const { messages, url, price } = await req.json();
  const st = replaceVariables(prompt,{current_url:url, price_plan:JSON.stringify(getPriceInfo(price),null,2)})
  // console.log("messages, url, price:",messages, url, price );  

  const result = streamText({
    model: openai('gpt-5.-nano'),//"gpt-4.1-nano"
    system: st, 
    // temperature:0.5,
    messages: convertToModelMessages(messages),
    tools:toolList,
    stopWhen: stepCountIs(3),
    // onStepFinish: (inp) => {console.log(inp.toolCalls,inp.toolResults);if (inp.toolResults) {toolResultList.push(inp.toolResults)}},
    // onFinish: (inp) => {
      // const toolInvocations = toolResultList.length>0? toolResultList : null
      // saveTexts(messages[messages.length - 1].content,inp.text,toolInvocations,profile.chatSession);
      // console.log('Full response:', "inp.text",price);
      // console.log(messages,"ipAddress","----",inp.toolCalls,toolInvocations);
    // },
  });
  
  return result.toUIMessageStreamResponse();
}