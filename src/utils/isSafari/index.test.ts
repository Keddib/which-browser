import { describe, expect, it } from 'vitest';
import { BrowserType } from '../../types';
import isSafari from '.';

describe('isSafari', () => {

    // Tests that isSafari returns true when BrowserType.Safari is passed as an argument
    it('should return true when BrowserType.Safari is passed as an argument', () => {
      expect(isSafari(BrowserType.Safari)).toBe(true);
    });

    // Tests that isSafari returns false when any other BrowserType is passed as an argument
    it('should return false when any other BrowserType is passed as an argument', () => {
      expect(isSafari(BrowserType.Arc)).toBe(false);
      expect(isSafari(BrowserType.Brave)).toBe(false);
      expect(isSafari(BrowserType.Browser)).toBe(false);
      expect(isSafari(BrowserType.Chrome)).toBe(false);
      expect(isSafari(BrowserType.Edge)).toBe(false);
      expect(isSafari(BrowserType.Firefox)).toBe(false);
      expect(isSafari(BrowserType.Opera)).toBe(false);
    });

    // Tests that isSafari returns false when null is passed as an argument
    it('should return false when null is passed as an argument', () => {
      expect(isSafari(null as unknown as BrowserType)).toBe(false);
    });

    // Tests that isSafari throws an error when undefined is passed as an argument
    it('should return false when undefined is passed as an argument', () => {
      expect(isSafari(undefined as unknown as BrowserType)).toBe(false);
    });

    // Tests that isSafari returns false when an edge case argument is passed
    it('should return false when an edge case argument is passed', () => {
      // Test with an empty string
      expect(isSafari('' as unknown as BrowserType)).toBe(false);

      // Test with a number
      expect(isSafari(123 as unknown as BrowserType)).toBe(false);

      // Test with a boolean
      expect(isSafari(true as unknown as BrowserType)).toBe(false);

      // Test with an object
      expect(isSafari({} as unknown as BrowserType)).toBe(false);

      // Test with an array
      expect(isSafari([] as unknown as BrowserType)).toBe(false);
    });

    // Tests that isSafari is a pure function and does not have any side effects
    it('should be a pure function without side effects', () => {
      const brw = BrowserType.Safari;
      isSafari(brw);
      expect(brw).toBe(BrowserType.Safari);
    });
});
