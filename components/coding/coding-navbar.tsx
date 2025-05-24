"use client";

import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";

import { BsList } from "react-icons/bs";
import { ModeToggle } from "@/components/mode-toggle";
import { Timer } from "./timer";

const CodingNavbar = () => {
  const { isSignedIn } = useUser();
  const { redirectToSignIn } = useClerk();
  const params = useParams();
  const pathName = usePathname();

  const isProblemIdPage = params?.problemId;

  function handleLogin() {
    redirectToSignIn({ signInForceRedirectUrl: "/coding" });
  }

  return (
    <nav className="bg-[#F2F3F5] dark:bg-[#171718] flex justify-between p-2 px-4 items-center shadow-md">
      <div>
        <Link
          href="/coding"
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
          AlgoVerse
        </Link>
      </div>

      {isProblemIdPage && (
        <Link
          href="/coding/problems-list"
          className="flex items-center gap-1 font-medium"
        >
          <BsList />
          Problems List
        </Link>
      )}

      <div className="flex gap-4 items-center">
        {isProblemIdPage && <Timer />}
        <ModeToggle />
        {isSignedIn ? (
          <div className="flex justify-center items-center gap-3">
            <UserButton afterSignOutUrl="/coding" />
            {!pathName?.includes("/problems-list") && (
              <Link href="/coding/problems-list" className="ml-2">
                Open App
              </Link>
            )}
          </div>
        ) : (
          <ul className="flex items-center gap-4 text-lg">
            <li>
              <button
                onClick={handleLogin}
                // href="sign-in"
                // className={`${path?.match("/sign-in") ? "text-green-500" : ""}`}
              >
                Login
              </button>
            </li>
            <li>
              <button
              // href="sign-up"
              // className={`${path?.match("/sign-up") ? "text-green-500" : ""}`}
              >
                Sign Up
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
export default CodingNavbar;
