// reverse() not authorized

function test(value, expected) {
    if (validateBinarySearchTree(value) === expected) {
        console.log('.')
    } else {
        console.log('F')
    }
}

function validateBinarySearchTree(nums) {
    function dfs(nums, minAllowed, maxAllowed) {
        if (nums.length === 0) {
            return true
        }

        const root = nums.slice(-1)

        if (root <= minAllowed || root >= maxAllowed) {
            return false
        }

        const leftNums = []
        const rightNums = []

        for (let i = 0; i < nums.length - 1; i++) {
            nums[i] < root ? leftNums.push(nums[i]) : rightNums.push(nums[i])
        }

        return dfs(leftNums, minAllowed, root) && dfs(rightNums, root, maxAllowed)
    }

    return dfs(nums, -Infinity, Infinity);
}


test([2, 1, 3], true)
test([5, 1, 4, null, null, 3, 6], false)
test([], true)