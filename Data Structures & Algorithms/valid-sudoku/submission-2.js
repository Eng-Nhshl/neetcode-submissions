class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    let row = {};
    let col = {};
    let box = {};

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
