function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];

  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (let j = 0; j < cols; j++) {
      let count = 0;
      // console.log(i + x);

      // Check all adjacent cells
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          // console.log(i + x);
          if (i + x >= 0 && i + x < rows && j + y >= 0 && j + y < cols) {
            // console.log(matrix[i + x][j + y]);
            if (!(x === 0 && y === 0) && matrix[i + x][j + y]) {
              count++;
            }
          }
        }
      }
      // console.log(result[i]);
      result[i].push(count);
    }
  }

  return result;
}

const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];

console.log(minesweeper(matrix));
// * The result should be following:
// * [
// *  [1, 2, 1],
// *  [2, 1, 1],
// *  [1, 1, 1]
// * ]
