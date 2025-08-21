import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">Growth Magnet</h1>
      <p className="text-lg mb-6">Create viral LinkedIn lead magnets in under 10 minutes.</p>
      <Link href="/wizard" className="btn">Open Wizard</Link>
      <div className="mt-10 grid gap-4">
        <div className="card">
          <h2 className="font-semibold mb-1">How it works</h2>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Define company, offer, ICP.</li>
            <li>Generate 10 lead‑magnet ideas.</li>
            <li>Talk 3–5 min → transcript.</li>
            <li>Auto‑outline → draft (guide / flowchart / carousel / swipe).</li>
            <li>Get LinkedIn post + replies + warm DMs. Export & ship.</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
