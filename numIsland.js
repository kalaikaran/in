function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  function bfs(grid, i, j) {
    const queue = [];
    queue.push([i, j]);
    grid[i][j] = '0'; // Mark the cell as visited by setting it to '0'

    while (queue.length > 0) {
      // console.log(queue);
      const [x, y] = queue.shift();

      // Visit all adjacent cells (up, down, left, right)
      const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
      ];

      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;
        if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] === '1') {
          queue.push([newX, newY]);
          
          grid[newX][newY] = '0'; // Mark the cell as visited
        }
      }
      console.log(queue);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        islandCount++;
        bfs(grid, i, j);
      }
    }
  }

  return islandCount;
}

// Example usage
const grid1 = [
  ['1', '1', '0', '1', '0'],
  ['1', '0', '0', '1', '0'],
  ['0', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
];

// const grid2 = [
//   ['1', '1', '0', '0', '0'],
//   ['1', '1', '0', '0', '0'],
//   ['0', '0', '1', '0', '0'],
//   ['0', '0', '0', '1', '1']
// ];
console.log(grid1);
console.log("------------------------------------------------");
console.log(numIslands(grid1)); // Output: 1
// console.log(numIslands(grid2)); // Output: 3
