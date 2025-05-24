import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div>
      <SignIn forceRedirectUrl="/app" />
    </div>
  );
}
