"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

export default function MainNavigation() {
  const { isSignedIn } = useUser();
  const path = usePathname();

  if (
    !["/", "/sign-in", "/sign-up"].includes(path ?? "") &&
    !path?.startsWith("/quiz")
  )
    return null;
  // #F2F3F5  #E3E5E8
  return (
    <nav
      className={cn(
        "bg-[#F2F3F5] dark:bg-[#171718] flex justify-between p-2 px-4 items-center shadow-md",
        path === "/quiz" && "fixed w-full"
      )}
    >
      <div>
        <Link
          href="/"
          className="text-lg font-black tracking-wide flex items-center gap-2"
        >
          <Image
            src="/logo/icon.png"
            alt="logo"
            priority
            height={18}
            width={18}
            className="w-auto h-auto dark:invert"
          />
          EchoVerse
        </Link>
      </div>
      <div className="flex gap-4">
        <ModeToggle />
        {isSignedIn ? (
          <div className="flex justify-center items-center gap-3">
            <UserButton />
            {path?.startsWith("/quiz") ? (
              <Link href="/quiz" className="ml-2">
                Home
              </Link>
            ) : (
              <Link href="/app" className="ml-2">
                Open App
              </Link>
            )}
          </div>
        ) : (
          <ul className="flex items-center gap-4 text-lg">
            {/* <li>
              <Link
                href="sign-in"
                className={`${path?.match("/sign-in") ? "text-green-500" : ""}`}
              >
                Login
              </Link>
            </li> */}
            <li>
              <Link
                href="sign-in"
                className={`${path?.match("/sign-In") ? "text-green-500" : ""}`}
              >
                Sign In
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
