import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

import Loading from "./loading";
import { Header, Footer } from "@/components";
import { homeMeta } from "@/constants";

import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...homeMeta,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primaryGreen`}>
        {draftMode().isEnabled && (
          <a
            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        <Header />
        <div className="mx-auto max-w-full">
          {" "}
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>

        {draftMode().isEnabled && <VisualEditing />}
        <Footer />
      </body>
    </html>
  );
}
