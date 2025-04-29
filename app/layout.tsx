import { Roboto, Sarabun } from "next/font/google";
import "./styles/globals.css";
import type { Metadata } from "next";

// Configure Roboto
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700", "900"], 
});

// Configure Sarabun
const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["latin"],
  weight: ["200", "400", "800"], 
});

export const metadata: Metadata = {
  title: {
    template: '%s | Well Lit Pictures',
    default: 'Well Lit Pictures',
  },
  description: "Feel the moment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${sarabun.variable}`}>
      <body className="antialiased font-roboto"> {/* Apply Roboto as the default body font */}
        <div className="min-h-screen bg-[url(/images/background.jpg)] bg-cover bg-center">
          {children}
        </div>
      </body>
    </html>
  );
}