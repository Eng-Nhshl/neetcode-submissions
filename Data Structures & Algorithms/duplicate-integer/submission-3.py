class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        hashTable = {}
        for num in nums:
            if num in hashTable:
                return True
            hashTable[num] = num

        return False