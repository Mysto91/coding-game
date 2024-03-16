<?php
fscanf(STDIN, "%d %d %d %d", $lightX, $lightY, $thorX, $thorY);

// game loop
while (TRUE) {
    fscanf(STDIN, "%d", $remainingTurns);

    $direction = '';


    if ($thorY > $lightY) {
        $direction .= 'N';
        $thorY--;
    }

    if ($thorY < $lightY) {
        $direction .= 'S';
        $thorY++;
    }


    if ($thorX > $lightX) {
        $direction .= 'W';
        $thorX--;
    }

    if ($thorX < $lightX) {
        $direction .= 'E';
        $thorX++;
    }

    echo ($direction . "\n");
}
