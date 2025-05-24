import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RoadmapList } from "@/components/public-channels-components/roadmaps/roadmap-list";

type propsType = {
  name: string;
  description: string;
};

interface RoadmapProps {
  aptitudeDatas?: propsType[];
  reasoningDatas?: propsType[];
  verbleDatas?: propsType[];
  roadmap?: { dsaRoadMap: propsType[]; label: string };
}

export const Roadmap = ({
  aptitudeDatas,
  reasoningDatas,
  verbleDatas,
  roadmap,
}: RoadmapProps) => {
  return (
    <div className="flex-1 flex flex-col py-4 overflow-y-auto px-6">
      {roadmap ? (
        <RoadmapList datas={roadmap.dsaRoadMap} label={roadmap.label} />
      ) : (
        <div>
          <Tabs defaultValue="aptitude">
            <TabsList className="mb-4">
              <TabsTrigger value="aptitude">Aptitude</TabsTrigger>
              <TabsTrigger value="reasoning">Logical Reasoning</TabsTrigger>
              <TabsTrigger value="verbal">Verbal Ability</TabsTrigger>
            </TabsList>

            <TabsContent value="aptitude">
              <RoadmapList datas={aptitudeDatas} label="Aptitude" />
            </TabsContent>

            <TabsContent value="reasoning">
              <RoadmapList datas={reasoningDatas} label="Logical Reasoning" />
            </TabsContent>

            <TabsContent value="verbal">
              <RoadmapList datas={verbleDatas} label="Verbal Ability" />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};
