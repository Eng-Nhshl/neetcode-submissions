class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Array(9).fill(0);
        const rows = new Array(9).fill(0);
        const square = new Array(9).fill(0);

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") continue;

                let value = board[r][c] - "1";

                if (
                    rows[r] & (1 << value) ||
                    cols[c] & (1 << value) ||
                    square[Math.floor(r / 3) * 3 + Math.floor(c / 3)] & (1 << value)
                ) {
                    return false;
                }

                rows[r] |= 1 << value;
                cols[c] |= 1 << value;
                square[Math.floor(r / 3) * 3 + Math.floor(c / 3)] |= 1 << value;
            }
        }
        return true;
    }
}
