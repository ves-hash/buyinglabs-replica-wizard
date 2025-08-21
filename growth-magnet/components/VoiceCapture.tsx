"use client";
import { useEffect, useRef, useState } from "react";

type WebSpeechRecognition = {
  start: () => void;
  stop: () => void;
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (e: { resultIndex: number; results: Array<Array<{ transcript: string }>> }) => void;
};

declare global {
  interface Window {
    webkitSpeechRecognition?: new () => WebSpeechRecognition;
    SpeechRecognition?: new () => WebSpeechRecognition;
  }
}

export default function VoiceCapture({ onText }: { onText: (t: string) => void }) {
  const [listening, setListening] = useState(false);
  const recRef = useRef<WebSpeechRecognition | null>(null);

  useEffect(() => {
    const SR = window.webkitSpeechRecognition || window.SpeechRecognition;
    if (!SR) return;
    const rec: WebSpeechRecognition = new SR();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = "en-US";
    rec.onresult = (e) => {
      let txt = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        txt += e.results[i][0].transcript;
      }
      onText(txt);
    };
    recRef.current = rec;
  }, [onText]);

  const start = () => { recRef.current?.start(); setListening(true); };
  const stop  = () => { recRef.current?.stop();  setListening(false); };

  return (
    <div className="flex items-center gap-3">
      <button onClick={start} disabled={listening} className="btn">🎙 Start</button>
      <button onClick={stop}  disabled={!listening} className="btn bg-accent1">■ Stop</button>
      <span className="text-sm">{listening ? "Listening..." : "Idle"}</span>
    </div>
  );
}

