import { filterInvalidNumber, findInvalidIdsInRange } from "./02-01"

describe("findInvalidIdsInRange", () => {
    test("should return []", () => {
        expect(findInvalidIdsInRange("1-2")).toStrictEqual([])
    })
    test("should return [1010]", () => {
        expect(findInvalidIdsInRange("1010-1011")).toStrictEqual([1010])
    })
})

describe("filterInvalidNumber", () => {
    test("should return false for 1", () => {
        expect(filterInvalidNumber(1)).toBe(false)
    })
    test("should return true for 55", () => {
        expect(filterInvalidNumber(55)).toBe(true)
    })
    test("should return true for 1010", () => {
        expect(filterInvalidNumber(1010)).toBe(true)
    })
})
