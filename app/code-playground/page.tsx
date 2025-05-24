import { CodeEditor } from "@/components/code-playground/code-editor";

const CodePlayground = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0f0a19] text-gray-300 px-6 py-8">
        <CodeEditor />
      </div>
    </>
  );
};

export default CodePlayground;
