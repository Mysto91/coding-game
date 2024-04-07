// Sommes des valeurs "values" quelque soit "value" > 0 divisibles par 3, 5, 7 jusqu'à la valeur N avec "value" < N

function test(value, expected) {
    if (countVowels(value) === expected) {
        console.log('.')
    } else {
        console.log('F')
    }
}

function countVowels(str) {
    return str.split('').reduce((numberOfVowel, letter) =>
        ['a', 'e', 'i', 'o', 'u', 'y'].includes(letter) ? numberOfVowel + 1 : numberOfVowel, 0)
}


test('Bonjour', 3)
test('Hello World', 3)
test('as', 1)
test('pff', 0)