"use client";
import "./style.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next Boiler Plate</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}