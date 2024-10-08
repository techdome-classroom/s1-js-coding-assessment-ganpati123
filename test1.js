function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
    const rows = grid.length;
    const cols = grid[0].length;
    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W') return;
        
     
        grid[r][c] = 'W';

     
        dfs(r - 1, c); // up
        dfs(r + 1, c); // down
        dfs(r, c - 1); // left
        dfs(r, c + 1); // right
    }

    let islandCount = 0; // To store the number of distinct islands

 
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          
            if (grid[r][c] === '1') {
                islandCount++;
                dfs(r, c); // Mark the entire island as visited
            }
        }
    }

    return islandCount;
}


let map1 = [
  ['W', 'W', 'W', 'W', '1', 'W', 'W', 'W'],
  ['W', '1', '1', 'W', '1', '1', 'W', 'W'],
  ['W', 'W', 'W', 'W', '1', 'W', '1', '1'],
  ['1', '1', '1', 'W', 'W', 'W', 'W', 'W'],
];

console.log(numIslands(map1)); 

let map2 = [
  ['1', 'W', '1', 'W', 'W', 'W', 'W', '1'],
  ['1', '1', 'W', 'W', 'W', '1', 'W', '1'],
  ['W', 'W', '1', '1', '1', '1', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', '1'],
];

console.log(numIslands(map2));
