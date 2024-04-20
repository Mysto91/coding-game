/**
 * 
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

    Return the number of good nodes in the binary tree.

    Example 1:

    Input: root = [3,1,4,3,null,1,5]
    Output: 4
    Explanation: Nodes in blue are good.
    Root Node (3) is always a good node.
    Node 4 -> (3,4) is the maximum value in the path starting from the root.
    Node 5 -> (3,4,5) is the maximum value in the path
    Node 3 -> (3,1,3) is the maximum value in the path.
    Example 2:

    Input: root = [3,3,null,4,2]
    Output: 3
    Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.
    Example 3:

    Input: root = [1]
    Output: 1
    Explanation: Root is considered as good.
 */

function test(value, expected) {
    if (countGoodNodesInBinaryTree(value) === expected) {
        console.log('.')
    } else {
        console.log('F')
    }
}

const getLeftChildIndex = (i) => 2 * i + 1
const getRightChildIndex = (i) => 2 * i + 2


function countGoodNodesInBinaryTree(nums) {
    let count = 0;

    function dfs(i, maxSoFar) {
        if (i >= nums.length || nums[i] === null) {
            return
        }

        const nodeValue = nums[i];

        if (nodeValue >= maxSoFar) {
            count++;
            maxSoFar = nodeValue;
        }

        dfs(getLeftChildIndex(i), maxSoFar);
        dfs(getRightChildIndex(i), maxSoFar);
    }

    dfs(0, -Infinity);

    return count;
}


test([3, 1, 4, 3, null, 1, 5], 4)
test([3, 3, null, 4, 2], 3)
test([], 0)