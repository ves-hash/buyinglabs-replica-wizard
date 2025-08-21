export const systemRules = `
You are a direct-response strategist. Write in Ves Georgiev’s LinkedIn style:
- Bold hook. Short lines. Bullet clarity. Sharp transitions. Clear CTA.
- No fluff. Outcome-first. Skimmable. Professional with personality.
- Teach value without hard pitching.
`;

export interface IdeationInput {
  companyName: string;
  companyDesc: string;
  offerings: string;
  icpTitles: string;
  icpDesc: string;
  icpCriteria: string;
  pains: string;
}

export function ideationPrompt(input: IdeationInput) {
  return `
#Company
Name: ${input.companyName}
Description: ${input.companyDesc}
Offerings: ${input.offerings}

#ICP
Title(s): ${input.icpTitles}
Description: ${input.icpDesc}
Criteria: ${input.icpCriteria}

#Pains that keep them up at night:
${input.pains}

#Task
Generate 10 high-value lead magnet ideas across formats (flowchart, protocol, case study, tutorial, ebook/guide, whitepaper, calculator/tool, benchmark/report, swipe file, mini-course, quiz/assessment).
For each idea return:
- Name
- Format
- Hook (1 line, strong)
- Promise (specific outcome)
- Why this resonates with the ICP now
- One-sentence outline
- Viral LinkedIn post angle
- Warm DM angle
Use direct response principles. Keep it punchy. No fluff.
`;
}

export interface OutlineInput {
  idea: string;
  what: string;
  description: string;
  format: string;
  icp: string;
  transcript: string;
}

export function outlinePrompt(input: OutlineInput) {
  return `
#Lead Magnet Idea
${input.idea}

#What + Description + Format
${input.what}
${input.description}
Format: ${input.format}

#Target Audience (ICP)
${input.icp}

#Transcript (from 3–5 min voice)
${input.transcript}

#Task
Create a structured, step-by-step outline. Sections + subsections + checklists + examples.
Suggest visuals (flowchart/table/carousel cues).
End with a 1-line CTA that invites comments or DMs.
No pitching. Keep momentum line-by-line.
`;
}

export function guideDraftPrompt(outline: string) {
  return `
#Outline
${outline}

#Task
Write a practical guide in Markdown:
- H2 sections
- Bulleted steps
- Checklists and mini-examples
- Keep lines short and direct
- Finish with a clean CTA (“Comment ‘guide’ and I’ll send the template.”)
`;
}

export interface PostPackInput {
  assetName: string;
  icp: string;
}

export function postPackPrompt(input: PostPackInput) {
  return `
#Context
Asset: ${input.assetName}
ICP: ${input.icp}

#Task
Return JSON with:
{
  "posts": [
    { "style": "Hook-first", "copy": "..." },
    { "style": "Case-led", "copy": "..." },
    { "style": "Listicle", "copy": "..." }
  ],
  "replies": ["10 short human replies to commenters..."],
  "dms": [
    {"m1":"thank + micro-value + ask keyword"},
    {"m2":"extra tip + soft CTA"},
    {"m3":"nudge + calendar if they ask"}
  ]
}
Tone: Ves style. No fluff. Clear CTA.
`;
}

