
// check if  url is following standard

function isUrl(urlString) {
  var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
    '((localhost)|' + // *** ADDED: Allow 'localhost' alone ***
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,})|' + // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
    '(\\:\\d+)?' + // validate optional port
    '(\\/[-a-z\\d%_.~+]*)*' + // validate path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
  return !!urlPattern.test(urlString);
}

/**
 * Validates if a string is a well-formed URL.
 *
 * The regex is modified to explicitly allow 'localhost' without a TLD,
 * resolving the original issue.
 *
 * @param {string} urlString The string to test.
 * @returns {boolean} True if the string matches the URL pattern, false otherwise.
 */
function isUrl(urlString) {
  // We use the same structure as the original, but insert a check for 'localhost'
  // into the domain name / IP matching group.
  var urlPattern = new RegExp('^(https?:\\/\\/)?' + // 1. Protocol (http or https, optional)
    '(' +
    '  (localhost)' + // 2a. Allow 'localhost' exactly
    '  |' +
    '  (([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}' + // 2b. Standard domain (e.g., example.com)
    '  |' +
    '  ((\\d{1,3}\\.){3}\\d{1,3})' + // 2c. IPv4 address
    ')' +
    '(\\:\\d+)?' + // 3. Optional Port
    '(\\/[-a-z\\d%_.~+]*)*' + // 4. Optional Path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // 5. Optional Query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // 6. Optional Fragment locator (case-insensitive flag applied)

  // Clean up the multiline regex formatting for actual execution
  const cleanedPattern = new RegExp(urlPattern.source.replace(/\s/g, ''), 'i');

  return !!cleanedPattern.test(urlString);
}

function isUrl(urlString) {
  // Regex component for a strict IPv4 octet (0-255): 
  // (25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)
  const octet = '(25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]?\\d)';
  
  var urlPattern = new RegExp('^(https?:\\/\\/)?' + // 1. Protocol (http or https, optional)
    '(' +
    '  (localhost)' + // 2a. Allow 'localhost' exactly
    '  |' +
    '  (([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}' + // 2b. Standard domain (e.g., example.com)
    '  |' +
    // 2c. IPv4 address (Strict octet matching: 0-255)
    '  (' + octet + '\\.' + octet + '\\.' + octet + '\\.' + octet + ')' + 
    ')' +
    '(\\:\\d+)?' + // 3. Optional Port
    '(\\/[-a-z\\d%_.~+]*)*' + // 4. Optional Path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // 5. Optional Query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // 6. Optional Fragment locator (case-insensitive flag applied)

  // Clean up the multiline regex formatting for actual execution
  const cleanedPattern = new RegExp(urlPattern.source.replace(/\s/g, ''), 'i');

  return !!cleanedPattern.test(urlString);
}

module.exports = isUrl;

