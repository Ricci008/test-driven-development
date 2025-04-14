import { calcPoints, possibleCheckout } from "./darts";

describe("Darts - calcPoints", () => {
    test("valid hits", () => {
        expect(calcPoints("3 20 1 17 2 4")).toBe(85); // Triple 20, Single 17, Double 4
        expect(calcPoints("2 15 1 18 3 19")).toBe(105); // Double 15, Single 18, Triple 19
        expect(calcPoints("3 20 1 5")).toBe(65); // Triple 20, Single 5
    });

    test("empty string", () => {
        expect(calcPoints("")).toBe(0);
    });

    test("invalid format", () => {
        expect(calcPoints("3 20 1")).toBe(0); // Ungerade Anzahl an Zahlen
        expect(calcPoints("3 20 X 17")).toBe(0); // Ungültige Zeichen
    });
});

describe("Darts - possibleCheckout", () => {
    test("valid checkouts", () => {
        expect(possibleCheckout(477)).toBe("Double 12"); // 24 / 2 = 12
        expect(possibleCheckout(471)).toBe("Double 15"); // 30 / 2 = 15
        expect(possibleCheckout(461)).toBe("Double 20"); // 40 / 2 = 20
    });

    test("invalid checkouts", () => {
        expect(possibleCheckout(480)).toBe(""); // 31 / 2 = 15.5 → ungerade
        expect(possibleCheckout(441)).toBe(""); // 60 / 2 = 30 → >20
        expect(possibleCheckout(500)).toBe(""); // 1 → kein Double möglich
    });
});