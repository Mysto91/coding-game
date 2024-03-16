<?php

fscanf(
    STDIN,
    "%d",
    $n // the number of temperatures to analyse
);
$inputs = fgets(STDIN);
$inputs = explode(" ", $inputs);

function getNearestNumberToZero(array $numbers): int
{
    $maxNegativeValue = -273;
    $maxPositiveValue = 5526;

    foreach ($numbers as $number) {
        $currentNumber = intval($number);

        if ($currentNumber === 0) {
            return 0;
        }

        if ($currentNumber > 0 && $currentNumber < $maxPositiveValue) {
            $maxPositiveValue = $currentNumber;
        }

        if ($currentNumber < 0 && $currentNumber > $maxNegativeValue) {
            $maxNegativeValue = $currentNumber;
        }

        $result = $maxPositiveValue > -$maxNegativeValue ? $maxNegativeValue : $maxPositiveValue;
    }

    return $result ?? 0;
};

echo (getNearestNumberToZero($inputs) . "\n");
?>