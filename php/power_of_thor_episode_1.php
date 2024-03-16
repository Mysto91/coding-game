<?php

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

fscanf(
    STDIN,
    "%d %d %d %d",
    $lightX, // the X position of the light of power
    $lightY, // the Y position of the light of power
    $initialTX, // Thor's starting X position
    $initialTY // Thor's starting Y position
);
$thorX = $initialTX;
$thorY = $initialTY;
// game loop
while (TRUE) {
    fscanf(
        STDIN,
        "%d",
        $remainingTurns // The remaining amount of turns Thor can move. Do not remove this line.
    );

    // Write an action using echo(). DON'T FORGET THE TRAILING \n
    // To debug (equivalent to var_dump): error_log(var_export($var, true));

    $directionX = "";
    $directionY = "";
    // A single line providing the move to be made: N NE E SE S SW W or NW

    if ($thorX < $lightX) {
        $directionX = "E";
        $thorX = $thorX + 1;
    } else {
        if ($thorX > $lightX) {
            $directionX = "W";
            $thorX = $thorX - 1;
        }
    }

    if ($thorY < $lightY) {
        $directionY = "S";
        $thorY = $thorY + 1;
    } else {
        if ($thorY > $lightY) {
            $directionY = "N";
            $thorY = $thorY - 1;
        }
    }

    $move = $directionY . $directionX;
    echo ($move . "\n");
}
?>