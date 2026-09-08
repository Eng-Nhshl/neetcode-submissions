class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let isAlphanumirc = (c) =>
            (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9");

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !isAlphanumirc(s[left])) left++;
            while (right > left && !isAlphanumirc(s[right])) right--;
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }
        return true;
    }
}
