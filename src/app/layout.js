import Head from "next/head";
import "./globals.css";

import { Inter, Roboto } from "next/font/google";
import AuthProvider from "./Authentication/AuthProvider/AuthProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});
export const metadata = {
  title: "Doc House",
  description: "Generated by Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={roboto.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
