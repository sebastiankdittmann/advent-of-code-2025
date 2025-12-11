import { parseInstruction, turnDial } from "./dial"
import { readMultilineTextFile } from "../utils/readMultilineTextFile"

const filePath = "./input-01-01.txt"

const instructions = readMultilineTextFile(filePath)
let currentNumber = 50
let dialPointingAtZero = 0

for (const instruction of instructions) {
    const [direction, steps] = parseInstruction(instruction)
    currentNumber = turnDial(currentNumber, direction, steps)
    if (currentNumber === 0) {
        dialPointingAtZero++
    }
}

console.log(`Password: ${dialPointingAtZero}`)
