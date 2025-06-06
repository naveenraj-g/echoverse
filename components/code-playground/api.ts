/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { LANGUAGE_VERSIONS } from "@/components/code-playground/constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language: any, sourceCode: any) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
