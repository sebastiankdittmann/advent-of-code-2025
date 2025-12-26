import { readMultilineTextFile } from "../utils/readMultilineTextFile"
import { buildMap, getNeighbourRollCountForPosition } from "./04-01"

const exampleFile = "./04/input-04-example.txt"

const map = buildMap(readMultilineTextFile(exampleFile))

describe("getNeighbourRollCountForPosition", () => {
    test("should return 3 for position x=3, y=1", () => {
        const result = getNeighbourRollCountForPosition(map.positions[0][2], map)
        expect(result).toBe(3)
    })

    test("should return 1 for position x=1, y=10", () => {
        const result = getNeighbourRollCountForPosition(map.positions[9][0], map)
        expect(result).toBe(1)
    })
})
