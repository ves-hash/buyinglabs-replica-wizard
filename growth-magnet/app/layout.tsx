import "./globals.css";

export const metadata = { title: "Growth Magnet", description: "10‑minute lead magnet builder" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
