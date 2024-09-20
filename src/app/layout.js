import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "MOMO Game",
  description: "Create with love <3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
