import { ActionTooltip } from "@/components/action-tooltip";
import { AiOutlineFullscreen, AiOutlineSetting } from "react-icons/ai";
import { LanguageSelector } from "./language-selector";

export const PlaygroundNav = ({
  lang,
  setLang,
}: {
  lang: string;
  setLang: (lang: string) => void;
}) => {
  return (
    <div className="flex items-center justify-between h-11 w-full p-2">
      <div className="flex items-center">
        {/* <button className="flex cursor-pointer ml-2 text-white items-center bg-zinc-700 rounded focus:outline-none  px-2 py-1.5 font-medium">
          <div className="flex items-center px-1">
            <div className="text-xs text-label-2">JavaScript</div>
          </div>
        </button> */}
        <LanguageSelector language={lang} onSelect={setLang} />
      </div>

      <div className="flex items-center mr-3 gap-4">
        <ActionTooltip label="Setting" side="bottom">
          <button>
            <div className="h-4 w-4 text-dark-gray-6 font-bold text-lg">
              <AiOutlineSetting />
            </div>
          </button>
        </ActionTooltip>

        <ActionTooltip label="Full Screen" side="bottom">
          <button>
            <div className="h-4 w-4 text-dark-gray-6 font-bold text-lg">
              <AiOutlineFullscreen />
            </div>
          </button>
        </ActionTooltip>
      </div>
    </div>
  );
};
