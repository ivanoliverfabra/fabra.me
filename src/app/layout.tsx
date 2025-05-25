import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Libre_Baskerville, Lora } from "next/font/google";
import { Footer } from "~/components/layout/footer";
import { Header } from "~/components/layout/header";
import { Providers } from "~/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "fabra.me",
    template: `%s | fabra.me`,
  },
  description:
    "Explore the portfolio of Ivan Oliver, a Full-Stack Developer specializing in crafting elegant web solutions that bridge the gap between design and functionality. Discover projects, skills, and professional experience.",
  keywords: [
    "Ivan Oliver",
    "Full-Stack Developer",
    "portfolio",
    "web developer",
    "software engineer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "UI/UX",
    "projects",
    "experience",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fabra.me",
  },
  openGraph: {
    title: "Ivan Oliver | Full-Stack Developer Portfolio",
    description:
      "Explore the portfolio of Ivan Oliver, a Full-Stack Developer specializing in crafting elegant web solutions that bridge the gap between design and functionality.",
    url: "https://fabra.me",
    siteName: "fabra.me",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Oliver | Full-Stack Developer Portfolio",
    description:
      "Explore the portfolio of Ivan Oliver, a Full-Stack Developer specializing in crafting elegant web solutions that bridge the gap between design and functionality.",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  authors: [
    {
      name: "Ivan Oliver",
      url: "https://fabra.me",
    },
  ],
  creator: "Ivan Oliver",
  publisher: "Ivan Oliver",
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#a67c52",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#c0a080",
    },
  ],
};

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
