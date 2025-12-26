import { readMultilineTextFile } from "../utils/readMultilineTextFile"

const inputFilePath = "./input-03.txt"

function getHighestJoltageForRow(row: string): number {
    let firstDigit: number = 0
    let secondDigit: number = 0

    const digits = row.split("").map((digit) => parseInt(digit))

    for (let i = 0; i < digits.length; i++) {
        if (i < digits.length - 1 && digits[i] > firstDigit) {
            firstDigit = digits[i]
            secondDigit = digits[i + 1]
        } else if (digits[i] > secondDigit) {
            secondDigit = digits[i]
        }
    }

    return parseInt(`${firstDigit}${secondDigit}`)
}

const joltage: number[] = []
const input = readMultilineTextFile(inputFilePath)
input.forEach((row) => {
    joltage.push(getHighestJoltageForRow(row))
})

console.log(`The sum is ${joltage.reduce((sum, current) => sum + current, 0)}`)
