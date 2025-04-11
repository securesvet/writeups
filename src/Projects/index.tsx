import mursvet from "/projects/mursvet.png";

const Projects = () => {
  const data = [
    {
      name: "mursvet site",
      image: mursvet,
    },
    {
      name: "mursvet site",
      image: mursvet,
    },
    {
      name: "mursvet site",
      image: mursvet,
    },
    {
      name: "mursvet site",
      image: mursvet,
    },
    {
      name: "mursvet site",
      image: mursvet,
    },
  ];
  return (
    <>
      <h1 className="text-3xl text-center font-bold mb-10">Projects</h1>
      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 ">
        {data.map((el) => (
          <div className="flex flex-col justify-center items-center grow-1">
            <div className="break-inside-avoid w-full mb-[10px] border-2 rounded-2xl text-center">
              <img
                className="max-w-full rounded-xl hover:opacity-80 hover:cursor-pointer transition-opacity"
                alt="user image"
                src={el.image}
              />
            </div>
            <div>
              <h1 className="font-bold">{el.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
