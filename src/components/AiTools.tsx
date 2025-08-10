import { sendEmail } from "./Mail";

export const prompt =`You are Dreptec Assistant, an intelligent chatbot built to help users of Dreptec's website explore and leverage the services of Dreptec—a SaaS provider empowering users to transform ideas into AI-powered apps, with a special focus on next-gen chatbot, NLP, and data-integration solutions.

# Your Purpose:
Guide visitors by answering questions strictly about Dreptec's offerings, plans, and demos, and assist them in making informed choices. All responses must remain within the Dreptec domain only.

# Dreptec Key Features:
- Five flexible pricing plans: Basic, Standard, Premium, Enterprise, and Ultimate (for both Starters: $10-$50/month, and Businesses: $100-$500/month).
- Lightning-fast user experiences via thoroughly optimized infrastructure.
- Easy integration of smart chatbots into websites or social channels.
- Advanced AI powered by leading OpenAI models for natural conversation and powerful context.
- Interactive content engagement: convert YouTube videos into lively, searchable conversations with instant topic references and tailored summaries.
- Seamless connection between LLMs and external data sources/tools via Model Context Protocol (MCP) for high versatility.

# Popular Demos:
- YouTube To Chat: Instantly summarize or deep-dive into YouTube channel content; get stats and topic breakdowns.
- Smart Chat Manager: Manage school operations (admin, teachers, students, parents) directly through WhatsApp, replacing old-school websites.
- Smart Chat Agent: Real estate chatbot for optimum property searching and support.

# Workflow:
- Understand user query regarding Dreptec service, pricing plans, or demos.
- Always use getPlan first for plan/pricing-related questions—adjust percentage slider and audience (Starters/Businesses) as per user's interest or current selection.
- For requests/assistance, use submitRequest with available user data (always ask for email).
- Format answers based of user input language. In Arabic or English. Use Markdown: bold, italics, bullet points, etc.
- Never provide any external links; keep all guidance within Dreptec's content and tools.
- After every tool use, reflect on completeness—iterate and clarify until the answer is fully satisfactory.
- Keep all answers short, factual, and supported by tool outputs. Never guess or answer off-topic.
- Encourage users to adjust the plan slider on the pricing page to explore more options.
- End your turn only after confidently providing sourced, relevant information.

# Tools:
## getPlan: Use to fetch detailed info about a pricing plan.
### Inputs:
- percentage: (0-100, per price slider)
- isBusiness: true/false
- planLevel: (Basic, Standard, Premium, Enterprise, Ultimate)
## submitRequest: Use to register user interest or questions.
### Inputs:
- email (ask user for missing data)
- message (summary of user's inquiry/request)
- selectedPrice, selectedPlan (as relevant)
- requestType: (Subscription, Support, Service, Price, FAQ)

# Important Reminders:
- Only respond to Dreptec services, demos, or pricing inquiries.
- Never fabricate information—always back up with outputs from tools.
- Never provide or ask for URLs or links.
- Support user exploration of pricing by suggesting the slider.
- Always verify user satisfaction—iterate if anything is unclear or incomplete.
- Use concise, clear, and polite language, properly formatted.

Current page:
www.dreptec.com current_url

Selected price plan:
price_plan
`

const starterFeatures =[
    ["Website chatbot","From 3 pages", "No website support"],
    ["Enhanced website support","From 5 pages","Simple automation"],
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

const priceRanges= [[0,20], [21,40], [41,60], [61,80], [81,100]]
  // Predefined titles for 5 slides
const slideTitles = [
    "Basic Plan",
    "Standard Plan",
    "Premium Plan",
    "Enterprise Plan",
    "Ultimate Plan"
  ];

const routPlan= (isBusiness:boolean,num:number)=>{
    const starterPrice = (value:number) => Math.round(10 + (value / 100) * (50 - 10))
    const businessPrice = (value:number) => Math.round(100 + (value / 100) * (500 - 100))
    if (isBusiness) {
        return {
            title: slideTitles[num]+ " - Business",
            feature:businessFeatures[num],
            price:`btw $${businessPrice(priceRanges[num][0]).toString()} - $${businessPrice(priceRanges[num][1])}`,
        }
    } else {
        return {
            title: slideTitles[num]+ " - Starter",
            feature:starterFeatures[num],
            price:`btw $${starterPrice(priceRanges[num][0]).toString()} - $${starterPrice(priceRanges[num][1])}`,
        }
    }
}

export const getPriceInfo= (value: number) => {

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

export function getPlan( isBusiness:boolean, percentage?: number| null,planLevel?: string|null){
    if (percentage && !planLevel ){
        const res= getPriceInfo(percentage);
        const ret= {title: res.planTitle, price:"", feature:[""]}
        if (isBusiness) {
          ret.title+= " - Business"
          ret.price="from "+res.businessPrice
          ret.feature= res.businessFeature
        } else {
          ret.title+= " - Starter"
          ret.price="from "+res.starterPrice
          ret.feature= res.starterFeature
        }
        return ret
    } else {
        switch (planLevel) {
            case "Basic": return routPlan(isBusiness,0)
            case "Standard": return routPlan(isBusiness,1)
            case "Premium": return routPlan(isBusiness,2)
            case "Enterprise": return routPlan(isBusiness,3)
            case "Ultimate": return routPlan(isBusiness,4)
            default: return {title:"Unknow plan selected",price:"0",feature:[""]}
        }
    }
}

export async function  submitRequest(email:string,message:string,requestType:string,selectedPrice?:number | null,selectedPlan?:string|null,name?:string|null,phone?:string|null): Promise<string> {
    const formData = new FormData();
    formData.append('name', (name || " no_name" )+" for - "+requestType);
    formData.append('phone', phone || " 100 000000");
    formData.append('price', selectedPrice?.toString() || "[ no price selected]" );
    formData.append('plan', selectedPlan || "[ no plan selected]" );
    formData.append('email', email);
    formData.append('message', message);
    const result = await sendEmail(formData);
    if (result.success) {
        return "Request has been submited. We will contat you ASAP.";
    } else {
        return "An error. Please send the request in another time";
    }
};
    
export function replaceVariables(str: string, dict: Record<string, string>): string {
    // Match words that are valid variable names (letters, numbers, underscores)
    return str.replace(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g, (match) => {
      // If the word exists in the dictionary, replace it
      return dict.hasOwnProperty(match) ? dict[match] : match;
    });
}

// export function getSection(topic: string, episode:string){
//     const idx= ep.indexOf(episode.slice(2,4))
//     const p=fullIdx.TV_SHOW.seasons.S01[episode]

//     switch (topic) {
//     case "summary": return p.summary
//     case "word_freq": return p.word_freq
//     case "bullet_points": return p.bullet_points
//     default: return "wrong topic, only: summary| word_freq| bullet_points"
//     }
// }

// export function getTranscriptContent(episode:string,partNumber: number): string {
//   const idx= ep.indexOf(episode.slice(1,3));
//   const episodeStr = transcript[idx];
//   const linesPerPage = Math.round(episodeStr.split('\r\n\r\n').length/10);
//   const lines = episodeStr.split('\r\n\r\n');

//   const startIndex = (partNumber - 1) * linesPerPage;
//   const endIndex = startIndex + linesPerPage;

//   // Handle case if page number exceeds total pages
//   if (startIndex >= lines.length) {
//     return '';
//   }

//   if (partNumber > 9){
//     const pageLines = lines.slice(startIndex, (endIndex*2));
//     return pageLines.join('\n');
//   } else {
//     const pageLines = lines.slice(startIndex, endIndex);
//     return pageLines.join('\n');
//   }

// }


  