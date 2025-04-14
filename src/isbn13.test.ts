import { isValid } from "./isbn13";

describe("ISBN-13 Validation", () => {
    test("valid ISBN-13", () => {
        expect(isValid("9780306406157")).toBe(true); 
        expect(isValid("9783161484100")).toBe(true); 
    });

    test("invalid ISBN-13", () => {
        // Falsche Prüfziffer
        expect(isValid("9780306406158")).toBe(false);
        expect(isValid("9783161484101")).toBe(false);
    });

    test("wrong length", () => {
        // Zu kurz/lang
        expect(isValid("978030640615")).toBe(false);
        expect(isValid("97803064061570")).toBe(false);
    });

    test("non-digit characters", () => {
        // Ungültige Zeichen
        expect(isValid("978030640615X")).toBe(false);
        expect(isValid("978030640615 ")).toBe(false);
    });

    test("empty string", () => {
        expect(isValid("")).toBe(false);
    });
});