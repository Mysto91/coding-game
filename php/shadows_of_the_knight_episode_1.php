<?php

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

fscanf(
    STDIN,
    "%d %d",
    $buildingWidth, // width of the building.
    $buildingHeigth // height of the building.
);
fscanf(
    STDIN,
    "%d",
    $N // maximum number of turns before game over.
);
fscanf(
    STDIN,
    "%d %d",
    $xBatman,
    $yBatman
);
$xMin = $yMin  = 0;
$xMax = $buildingWidth - 1;
$yMax = $buildingHeigth - 1;

function str_contains(string $str, string $needle): bool
{
    return strpos($str, $needle) !== false;
}

// game loop
while (TRUE) {
    fscanf(
        STDIN,
        "%s",
        $bombDir // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    );

    if (str_contains($bombDir, "U")) {
        $yMax = $yBatman - 1;
    } elseif (str_contains($bombDir, "D")) {
        $yMin = $yBatman + 1;
    }


    if (str_contains($bombDir, "L")) {
        $xMax = $xBatman - 1;
    } elseif (str_contains($bombDir, "R")) {
        $xMin = $xBatman + 1;
    }

    $xBatman = $xMin + ceil(($xMax - $xMin) / 2);
    $yBatman = $yMin + ceil(($yMax - $yMin) / 2);

    echo ("$xBatman $yBatman\n");
}
?>