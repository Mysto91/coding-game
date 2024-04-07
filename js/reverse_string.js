// reverse() not authorized

function test(value, expected) {
    if (reverse(value) === expected) {
        console.log('.')
    } else {
        console.log('F')
    }
}

function reverse(str) {
    let reverseStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    return reverseStr;
}

test('hello', 'olleh')
test('world', 'dlrow')
test('', '')