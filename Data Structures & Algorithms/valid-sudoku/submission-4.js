class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const col = new Int32Array(9);
    const row = new Int32Array(9);
    const box = new Int32Array(9);

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const value = board[i][j];
        if (value !== ".") {
          const boxId = Math.floor(i / 3) * 3 + Math.floor(j / 3);
          if (row[`${i}-${value}`] || col[`${j}-${value}`] || box[`${boxId}-${value}`]) {
            return false;
          }
          row[`${i}-${value}`] = true;
          col[`${j}-${value}`] = true;
          box[`${boxId}-${value}`] = true;
        }
      }
    }
    return true;
  }
}
