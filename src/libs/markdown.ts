import { marked } from "marked";

export async function readFile(file: string) {
    const fancyFile = Bun.file(file);
    const fileContents = await fancyFile.text();
    return fileContents;
}
export async function markdownMachine(file: string) {
    const fancyFile = Bun.file(file);
    const fileContents = await fancyFile.text();
    marked.use({
        gfm: true,
    });
    return marked.parse(fileContents);
}
