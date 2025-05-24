import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import NextTopLoader from "nextjs-toploader";

import MainNavigation from "@/components/main-navigation";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SocketProvider } from "@/components/providers/socket-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EchoVerse",
  description:
    "Echoverse is a community-driven platform designed for seamless communication, collaborative learning, and coding practice. Engage in public channels for Data Structures and Algorithms (DSA), aptitude, logical reasoning, and verbal ability quizzes. Enhance your programming skills with an integrated code editor, solve quizzes, and track progress—all in one place. Join Echoverse and level up your problem-solving abilities!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{ baseTheme: dark }}
      signInFallbackRedirectUrl="/app"
      signUpFallbackRedirectUrl="/app"
      afterSignOutUrl="/"
    >
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="echoverse-theme"
          >
            <SocketProvider>
              <ClerkLoading>
                <div className="h-screen flex flex-col flex-1 justify-center items-center">
                  <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Loading...
                  </p>
                </div>
              </ClerkLoading>
              <ClerkLoaded>
                <ModalProvider />
                <div className="text-black dark:text-white">
                  <MainNavigation />
                  <NextTopLoader showSpinner={false} />
                  <QueryProvider>{children}</QueryProvider>
                  <Toaster />
                </div>
              </ClerkLoaded>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

// className="bg-[url(/bg/bg.jpg)] bg-cover bg-center h-screen"
