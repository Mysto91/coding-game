function eggDrop(floorsNumber = -1, triesNumber = 0, currentFloor = 0) {
    if (currentFloor >= floorsNumber) {
        return triesNumber
    }

    triesNumber++

    currentFloor += triesNumber

    return eggDrop(floorsNumber, triesNumber, currentFloor)
}

console.log(eggDrop(100))
