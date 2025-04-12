import Markdown from "https://esm.sh/react-markdown@10";

// const markdown = await fetch("./docs/writeup/index.md").then((res) =>
//   res.text()
// );

function Writeups() {
  const writeups = [
    {
      name: "mursvet site",
      description: "mursvet site",
    },
  ];

  const markdown = `
# Writeups
`;
  return (
    <div className="grid grid-cols-2 gap-4 mt-[var(--header-height)]">
      <div>
        <h1 className="text-center">Writeups</h1>
        <Markdown>{markdown}</Markdown>
      </div>
      <aside>
        <p>Writeups</p>
        <div className="flex flex-col border-b-2">
          {writeups.map((writeup) => (
            <div>
              <h3>{writeup.name}</h3>
              <p>{writeup.description}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default Writeups;
