
function test(value, expected) {
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

    function dfs(grid, i) {
        if (i < 0 || i >= grid.length) {
            return
        }

        if (grid[i] === WATER) {
            return
        }

        grid[i] = WATER

        dfs(grid, i + 1)
        dfs(grid, i - 1)
    }

    let numberOfIslands = 0

    for (let i = 0; i < grid.length; i++) {
       if (grid[i] === LAND) {
            numberOfIslands++
            dfs(grid, i)
       } 
    }

    return numberOfIslands
}

test(["1", "0", "1", "0", "0"], 2)

test(["1", "0", "1", "0", "1", "1", "0", "0", "1"], 4)

test([], 0)