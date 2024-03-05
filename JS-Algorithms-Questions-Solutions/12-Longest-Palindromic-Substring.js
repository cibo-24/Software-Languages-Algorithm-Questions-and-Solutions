/*

Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.


*/


var longestPalindrome = function(s) {
    let start, end, result = 0;
    
    for(let i=0; i < s.length; i++) {
        let tempStart = i;
        let tempEnd = i;
        
        while(s[tempEnd] === s[tempEnd+1]) tempEnd++;
        
        while(tempStart >= 0 && tempEnd < s.length && s[tempStart-1] == s[tempEnd+1]) {
            tempStart--;
            tempEnd++
        }
        
        if(result < tempEnd - tempStart+1) {
            result = tempEnd - tempStart+1;
            start = tempStart;
            end = tempEnd;
        }
    }
    return s.substring(start, end+1);
};