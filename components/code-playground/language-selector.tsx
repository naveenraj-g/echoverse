"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { LANGUAGE_VERSIONS } from "./constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

export const LanguageSelector = ({
  language,
  onSelect,
}: {
  language: string;
  onSelect: (lang: string) => void;
}) => {
  return (
    <div className="ml-2 mb-4">
      <p className="mb-2 text-lg">Language: </p>
      <Select defaultValue={language} onValueChange={onSelect}>
        <SelectTrigger className="w-[120px]">{language}</SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {languages.map(([lang, version]) => {
              return (
                <SelectItem key={lang} value={lang}>
                  {lang}{" "}
                  <span className="text-gray-600 text-sm">({version})</span>
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
