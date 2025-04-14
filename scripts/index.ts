// Building writeups JSON in order to use it statically
type ResultJSON = {
  directories: DirectoryWithMarkdown[];
};

type DirectoryWithMarkdown = {
  id: number;
  name: string;
  markdown: string;
  description: string;
  birthtime: string;
};

const basePath = "./docs/";

const markdownDirectories = Deno.readDir(basePath);

if (!markdownDirectories) {
  console.log("No writeups found");
}

const directories: DirectoryWithMarkdown[] = [];

for await (const markdownDirectory of markdownDirectories) {
  if (markdownDirectory.isDirectory) {
    const textFile = await Deno.readTextFile(
      `${basePath}${markdownDirectory.name}/index.md`,
    );

    const { birthtime } = Deno.statSync(
      `${basePath}${markdownDirectory.name}/index.md`,
    );

    directories.push({
      id: directories.length + 1,
      name: markdownDirectory.name,
      markdown: textFile,
      description: textFile.substring(0, 100),
      birthtime: birthtime?.toDateString() || "",
    });
  }
}

const result: ResultJSON = {
  directories,
};

const writeupsJson = JSON.stringify(result);
Deno.writeTextFileSync("./src/writeups.json", writeupsJson);
