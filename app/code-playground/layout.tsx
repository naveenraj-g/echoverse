import { Provider } from "@/components/ui/provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EchoVerse Code Playground",
  description: "Browser code playground to write code and test it.",
};

const CodePlaygroundLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default CodePlaygroundLayout;
