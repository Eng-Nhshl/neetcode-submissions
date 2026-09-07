class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let closedToOpen = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (const c of s) {
            if (closedToOpen[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === closedToOpen[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}
