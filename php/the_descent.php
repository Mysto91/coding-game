<?php

while (TRUE) {
    $hmax = 0;
    $imax = 0;

    for ($i = 0; $i < 8; $i++) {
        fscanf(
            STDIN,
            "%d",
            $mountainH
        );

        if ($mountainH > $hmax) {
            $hmax = $mountainH;
            $imax = $i;
        }
    }

    echo ($imax . "\n");
}
?>