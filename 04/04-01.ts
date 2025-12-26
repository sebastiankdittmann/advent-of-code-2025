import { readMultilineTextFile } from "../utils/readMultilineTextFile"

const inputFilePath = "./input-04.txt"

interface Position {
    isOccupied: boolean
    row: number
    column: number
    isCorner: boolean
    isEdge: boolean
}

interface Map {
    positions: Position[][]
    rowLength: number
    columnLength: number
}

export function getNeighbourRollCountForPosition(current: Position, map: Map): number {
    let neighbours = 0
    let currentNeighbourColumn = current.column - 1
    for (let x = 0; x < 3; x++) {
        let currentNeighbourRow = current.row - 1
        for (let j = 0; j < 3; j++) {
            if (
                currentNeighbourColumn < 0 ||
                currentNeighbourRow < 0 ||
                currentNeighbourColumn >= map.rowLength ||
                currentNeighbourRow >= map.columnLength ||
                (currentNeighbourRow == current.row && currentNeighbourColumn == current.column)
            ) {
                // skip
            } else if (map.positions[currentNeighbourRow][currentNeighbourColumn].isOccupied) {
                neighbours++
            }

            currentNeighbourRow++
        }
        currentNeighbourColumn++
    }

    return neighbours
}

export function buildMap(input: string[]): Map {
    let map: Map = {
        positions: [],
        rowLength: input[0].length,
        columnLength: input.length,
    }

    for (let i = 0; i < input.length; i++) {
        const row = input[i].split("")
        const positions: Position[] = []

        for (let j = 0; j < row.length; j++) {
            const position: Position = {
                isOccupied: row[j] === "@",
                row: i,
                column: j,
                isCorner: (j == 0 && (i == 0 || i == map.columnLength - 1)) || (j == map.rowLength - 1 && (i == 0 || i == map.columnLength - 1)),
                isEdge: j == 0 || j == map.rowLength - 1 || i == 0 || i == map.columnLength - 1,
            }

            positions.push(position)
        }

        map.positions.push(positions)
    }

    return map
}

// Only run if this file is executed directly, not when imported
if (require.main === module) {
    const input = readMultilineTextFile(inputFilePath)
    const map = buildMap(input)
    let accessiblePaperRolls = 0

    map.positions.forEach((row) => {
        let resultRow = ""
        row.forEach((current) => {
            const occupiedNeighbors = current.isOccupied ? getNeighbourRollCountForPosition(current, map) : 0
            resultRow += `${occupiedNeighbors}`
            if (current.isOccupied && occupiedNeighbors < 4) {
                accessiblePaperRolls++
            }
        })
        console.log(resultRow)
    })

    console.log(`Accessible paper rolls: ${accessiblePaperRolls}`)
}
