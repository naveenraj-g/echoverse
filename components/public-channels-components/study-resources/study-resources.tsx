import { StudyResourcesTable } from "@/components/public-channels-components/study-resources/study-resources-table";

type PropsType = {
  name: string;
  text_resources: {
    name: string;
    link: string;
  }[];
  video_resources: {
    name: string;
    link: string;
  }[];
};

interface StudyResourcesProps {
  studyMaterials: PropsType[];
}

export const StudyResources = ({ studyMaterials }: StudyResourcesProps) => {
  return (
    <>
      <div className="flex-1 flex flex-col py-4 overflow-y-auto px-6">
        <StudyResourcesTable resourcesData={studyMaterials} />
      </div>
    </>
  );
};
