import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

export const StudyResourcesTable = ({
  resourcesData,
}: {
  resourcesData: PropsType[];
}) => {
  return (
    <>
      <h1 className="text-xl mb-6 underline font-semibold">Study Materials:</h1>
      <Table>
        <TableHeader className="bg-[#F2F3F5] dark:bg-[#2B2D31]">
          <TableRow>
            <TableHead>Topics</TableHead>
            <TableHead>Text Resources (Books, PDFs, Articles)</TableHead>
            <TableHead>Video Resources (YouTube, Courses)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {resourcesData.map((resource, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium align-top">
                {resource.name}
              </TableCell>
              <TableCell className="align-top">
                {resource.text_resources.length > 0 ? (
                  <ul className="pl-4 list-disc space-y-2">
                    {resource.text_resources.map((text, i) => (
                      <li key={i}>
                        <div className="flex gap-1 items-center">
                          <p>{text.name}</p>
                          <a
                            href={text.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            [Link]
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-gray-500">No Text Resources</span>
                )}
              </TableCell>
              <TableCell className="align-top">
                {resource.video_resources.length > 0 ? (
                  <ul className="list-disc pl-4 list space-y-2">
                    {resource.video_resources.map((video, i) => (
                      <li key={i}>
                        <div className="flex gap-1 items-center">
                          <p>{video.name}</p>
                          <a
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            [Link]
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-gray-500">No Video Resources</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
