import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
// import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  return { userId };
};

/*
export const ourFileRouter = {
  serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => await handleAuth())
    .onUploadComplete(() => {}),
  messageFile: f(["image", "pdf"])
    .middleware(async () => await handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;
*/

export const ourFileRouter = {
  serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => await handleAuth())
    .onUploadComplete(({ file }) => ({
      url: file.url,
      mimeType: file.type, // Include mimeType
    })),

  messageFile: f(["image", "pdf"])
    .middleware(async () => await handleAuth())
    .onUploadComplete(({ file }) => {
      const fileName = file.name; // Get original filename (includes extension)
      const fileExtension = fileName.split(".").pop(); // Extract file extension
      const correctedUrl = `https://utfs.io/f/${file.key}.${fileExtension}`; // Construct correct URL

      return {
        url: correctedUrl, // Corrected URL with file extension
        originalUrl: file.url, // Store original signed URL (optional)
        fileName: fileName, // Store original name
        mimeType: file.type, // Store MIME type
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
