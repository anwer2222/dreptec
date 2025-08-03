
// import fs from "fs";
import { z } from 'zod';
import { openai } from '@ai-sdk/openai';
import { convertToModelMessages, streamText, tool, ToolSet } from 'ai';
// import { findAllEpisodesWithWord, getLink, getSection, getTranscriptContent } from "@/components/AiTools";


export const maxDuration = 30;

// const seenIdx = fs.readFileSync('wiki/seenIndex.txt', 'utf8')

const prompt = `You are an AI helpful assistant for a website of a SaaS provider called Dreptec via a website chatbot.  Dreptec helps to unleash the power of gene. AI: transforming ideas into intelligent Apps.
        
# Here are the key features of the Dreptec: 
  1. there are 5 pricing plans: Basic, Standard, Premium, Enterprise and Ultimate for Starters (start from $10 to $50/mon) and Busnesses ($100 - $500).
  2. Fast Experience near-instantaneous interactions by optimize infrastructure to ensure user's AI-powered apps respond swiftly, maintaining high user satisfaction.
  3. Embed smart chatbots directly into websites or social media channels. Whether serving as a customer support agent, a social media responder, or a personalized virtual assistant tailored to someones unique personality.
  4. Integrate cutting-edge AI powered by OpenAI models, providing applications with sophisticated language understanding, creativity, and contextual awareness.
  5. Engage with Content like Never Before Turn YouTube videos into interactive conversations. Referencing YouTube episodes, and topicts in the videos, to allow fans to learn about the mentioned topics, the creator's style, providing a seamless and engaging experience.
  6. Seamless connection between LLMs and external data sources or tools. Whether you're building an enhancing chat interfaces, or designing custom AI workflows, Model Context Protocol (MCP) offers a standardized way to connect relevant context and data to perform best.

# Demos
- YouTube To Chat: create AI assesstance for a famous YouTube channel where you can summarize content , equier any infos, provide you of the stat and link pointed to a specific topic in a video in this channel.
- Smart Chat Manager: manage a school using smart chat. No need to use any websites. admin, teachers and students , including parants, can chat via Whatsapp to get whatever they used to get from a usual website.  
- Smart Chat Agent: a real estate chatbot.

# Important
- Do not provide any links.
- Keep answers short, focused, and relevant.
- Support guests to explor pricing and plans by moving the slide in the price page.
- Use the provided tools fully; do not guess or answer without tool backing.
- Arabic language is preferred, English acceptable as secondary.
- Please format your responses using Markdown. Use **bold**, *italics*, lists, and others.

Remain polite, clear, and helpful at all times.

The current page:
www.dreptec.com current_url

Selected price plan:
price_plan
`

  
function replaceVariables(str: string, dict: Record<string, string>): string {
  // Match words that are valid variable names (letters, numbers, underscores)
  return str.replace(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g, (match) => {
    // If the word exists in the dictionary, replace it
    return dict.hasOwnProperty(match) ? dict[match] : match;
  });
}

// Function to convert JSON Schema to Zod schema

function jsonSchemaToZod(schema: any): z.ZodType<any> {
  if (schema.type === 'object') {
    const shape: Record<string, z.ZodType<any>> = {};
    for (const key in schema.properties) {
      const prop = schema.properties[key];
      if (prop.type === 'string') {
        shape[key] = z.string().describe(prop.description);
      }
      // handle other types as needed
    }
    return z.object(shape);
  }
  // handle other schema types if needed
  throw new Error('Unsupported schema type');
};

// const fullIndex = JSON.parse(fs.readFileSync('wiki/fullSeenIndex.txt', 'utf8'))

