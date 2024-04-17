/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

function test(arr, target, expected) {
    if (JSON.stringify(twoSum(arr, target)) === JSON.stringify(expected)) {
        console.log('.')
    } else {
        console.log('F')
    }
}

function twoSum(nums, target) {
    if (!Array.isArray(nums)) {
        return []
    }

    const previousNumbers = {}

    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]
        const complementaryNumber = target - nums[i]

        const complementaryNumberIndex = previousNumbers[complementaryNumber]
        
        if (complementaryNumberIndex != null) {
            return [complementaryNumberIndex, i]
        }

        previousNumbers[currentNumber] = i
    }

    return []
}


test([2, 7, 11, 15], 9, [0, 1])
test([], 10, [])
test([3, 2, 4], 6, [1, 2])
test([3, 3], 6, [0, 1])
test('not array', 6, [])


