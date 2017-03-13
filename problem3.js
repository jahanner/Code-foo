//create 2-D array
var grid = [[3, 3, 3], [9, 3, 9], [9, 9, 3]];
// for (var row = 0 ; row < 3; row++) {
//     grid[row] = [];
//     for (var col = 0; col < 3; col++) {
//         grid[row][col] = Math.floor(Math.random() * 10);
//     }
// }

grid_size = 9
//set empty array for chain and solutions
var chain = [];
var solutions = [];

//A function that can find the value given a chain and grid
function findValueGivenChain(grid, chain) {
    value = 0;
    for (i = 0; i < chain.length; i++){
        row = chain[i][0];
        col = chain[i][1];
        value += grid[row][col];
    }
    return value;
}
function searchForArray(haystack, needle){
  var i, j, current;
  for(i = 0; i < haystack.length; ++i){
    if(needle.length === haystack[i].length){
      current = haystack[i];
      for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
      if(j === needle.length)
        return i;
    }
  }
  return -1;
}
moves = []
function possibleMoves(grid, x, y) {
    if (typeof(grid[x+1][y]) != 'undefined' && searchForArray(chain,[x, y])){
        moves.push([x][y]);
    }
    if (typeof(grid[x+1][y+1]) != 'undefined' && searchForArray(chain,[x, y])){
        moves.push([x][y]);
    }
    if (typeof(grid[x][y+1]) != 'undefined' && searchForArray(chain,[x, y])){
        moves.push([x][y]);
    }
    if (typeof(grid[x+1][y-1]) != 'undefined' && searchForArray(chain,[x, y])){
        moves.push([x][y]);
    }
    if (typeof(grid[x-1][y]) != 'undefined' && searchForArray(chain,[x, y])){
        moves.push([x][y]);
    }
    if (typeof(grid[x-1][y+1]) != 'undefined' && searchForArray(chain,[x, y])){
        moves.push([x][y]);
    }
    if (typeof(grid[x-1][y-1]) != 'undefined' && searchForArray(chain,[x, y])){
        moves.push([x][y]);
    }
    if (typeof(grid[x][y-1]) != 'undefined' && searchForArray(chain,[x, y])){
        moves.push([x][y]);
    }
}

function boggle(grid, x, y, chain, solutions) {
    chain.push([x,y]);
    //Determine if solution
    if (chain.length > 1 && findValueGivenChain(grid, chain) == 9){
        solutions.push(chain);
    }
    //if sum of chain < 9, find available positions
    // Then check if you've been to that position already
    else if (findValueGivenChain(grid, chain) < 9){
        if (typeof(grid[x][y]) != 'undefined' && searchForArray(chain,[x, y])){
            solutions.concat(boggle(grid, x, y, chain, solutions))}
    return solutions;
    }
}
console.log(boggle(grid, 0, 0, [],[]));
