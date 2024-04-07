function test(value, expected) {
    if (countUniqueChar(value) === expected) {
        console.log('.')
    } else {
        console.log('F')
    }
}

function countUniqueChar(str) {
    if (!str) {
        return 0
    }

    const uniqueChars = new Set()

    str.toLowerCase().split('').forEach((char) => uniqueChars.add(char))

    return uniqueChars.size;
}

test('hello', 4)
test('banana', 3)
test('tt__', 2)
test('Aa', 1)
test(undefined, 0)
test(null, 0)

