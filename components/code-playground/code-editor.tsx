/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";

import Editor from "@monaco-editor/react";
import { LanguageSelector } from "@/components/code-playground/language-selector";
import { CODE_SNIPPETS } from "@/components/code-playground/constants";
import { Output } from "@/components/code-playground/output";

export const CodeEditor = () => {
  const editorRef = useRef("");
  const [value, setValue] = useState<string | undefined>(
    CODE_SNIPPETS.javascript
  );
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (lang: string) => {
    setLanguage(lang);
    setValue(CODE_SNIPPETS[lang]);
  };

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <LanguageSelector language={language} onSelect={onSelect} />
        <Editor
          height="75vh"
          theme="vs-dark"
          language={language}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
      <div className="flex-1">
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};
