// Building writeups JSON in order to use it statically

// import createResumePDF from "./resume.ts";

// await createResumePDF();

type ResultJSON = {
  directories: DirectoryWithMarkdown[];
};

type DirectoryWithMarkdown = {
  id: number;
  isMDX: boolean;
  name: string;
  content: string;
  description: string;
  birthtime: string;
  lastEdited: string;
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

    const { birthtime, ctime } = Deno.statSync(
      `${basePath}${markdownDirectory.name}/index.md`,
    );

    directories.push({
      id: directories.length + 1,
      isMDX: false,
      name: markdownDirectory.name,
      content: textFile,
      description: textFile.substring(0, 100),
      birthtime: birthtime?.toDateString() || "",
      lastEdited: ctime?.toDateString() || "",
    });
  }
}

const result: ResultJSON = {
  directories,
};

const writeupsJson = JSON.stringify(result);
Deno.writeTextFileSync("./src/assets/writeups.json", writeupsJson);
