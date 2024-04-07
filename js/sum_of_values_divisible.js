// Sommes des valeurs "values" quelque soit "value" > 0 divisibles par 3, 5, 7 jusqu'à la valeur N avec "value" < N

function test(value, expected) {
    if (sumOfValuesDivisible(value) === expected) {
        console.log('.')
    } else {
        console.log('F')
    }
}

function sumOfValuesDivisible(value) {
    let sum = 0

    for (let currentValue = 0; currentValue < Math.abs(value); currentValue++) {
        if (currentValue % 3 === 0 || currentValue % 5 === 0 || currentValue % 7 === 0) {
            sum += currentValue;
        }
    }

    return sum
}


test(6, 3 + 5)
test(0, 0)
test(-14, 3 + 5 + 6 + 7 + 9 + 10 + 12) // negative value
test(15, 3 + 5 + 6 + 7 + 9 + 10 + 12 + 14) // 15 excluded