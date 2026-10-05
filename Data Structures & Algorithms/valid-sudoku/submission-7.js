class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const cols = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const boxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const char = board[r][c];
        if (char === ".") continue;

        const mask = 1 << (char.charCodeAt(0) - 48);
        const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

        if (rows[r] & mask || cols[c] & mask || boxes[boxIdx] & mask) {
          return false;
        }

        rows[r] |= mask;
        cols[c] |= mask;
        boxes[boxIdx] |= mask;
      }
    }

    return true;
  }
}
