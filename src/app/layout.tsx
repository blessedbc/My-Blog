import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Blog",
  description: "A personal blog about web development, programming, and technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/favicon.ico" />
         <title>MyApp</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            background: "#fff",
            zIndex: 100,
            borderBottom: "1px solid #eee",
            padding: "1rem",
          }}
        >
          {/* Add your nav links here */}
          <a href="/" style={{ marginRight: "1rem" }}>Home</a>
          <a href="/about">About</a>
        </nav>
        <div style={{ paddingTop: "70px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
