import { formatDuration } from "./duration";
import { describe, test, expect } from "@jest/globals";

describe("formatDuration", () => {
    test("should format seconds correctly", () => {
        expect(formatDuration(33)).toBe("33s");
        expect(formatDuration(123)).toBe("2m3s");
        expect(formatDuration(500)).toBe("8m20s");
        expect(formatDuration(3600)).toBe("1h");
        expect(formatDuration(3999)).toBe("1h6m30s");
    });

    test("should handle zero", () => {
        expect(formatDuration(0)).toBe("0s");
    });

    test("should throw error on negative input", () => {
        expect(() => formatDuration(-1)).toThrow("Eingabe muss eine nicht-negative Zahl sein.");
    });

    test("should round input correctly", () => {
        expect(formatDuration(59.6)).toBe("1m");
        expect(formatDuration(3599.4)).toBe("59m59s");
        expect(formatDuration(3599.9)).toBe("1h");
        expect(formatDuration(0.4)).toBe("0s");
    });
});