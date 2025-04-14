import { mdToPdf } from "npm:md-to-pdf";

(async () => {
  const pdf = await mdToPdf({ path: "./src/assets/resume.md" }).catch(
    console.error,
  );

  if (pdf) {
    Deno.writeFileSync("./src/assets/resume.pdf", pdf.content);
    console.log("PDF created");
  } else {
    console.log("PDF not created");
  }
})();
