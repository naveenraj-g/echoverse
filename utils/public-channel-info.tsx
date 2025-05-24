import { Quiz } from "@/components/public-channels-components/quiz/quiz";
import { Roadmap } from "@/components/public-channels-components/roadmaps/roadmap";
import { StudyResources } from "@/components/public-channels-components/study-resources/study-resources";
import {
  aptitudeRoadMap,
  reasoningRoadMap,
  verbalAbilityRoadMap,
  dsaRoadMap,
} from "@/datas/roadmaps/roadmap-datas";
import { AptiReasoningVerbleStudyResources } from "@/datas/study-resources/study-resources";

export const PUBLIC_CHANNELS = {
  MindForgeRoadmap: {
    serverId: "65c72114-adb3-4eca-af76-3b0cb2da80d1",
    channelId: "7c4aefdb-e40d-4850-9e74-82a407de2c33",
    component: (
      <Roadmap
        aptitudeDatas={aptitudeRoadMap}
        reasoningDatas={reasoningRoadMap}
        verbleDatas={verbalAbilityRoadMap}
      />
    ),
  },
  AlgoVerseRoadmap: {
    serverId: "44346ca4-75f0-4aa0-a776-e54ac7a88730",
    channelId: "a61bf5aa-90ef-4746-9b26-e7e132c4700a",
    component: (
      <Roadmap
        roadmap={{ dsaRoadMap, label: "Data Structures and Algorithms" }}
      />
    ),
  },
  MidnForgeResources: {
    serverId: "65c72114-adb3-4eca-af76-3b0cb2da80d1",
    channelId: "34989d92-240a-49b6-95a5-b5a6208a0d35",
    component: (
      <StudyResources studyMaterials={AptiReasoningVerbleStudyResources} />
    ),
  },
  MindForgeQuiz: {
    serverId: "65c72114-adb3-4eca-af76-3b0cb2da80d1",
    channelId: "4e50bdac-68cd-4098-b3b0-169497e890f8",
    component: <Quiz />,
  },
};
