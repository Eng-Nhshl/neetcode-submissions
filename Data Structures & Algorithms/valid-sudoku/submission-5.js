class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = new Uint16Array(9);
    const cols = new Uint16Array(9);
    const boxes = new Uint16Array(9);

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const char = board[r][c];
        if (char === ".") continue;

        // We map '1'-'9' to bit position (1 << 1 up to 1 << 9)
        const mask = 1 << (char.charCodeAt(0) - 48);
        const boxIdx = ((r / 3) | 0) * 3 + ((c / 3) | 0);

        // Now we check if the bit is already set in row, col, or box
        if (rows[r] & mask || cols[c] & mask || boxes[boxIdx] & mask) {
          return false;
        }

        // lastlly we set the bit flag
        rows[r] |= mask;
        cols[c] |= mask;
        boxes[boxIdx] |= mask;
      }
    }

    return true;
  }
}
