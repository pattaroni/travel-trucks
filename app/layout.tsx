import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.scss";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Trucks",
  description: "Travel Trucks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProvider>
      <html lang="en" className={inter.variable}>
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </TanStackProvider>
  );
}
