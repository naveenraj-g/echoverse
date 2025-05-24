type propsType = {
  name: string;
  description: string;
};

export const RoadmapList = ({
  datas,
  label,
}: {
  datas?: propsType[];
  label?: string;
}) => {
  return (
    <>
      <h1 className="text-xl mb-6 underline font-semibold">{label} Roadmap:</h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {datas?.map((data, i) => (
          <li className="mb-10 ms-4" key={i}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {data.name}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {data.description}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
};
