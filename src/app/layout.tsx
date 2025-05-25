import type { Metadata } from "next";
import { IBM_Plex_Mono, Libre_Baskerville, Lora } from "next/font/google";
import { Footer } from "~/components/layout/footer";
import { Header } from "~/components/layout/header";
import { Providers } from "~/components/providers";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "fabra.me",
  description: "fabra.me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${libreBaskerville.variable} ${lora.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen bg-background font-sans">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
