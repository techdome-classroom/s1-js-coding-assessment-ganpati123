function isMatch(message, pattern) {
    // Function to recursively check if the message matches the pattern
    function matchHelper(mIndex, pIndex) {
        // Base case: if both the message and pattern are fully matched
        if (mIndex >= message.length && pIndex >= pattern.length) {
            return true;
        }

        // If the pattern is finished but the message isn't, no match
        if (pIndex >= pattern.length) {
            return false;
        }

        // If the message is finished but the pattern isn't, we can only match if the remaining pattern is *
        if (mIndex >= message.length) {
            // We can only match if the remaining pattern is *
            return pattern[pIndex] === '*' && matchHelper(mIndex, pIndex + 1);
        }

        // Case 1: Handle '?' - it matches exactly one character
        if (pattern[pIndex] === '?') {
            return matchHelper(mIndex + 1, pIndex + 1);
        }

        // Case 2: Handle '*' - it matches zero or more characters
        if (pattern[pIndex] === '*') {
            // We have two choices:
            // 1. Ignore the '*' and move to the next pattern character (it matches zero characters)
            // 2. Treat '*' as matching the current character in the message and move forward in the message
            return matchHelper(mIndex, pIndex + 1) || matchHelper(mIndex + 1, pIndex);
        }

        // Case 3: Regular character match
        if (message[mIndex] === pattern[pIndex]) {
            return matchHelper(mIndex + 1, pIndex + 1);
        }

        // If none of the above conditions are true, there's no match
        return false;
    }

    // Start the recursive matching from the beginning of both the message and pattern
    return matchHelper(0, 0);
}

// Example usage:
console.log(isMatch("aa", "a"));    // Output: false
console.log(isMatch("aa", "*"));    // Output: true
console.log(isMatch("abc", "a?c")); // Output: true
console.log(isMatch("abc", "a*b")); // Output: false
console.log(isMatch("abc", "a*c")); // Output: true
