/**
 * @fileoverview Mocha, Chai, and Sinon tests for the isUrl function.
 *
 * To run:
 * 1. npm install mocha chai
 * 2. Save index.js and test.js in the same directory.
 * 3. Run: npx mocha test.js
 */
const assert = require('chai').assert;
const isUrl = require('../index.js'); // Assuming index.js is in the same directory

describe('isUrl Validation', () => {

  describe('Localhost & Development URLs (Original Failure Cases)', () => {
    it('should return TRUE for http://localhost', () => {
      assert.isTrue(isUrl("http://localhost"));
    });

    it('should return TRUE for http://localhost:9000', () => {
      assert.isTrue(isUrl("http://localhost:9000"));
    });

    it('should return TRUE for https://localhost', () => {
      assert.isTrue(isUrl("https://localhost"));
    });

    it('should return TRUE for localhost:3000 (protocol optional)', () => {
      assert.isTrue(isUrl("localhost:3000"));
    });

    it('should return TRUE for http://127.0.0.1:8080 (IPv4)', () => {
      assert.isTrue(isUrl("http://127.0.0.1:8080"));
    });
  });

  describe('Valid Standard URLs', () => {
    it('should return TRUE for a simple domain', () => {
      assert.isTrue(isUrl("example.com"));
    });

    it('should return TRUE for a domain with protocol and subdomain', () => {
      assert.isTrue(isUrl("https://www.sub.google.com"));
    });

    it('should return TRUE for a domain with mixed case (due to /i flag)', () => {
      assert.isTrue(isUrl("http://MySite.ORG"));
    });

    it('should return TRUE for a domain with port, path, and query parameters', () => {
      const complexUrl = "https://api.myapp.co.uk:4430/users/123/profile?action=view&sort=-date#details";
      assert.isTrue(isUrl(complexUrl));
    });

    it('should return TRUE for a domain with a path containing common URL characters', () => {
      assert.isTrue(isUrl("https://example.com/a-b_c~d.e%f+g"));
    });
  });

  describe('Invalid Strings and Edge Cases', () => {
    it('should return FALSE for a plain string', () => {
      assert.isFalse(isUrl("Just a string"));
    });

    it('should return FALSE for a domain with no TLD or period (unless it is localhost)', () => {
      assert.isFalse(isUrl("myapp"));
    });

    it('should return FALSE for a TLD shorter than 2 characters (e.g., .c)', () => {
      assert.isFalse(isUrl("test.c"));
    });

    it('should return FALSE for an incomplete protocol', () => {
      assert.isFalse(isUrl("https//example.com"));
    });

    it('should return FALSE for a domain starting with a hyphen', () => {
      assert.isFalse(isUrl("http://-bad.com"));
    });

    it('should return FALSE for an invalid IPv4 segment', () => {
      assert.isFalse(isUrl("123.456.789.0"));
    });

    it('should return FALSE for an empty string', () => {
      assert.isFalse(isUrl(""));
    });

    it('should return FALSE for null input', () => {
        // The regex will attempt to cast null to string, which is 'null', and will fail
        assert.isFalse(isUrl(null));
    });
  });
});
