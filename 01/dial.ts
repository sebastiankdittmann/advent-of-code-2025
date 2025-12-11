export function turnDial(currentNumber: number, direction: "L" | "R", steps: number): number {
    if (direction === "L") {
        currentNumber = (currentNumber - steps + 100) % 100
    } else if (direction === "R") {
        currentNumber = (currentNumber + steps) % 100
    }

    return currentNumber
}

export function parseInstruction(instruction: string): ["L" | "R", number] {
    const direction = instruction.charAt(0)
    const stepsStr = instruction.slice(1)
    const steps = parseInt(stepsStr, 10)

    return [direction as "L" | "R", steps]
}