// const toolList: ToolSet = {
//   getLink: tool({
//     description: 'Get the youtube link',
//     parameters: z.object({
//       videoId: z.string().describe('youtube video_id, use: seen_list for the full list of episodes.'),
//       sectionTime: z.string().describe('the time when a certain section starts in the format 00:00:00'),
//     }),
//     execute: async ({ videoId, sectionTime }) => {
//       console.log("Link:",sectionTime)
//       return getLink(videoId, sectionTime)
//     },
//   }),
//   getSection: tool({
//     description: 'Get a section content',
//     parameters: z.object({
//       topic: z.string().describe('the required topic: summary| word_freq| bullet_points'),
//       episode: z.string().length(3).describe('the episode number in the format E01'),
//     }),
//     execute: async ({ topic, episode }) => {
//       console.log("topic:",topic,episode)
//       return getSection(topic,episode)
//     },
//   }),
//   getTranscriptContent: tool({
//     description: 'Get the English translated transcript of an episode',
//     parameters: z.object({
//       episode: z.string().length(3).describe('the episode number in the format E01'),
//       partNumber: z.number().describe("the part of the transcript from 1 to 10")
//     }),
//     execute: async ({ episode, partNumber}) => {
//       console.log("getTranscript:",episode)
//       return getTranscriptContent(episode, partNumber)
//     },
//   }),
//   findAllEpisodesWithWord: tool({
//     description: 'Get all episodes contain a given word',
//     parameters: z.object({
//       word: z.string().describe('the word to be searched'),
//     }),
//     execute: async ({ word }) => {
//       console.log("word:",word)
//       return findAllEpisodesWithWord(fullIndex,word)
//     },
//   }),
// }


export const getPriceInfo= (value: number) => {
  const starterFeatures =[
    ["Website chatbot","From 3 pages", "No website support"],
    ["Enhanced website support","From 5 pages", ,"Simple automation"],
    ["Replies for Whatsapp","From 300 Replies", "Content management"],
    ["Social media engagement", "From 500 Replies","Chat-based scheduling"],
    ["Virtual Assistant","From 800 Replies","Predefined tasks"],
  ]

  const businessFeatures =[
    ["Website chatbot","From 8 pages", "Website support"],
    ["Fully website support","From 12 pages", "Full automation"],
    ["Replies for Whatsapp","From 500 Replies", "Social media analytics"],
    ["Multi-platform engagement", "From 800 Replies", "Chat-based tasks"],
    ["Smart ERP & CRM chat","From 1000 Replies", "Full automated tasks"],
  ]

  // Predefined titles for 5 slides
  const slideTitles = [
    "Basic Plan",
    "Standard Plan",
    "Premium Plan",
    "Enterprise Plan",
    "Ultimate Plan"
  ];

  // Determine the current slide index based on slider value
  // Range 0-20: index 0, 21-40: 1, 41-60: 2, 61-80: 3, 81-100: 4
  const slideIndex = Math.min(
    Math.floor((value / 100) * slideTitles.length),
    slideTitles.length - 1
  );

  // Define the prices based on slider value
  // For example, the Starter price might range from $10 to $50
  // and Business from $100 to $500
  const starterPrice = Math.round(10 + (value / 100) * (50 - 10))
  const businessPrice = Math.round(100 + (value / 100) * (500 - 100))

  return {planTitle: slideTitles[slideIndex], starterPrice:"$"+starterPrice.toString(), businessPrice: "$"+businessPrice.toString(),  starterFeature: starterFeatures[slideIndex], businessFeature: businessFeatures[slideIndex]}
}


export async function POST(req: Request) {
  const { messages, url, price } = await req.json();
  const st = replaceVariables(prompt,{current_url:url, price_plan:JSON.stringify(getPriceInfo(price),null,2)})
  const toolResultList: any[] = [];
  console.log("messages, url, price:",messages, url, price )

  const result = streamText({
    model: openai('gpt-4.1-nano'),//"gpt-4.1-nano"
    system: st, 
    temperature:0.5,
    messages: convertToModelMessages(messages),
    // maxTokens:850,
    // maxSteps:3,
    // tools:toolList,
    onStepFinish: (inp) => {console.log(inp.toolCalls,inp.toolResults);if (inp.toolResults) {toolResultList.push(inp.toolResults)}},
    onFinish: (inp) => {
      const toolInvocations = toolResultList.length>0? toolResultList : null
      // saveTexts(messages[messages.length - 1].content,inp.text,toolInvocations,profile.chatSession);
      console.log('Full response:', "inp.text",price);
      // console.log(messages,"ipAddress","----",inp.toolCalls,toolInvocations);
    },
    
  });
  
  return result.toUIMessageStreamResponse();
}