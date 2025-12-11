import { countDialPassingZero } from "./01-02"

test("should return 1", () => {
    expect(countDialPassingZero(50, "L", 100)).toStrictEqual([50, 1])
})
test("should return 1", () => {
    expect(countDialPassingZero(50, "R", 100)).toStrictEqual([50, 1])
})
test("should return 0", () => {
    expect(countDialPassingZero(50, "L", 20)).toStrictEqual([30, 0])
})
test("should return 0", () => {
    expect(countDialPassingZero(50, "R", 20)).toStrictEqual([70, 0])
})
test("should return 1", () => {
    expect(countDialPassingZero(50, "L", 60)).toStrictEqual([90, 1])
})
test("should return 1", () => {
    expect(countDialPassingZero(50, "R", 60)).toStrictEqual([10, 1])
})
test("should return 2", () => {
    expect(countDialPassingZero(50, "L", 200)).toStrictEqual([50, 2])
})
test("should return 2", () => {
    expect(countDialPassingZero(50, "R", 200)).toStrictEqual([50, 2])
})
test("should return 0", () => {
    expect(countDialPassingZero(0, "L", 60)).toStrictEqual([40, 0])
})
test("should return 0", () => {
    expect(countDialPassingZero(0, "R", 60)).toStrictEqual([60, 0])
})
test("should return 1", () => {
    expect(countDialPassingZero(50, "L", 50)).toStrictEqual([0, 1])
})
test("should return 1", () => {
    expect(countDialPassingZero(50, "R", 50)).toStrictEqual([0, 1])
})
test("should return 1", () => {
    expect(countDialPassingZero(0, "L", 100)).toStrictEqual([0, 1])
})
test("should return 1", () => {
    expect(countDialPassingZero(0, "R", 100)).toStrictEqual([0, 1])
})
