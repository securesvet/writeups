import Markdown from "https://esm.sh/react-markdown@10";

const files = Deno.readFile("../../../docs/writeup/index.md");

const Writeups = () => {
  console.log(files);
  const markdown = `
# Writeups
Проверка маркдауна`;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center">Writeups</h1>
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default Writeups;
