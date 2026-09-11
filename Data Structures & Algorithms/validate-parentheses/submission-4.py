class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closedToOpen = {
            ")": "(",
            "]": "[",
            "}": "{",
        }

        for c in s:
            if c in ")]}":
                if stack and stack[-1] == closedToOpen[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)

        
        return len(stack) == 0