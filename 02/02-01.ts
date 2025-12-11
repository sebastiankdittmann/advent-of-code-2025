import { readMultilineTextFile } from "../utils/readMultilineTextFile"
const inputFilePath = "./input-02.txt"

function populateRangeWithNumbers(rangeStartId: number, rangeEndId: number) {
    const range: number[] = []
    for (let i = rangeStartId; i <= rangeEndId; i = i + 1) {
        range.push(i)
    }

    return range
}

export function filterInvalidNumber(number: number): boolean {
    const numberAsString = `${number}`
    if (numberAsString.length % 2 == 0) {
        const firstHalf = numberAsString.slice(0, numberAsString.length / 2)
        const secondHalf = numberAsString.slice(numberAsString.length / 2)

        return firstHalf == secondHalf
    }

    return false
}

export function findInvalidIdsInRange(idRange: string): number[] {
    const ids = idRange.split("-").map((value) => parseInt(value))
    if (ids.length != 2 || isNaN(ids[0]) || isNaN(ids[1])) return []
    const range = populateRangeWithNumbers(ids[0], ids[1])

    return range.filter(filterInvalidNumber)
}

// Only run if this file is executed directly, not when imported
if (require.main === module) {
    const invalidIds: number[] = []
    const idRanges = readMultilineTextFile(inputFilePath)[0].split(",")
    idRanges.forEach((value) => {
        invalidIds.push(...findInvalidIdsInRange(value))
    })
    console.log(`Solution: ${invalidIds.reduce((acc, current) => acc + current, 0)}`)
}
