import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

import { Cinzel } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Cinzel({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Mussadiq's Portfolio",
  description: "Modern eye catching portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased `}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
