import { readMultilineTextFile } from "../utils/readMultilineTextFile"
import { parseInstruction } from "./dial"
const inputFilePath = "./input-01-01.txt"

export function countDialPassingZero(currentNumber: number, direction: "L" | "R", steps: number): [currentNumber: number, timesPassingZero: number] {
    let timesPassingZero = 0

    if (direction === "L") {
        while (steps > 0) {
            let stepsToTake = steps > 100 ? 100 : steps
            let newNumber = currentNumber - stepsToTake
            if (currentNumber > 0 && newNumber <= 0) {
                timesPassingZero++
            } else if (currentNumber == 0 && stepsToTake == 100) {
                timesPassingZero++
            }

            steps = steps - stepsToTake
            currentNumber = (newNumber + 100) % 100
        }
    } else if (direction === "R") {
        while (steps > 0) {
            let stepsToTake = steps > 100 ? 100 : steps
            let newNumber = currentNumber + stepsToTake
            if (currentNumber < 100 && newNumber >= 100) {
                timesPassingZero++
            } else if (currentNumber == 0 && stepsToTake == 100) {
                timesPassingZero++
            }

            steps = steps - stepsToTake
            currentNumber = (newNumber + 100) % 100
        }
    }

    return [currentNumber, timesPassingZero]
}

if (require.main === module) {
    let currentNumber = 50
    let dialPassingZeroCount = 0
    const instructions = readMultilineTextFile(inputFilePath)

    instructions.forEach((value) => {
        const [direction, steps] = parseInstruction(value)
        const [newNumber, timesPassingZero] = countDialPassingZero(currentNumber, direction, steps)
        currentNumber = newNumber
        dialPassingZeroCount = dialPassingZeroCount + timesPassingZero
    })

    console.log(`Password: ${dialPassingZeroCount}`)
}
