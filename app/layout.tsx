import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBarComponent from "./components/sidebar/SideBarComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React packages demo site",
  description: "Demo site for displaying various react components i've created.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBarComponent>
          {children}
        </SideBarComponent>
      </body>
    </html>
  );
}
