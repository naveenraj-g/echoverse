import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import InitialModal from "@/components/modals/initial-modal";

type Profile = {
  name?: string;
  id?: string;
  userId?: string;
  userName?: string | null;
  imageUrl?: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
} | null;

const SetupPage = async () => {
  const profile: Profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/app/servers/${server.id}`);
  }

  return (
    <>
      <InitialModal />
    </>
  );
};

export default SetupPage;
