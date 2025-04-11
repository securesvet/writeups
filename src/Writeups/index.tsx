import Markdown from "https://esm.sh/react-markdown@10";

const Writeups = () => {
  const markdown = `
# Writeups
Проверка маркдауна`;
  return (
    <div>
      <h1>Writeups</h1>
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default Writeups;
