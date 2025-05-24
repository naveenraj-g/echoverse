import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const languages = [
  ["javascript", "18.15.0"],
  ["python", "3.10.0"],
];

export const LanguageSelector = ({
  language,
  onSelect,
}: {
  language: string;
  onSelect: (lang: string) => void;
}) => {
  return (
    <div>
      <Select defaultValue={language} onValueChange={onSelect}>
        <SelectTrigger className="w-[110px] bg-zinc-700 text-white h-auto ring-0 focus:ring-0 focus:ring-offset-0 focus:outline-none py-1.5">
          {language}
        </SelectTrigger>
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
