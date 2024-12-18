import { describe, expect, it } from "vitest";
import { factotial } from "..";

describe("test", () => {
    it("factorial 5 should be 120", () => {
        const result = factotial(5);

        expect(result).toBe(120);
    });

    it("factorial 0 should be 1", () => {
        const result = factotial(0);

        expect(result).toBe(1);
    });

    it("factorial -2 should be null", () => {
        const result = factotial(-2);

        expect(result).toBe(null);
    });
});