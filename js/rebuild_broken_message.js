function test(arr, expected) {
    if (rebuildBrokenMessage(arr) === expected) {
        console.log('.')
    } else {
        console.log('F')
    }
}

function rebuildBrokenMessage(parts) {
    if (!Array.isArray(parts) || parts.length === 0) {
        return ''
    }

    const partsMap = new Map()

    parts.forEach((part) => partsMap.set(part[0], part))

    let currentFirstChar = 'A'
    let message = ''

    while (currentFirstChar !== '#') {
        const currentPart = partsMap.get(currentFirstChar)

        message += currentPart.includes('#') ? currentPart : currentPart.slice(0, -1)
    
        currentFirstChar = currentPart.slice(-1)
    }

    return message
}

test(['B----#', 'A----B'], 'A----B----#');
test(['A----#'], 'A----#');
test([], '');
test('not array', '');
test(['C----#', 'A----B', 'B----C'], 'A----B----C----#');