<?php

/**
 * @param string[] $arr
 */
function test(array $arr, string $expected): void
{
    if (rebuildBrokenMessage($arr) === $expected) {
        echo '.';
    } else {
        echo 'F';
    }
}

/**
 * convert [0] -> 'A----D' to ['A'] -> 'A----D' 
 * @param string[] $arr
 */
function arrayWithFirstCharAsKey(array $arr): array {
    foreach ($arr as $value) {
        $arr[$value[0]] = $value;
    }

    return $arr ?? [];
}

function getLastChar(string $str): string {
    return substr($str, -1);
}

function removeFirstChar(string $str): string {
    return substr($str, 1);
}

/**
 * @param string[] $parts
 */
function rebuildBrokenMessage (
    array $parts,
    string $messageFirstChar = 'A',
    string $messageLastChar = '#'
): string {
    if (empty($parts)) {
        return '';
    }

    $fragments = arrayWithFirstCharAsKey($parts);

    $fragmentFirstChar = $messageFirstChar;
    $message = $fragments[$fragmentFirstChar];

    $fragmentLastChar = getLastChar($message);

    while($fragmentLastChar !== $messageLastChar) {
        $currentFragment = $fragments[$fragmentLastChar];
        $message .= removeFirstChar($currentFragment);
        $fragmentLastChar = getLastChar($currentFragment);
    }

    return $message;
}

test(['B----#', 'A----B'], 'A----B----#');
test(['A----#'], 'A----#');
test([], '');
test(['C----#', 'A----B', 'B----C'], 'A----B----C----#');