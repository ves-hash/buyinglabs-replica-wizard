"use client";
import { useState } from "react";
import VoiceCapture from "./VoiceCapture";
import { systemRules, ideationPrompt, outlinePrompt, guideDraftPrompt, postPackPrompt } from "@/lib/prompts";

type Step = 1|2|3|4|5;

export default function Wizard() {
  const [step, setStep] = useState<Step>(1);

  // Step 1: define
  const [companyName, setCompanyName] = useState("Passion4Growth");
  const [companyDesc, setCompanyDesc] = useState("Revenue growth partner. LinkedIn Growth Accelerator, Go-To-Market, Business Development as a Service.");
  const [offerings, setOfferings] = useState("LinkedIn Growth Accelerator; Go-To-Market; BDaS");
  const [icpTitles, setIcpTitles] = useState("Founder, CEO, VP Sales, Head of BD");
  const [icpDesc, setIcpDesc] = useState("B2B SaaS/logistics/wholesale companies with 5–50 employees, looking for predictable pipeline.");
  const [icpCriteria, setIcpCriteria] = useState("EU/US; active on LinkedIn; sales team ≤ 5; ACV 5k–50k");
  const [pains, setPains] = useState("Inconsistent pipeline; weak positioning; outbound underperforms; no partnerships engine.");

  // Step 2: ideation
  const [ideas, setIdeas] = useState<string>("");
  const runIdeation = async () => {
    const prompt = ideationPrompt({ companyName, companyDesc, offerings, icpTitles, icpDesc, icpCriteria, pains });
    const res = await fetch("/api/generate", { method:"POST", body: JSON.stringify({ purpose:"ideation", prompt, system: systemRules }) });
    const data = await res.json(); setIdeas(data.content); setStep(3);
  };

  // Step 3: outline (from chosen idea + transcript)
  const [chosenIdea, setChosenIdea] = useState("");
  const [transcript, setTranscript] = useState("");
  const [outline, setOutline] = useState("");
  const runOutline = async () => {
    const prompt = outlinePrompt({ idea: chosenIdea, what:"", description:"", format:"Guide", icp: icpDesc, transcript });
    const res = await fetch("/api/generate", { method:"POST", body: JSON.stringify({ purpose:"outline", prompt, system: systemRules }) });
    const data = await res.json(); setOutline(data.content); setStep(4);
  };

  // Step 4: draft guide
  const [guide, setGuide] = useState("");
  const runGuide = async () => {
    const prompt = guideDraftPrompt(outline);
    const res = await fetch("/api/generate", { method:"POST", body: JSON.stringify({ purpose:"draft-guide", prompt, system: systemRules }) });
    const data = await res.json(); setGuide(data.content); setStep(5);
  };

  // Step 5: post + replies + DMs
  const [postPack, setPostPack] = useState("");
  const runPostPack = async () => {
    const prompt = postPackPrompt({ assetName: chosenIdea || "Lead Magnet", icp: icpDesc });
    const res = await fetch("/api/generate", { method:"POST", body: JSON.stringify({ purpose:"postpack", prompt, system: systemRules }) });
    const data = await res.json(); setPostPack(data.content);
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">Growth Magnet — 10‑minute builder</h1>

      {step===1 && (
        <section className="card space-y-4">
          <h2 className="font-semibold text-lg">1) Define</h2>
          <input className="w-full border p-2 rounded" value={companyName} onChange={e=>setCompanyName(e.target.value)} placeholder="Company Name"/>
          <textarea className="w-full border p-2 rounded" value={companyDesc} onChange={e=>setCompanyDesc(e.target.value)} placeholder="Company Description"/>
          <input className="w-full border p-2 rounded" value={offerings} onChange={e=>setOfferings(e.target.value)} placeholder="Offerings"/>
          <input className="w-full border p-2 rounded" value={icpTitles} onChange={e=>setIcpTitles(e.target.value)} placeholder="ICP Titles"/>
          <textarea className="w-full border p-2 rounded" value={icpDesc} onChange={e=>setIcpDesc(e.target.value)} placeholder="ICP Description"/>
          <input className="w-full border p-2 rounded" value={icpCriteria} onChange={e=>setIcpCriteria(e.target.value)} placeholder="ICP Criteria"/>
          <textarea className="w-full border p-2 rounded" value={pains} onChange={e=>setPains(e.target.value)} placeholder="Top pains"/>
          <div className="flex gap-3">
            <button className="btn" onClick={()=>setStep(2)}>Next</button>
          </div>
        </section>
      )}

      {step===2 && (
        <section className="card space-y-4">
          <h2 className="font-semibold text-lg">2) Ideate</h2>
          <p>Generate 10 lead‑magnet ideas mapped to your ICP.</p>
          <div className="flex gap-3">
            <button className="btn" onClick={runIdeation}>Generate ideas</button>
            <button className="btn bg-accent1" onClick={()=>setStep(1)}>Back</button>
          </div>
          {ideas && (
            <div className="mt-4">
              <textarea className="w-full border p-2 rounded h-80" value={ideas} onChange={e=>setIdeas(e.target.value)}/>
              <input className="mt-3 w-full border p-2 rounded" placeholder="Paste the idea you choose here" value={chosenIdea} onChange={e=>setChosenIdea(e.target.value)}/>
            </div>
          )}
          {ideas && <button className="btn mt-3" onClick={()=>setStep(3)}>Next</button>}
        </section>
      )}

      {step===3 && (
        <section className="card space-y-4">
          <h2 className="font-semibold text-lg">3) Outline (voice → transcript)</h2>
          <VoiceCapture onText={setTranscript}/>
          <textarea className="w-full border p-2 rounded h-40" value={transcript} onChange={e=>setTranscript(e.target.value)} placeholder="Speak or paste your 3–5 min description..."/>
          <button className="btn" onClick={runOutline}>Create outline</button>
          {outline && (
            <>
              <h3 className="font-semibold mt-4">Outline</h3>
              <textarea className="w-full border p-2 rounded h-80" value={outline} onChange={e=>setOutline(e.target.value)}/>
              <button className="btn mt-3" onClick={()=>setStep(4)}>Next</button>
            </>
          )}
        </section>
      )}

      {step===4 && (
        <section className="card space-y-4">
          <h2 className="font-semibold text-lg">4) Draft (Guide)</h2>
          <button className="btn" onClick={runGuide}>Write guide</button>
          {guide && (
            <>
              <h3 className="font-semibold mt-4">Guide (Markdown)</h3>
              <textarea className="w-full border p-2 rounded h-[500px]" value={guide} onChange={e=>setGuide(e.target.value)}/>
              <button className="btn mt-3" onClick={()=>setStep(5)}>Next</button>
            </>
          )}
        </section>
      )}

      {step===5 && (
        <section className="card space-y-4">
          <h2 className="font-semibold text-lg">5) Publish (Posts + Replies + Warm DMs)</h2>
          <button className="btn" onClick={runPostPack}>Generate pack</button>
          {postPack && (
            <>
              <h3 className="font-semibold mt-4">Result</h3>
              <textarea className="w-full border p-2 rounded h-[500px]" value={postPack} onChange={e=>setPostPack(e.target.value)}/>
            </>
          )}
        </section>
      )}

      <div className="mt-6 flex gap-2">
        {step>1 && <button className="btn bg-accent2" onClick={()=>setStep((step-1) as Step)}>Back</button>}
        {step<5 && <button className="btn" onClick={()=>setStep((step+1) as Step)}>Skip</button>}
      </div>
    </main>
  );
}

