/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

    An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
    You may assume all four edges of the grid are all surrounded by water.

    Example 1:

    Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
    ]
    Output: 1
    Example 2:

    Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
    ]
    Output: 3
 */


function test(value, expected) {
    console.log(value, expected)
    if (numberOfIslands(value) === expected) {
        console.log('.')
    } else {
        console.log('F')
    }
}

function numberOfIslands(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    const WATER = '0'
    const LAND = '1'

    function dfs(grid, i, j) {
        if (i < 0 || i >= numberOfRows) {
            return
        }

        if (j < 0 || j >= numberOfCols) {
            return
        }

        if (grid[i][j] === WATER) {
            return;
        }

        grid[i][j] = WATER; // Marque la cellule courante comme visitée
    
        dfs(grid, i + 1, j); // Bas
        dfs(grid, i - 1, j); // Haut
        dfs(grid, i, j + 1); // Droite
        dfs(grid, i, j - 1); // Gauche
    }

    let numIslands = 0;

    const numberOfRows = grid.length;
    const numberOfCols = grid[0].length;

    for (let i = 0; i < numberOfRows; i++) {
        for (let j = 0; j < numberOfCols; j++) {
            if (grid[i][j] === LAND) {
                numIslands++;
                dfs(grid, i, j);
            }
        }
    }

    return numIslands;
}

 test(
   [
     ["1", "1", "1", "1", "0"],
     ["1", "1", "0", "1", "0"],
     ["1", "1", "0", "0", "0"],
     ["0", "0", "0", "0", "0"],
   ],
   1
 )

 test(
   [
     ["1", "1", "0", "0", "0"],
     ["1", "1", "0", "0", "0"],
     ["0", "0", "1", "0", "0"],
     ["0", "0", "0", "1", "1"],
   ],
   3
 );

test(
    [
        ["1", "0", "1", "0", "0"],
    ],
    2
);

test(
    [
        ["1", "0", "1", "0", "1"],
    ],
    3
);

test([], 0)