import type { Metadata } from "next";
import { Archivo, JetBrains_Mono, Newsreader } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyaw Software Studio | Software Engineer Portfolio",
  description:
    "A mobile-first software engineer portfolio built with Next.js, shadcn/ui, Tailwind CSS, Three.js, GSAP, and Vercel AI SDK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${newsreader.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
