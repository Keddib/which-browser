import { describe, expect, it } from "vitest";
import { BrowserType } from "../../types";
import isOpera from ".";

describe('isOpera', () => {

    // Tests that isOpera returns true when given BrowserType.Arc
    it('should return true when given BrowserType.Opera', () => {
      expect(isOpera(BrowserType.Opera)).toBe(true);
    });

    // Tests that isOpera returns false when given any other BrowserType
    it('should return false when given any other BrowserType', () => {
      expect(isOpera(BrowserType.Brave)).toBe(false);
      expect(isOpera(BrowserType.Browser)).toBe(false);
      expect(isOpera(BrowserType.Chrome)).toBe(false);
      expect(isOpera(BrowserType.Edge)).toBe(false);
      expect(isOpera(BrowserType.Firefox)).toBe(false);
      expect(isOpera(BrowserType.Arc)).toBe(false);
      expect(isOpera(BrowserType.Safari)).toBe(false);
    });

    // Tests that isOpera returns false when given undefined
    it('should return false when given undefined', () => {
      expect(isOpera(undefined as unknown as BrowserType)).toBe(false);
    });

    // Tests that isOpera returns false when given null
    it('should return false when given null', () => {
      expect(isOpera(null as unknown as BrowserType)).toBe(false);
    });

    // Tests that isOpera returns false when given a non-BrowserType value
    it('should return false when given a non-BrowserType value', () => {
      expect(isOpera('Arc' as BrowserType)).toBe(false);
      expect(isOpera(123 as unknown as BrowserType)).toBe(false);
      expect(isOpera(true as unknown as BrowserType)).toBe(false);
      expect(isOpera({} as unknown as BrowserType)).toBe(false);
      expect(isOpera([] as unknown as BrowserType)).toBe(false);
    });
});
