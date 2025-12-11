export function readMultilineTextFile(filePath: string): string[] {
    const fs = require("fs")
    const data = fs.readFileSync(filePath, "utf-8")
    return data.split("\n").filter((line: string) => line.trim() !== "")
}
