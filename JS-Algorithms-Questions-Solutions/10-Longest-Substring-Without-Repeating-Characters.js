// Bir s dizesi verildiğinde, en uzun dizenin uzunluğunu bulunuz.Alt dize karakterleri tekrarlamadan.

// s = "abcabcbb"
// Output: 3. b üç kere tekrarlandığı için

// s = "bbbbb" output: 1
// s = "pwwkew" output: 3

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let charIndexMap = {};

    for (let i = 0, j = 0; j < s.length; j++) {
        if (s[j] in charIndexMap) {
            i = Math.max(charIndexMap[s[j]], i);
        }
        maxLength = Math.max(maxLength, j - i + 1);
        charIndexMap[s[j]] = j + 1;
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); 




