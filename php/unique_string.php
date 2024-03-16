<?php
    function test(string $str, bool $expected): void
    {
        if (hasUniqueValue($str) === $expected) {
            echo '.';
        } else {
            echo 'F';
        }
    }

    function hasUniqueValue(string $str): bool
    {
        $uniqueValues = '';
        $lowerStr = strtolower($str);

        for ($i = 0; $i < strlen($lowerStr); $i++) {
            if (str_contains($uniqueValues, $lowerStr[$i])) {
                return false;
            }

            $uniqueValues .= $lowerStr[$i];
        }

        return true;
    }


    test('ABCD', true); // TRUE

    test('ABCDD', false);
    test('aABCd', false);
    test('//TES', false);
?>