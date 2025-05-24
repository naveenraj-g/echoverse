"use client";

import { FileIcon, X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endPoint: "messageFile" | "serverImage";
  isMultiFile?: boolean;
}

export const FileUpload = ({
  onChange,
  value,
  endPoint,
  isMultiFile,
}: FileUploadProps) => {
  console.log(value);
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf" && !isMultiFile) {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="uploaded image" className="rounded-full" />
        <button
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
          onClick={() => onChange("")}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (value && isMultiFile) {
    const fileUrl = value.slice(0, -4);
    const fileType = value?.split(".").pop();

    if (fileType === "pdf") {
      return (
        <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
          <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
          >
            See Preview
          </a>
          <button
            className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
            type="button"
            onClick={() => onChange("")}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      );
    } else {
      return (
        <div className="relative h-20 w-20">
          <Image
            fill
            src={fileUrl}
            alt="uploaded image"
            className="rounded-full"
          />
          <button
            className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
            type="button"
            onClick={() => onChange("")}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      );
    }
  }

  return (
    <UploadDropzone
      key={value}
      endpoint={endPoint}
      onClientUploadComplete={(res) => {
        console.log(res);
        onChange(res?.[0]?.serverData?.url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
