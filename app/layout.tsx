import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

import { Cinzel } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Cinzel({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Mussadiq's Portfolio",
  description: "Hello I am mussadiq khan and this is my portfolio show casing my skills and my past work plus experience, Discover more about me in here",
  keywords: ["Portfolio", "mussadiq khan", "scrupulous", "web developer", "portfolio"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="3o7TyGVcbl7HdUTElJVPYv05mzt8Ubwu9N0oQenA0F4" />
      </head>
      <body
        className={`${inter.className} antialiased `}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
