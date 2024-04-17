/*
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
*/

function test(arr, expected) {
    if (longestCommonPrefix(arr) === expected) {
        console.log('.')
    } else {
        console.log('F')
    }
}

function longestCommonPrefix(words) {
    if (!Array.isArray(words)) {
        return ''
    }

    if (words.length === 0) {
        return ''
    }


    const firstWord = words[0]
    let commonPrefix = '';

    for (let i = 0; i < firstWord.length; i++) {
        const currentLetter = firstWord[i]

        for(let j = 0; j < words.length; j++) {
            const nextWord = words[j]

            if (nextWord[i] !== currentLetter) {
                return commonPrefix
            }
        }

        commonPrefix += currentLetter
    }

    return ''
}


test(['flower', 'flow', 'flight'], 'fl')
test(['dog', 'racecar', 'car'], '')
test([], '')


