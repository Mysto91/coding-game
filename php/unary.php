<?php
    function getEncodedValue(string $bit): string
    {
        return ($bit == "1" ? "0 " : "00 ");
    }

    function duplicateZeros(int $times)
    {
        return sprintf("%0" . $times . "d", 0); // Add count number of "0"-s to string 
    }

    function stringToBinary(string $string): string
    {
        $chars = str_split($string);
        $binary = '';

        for ($i = 0; $i < count($chars); ++$i) {
            $binary .= sprintf("%07d", decbin(ord($chars[$i])));
        }

        return $binary;
    }

    function switchBit(string $bit): string
    {
        return ($bit == "1" ? "0" : "1");
    }

    $MESSAGE = stream_get_line(STDIN, 100, "\n");
    error_log("MESSAGE:$MESSAGE");

    $binary = stringToBinary($MESSAGE);
    error_log("string in binary format: $binary\n\noutput:");

    $answer = "";
    $i = 0;

    $binaryLength = strlen($binary);

    while ($i < $binaryLength) {
        $count = 1;
        $bit = $binary[$i];

        while ($i < $binaryLength) {
            $count = 1;
            $answer .= getEncodedValue($bit);

            while (++$i < $binaryLength) {
                if ($binary[$i] != $bit) {
                    break;
                }

                $count++;
            }

            $answer .= duplicateZeros($count);
            $bit = switchBit($bit);

            if ($i < $binaryLength) {
                $answer .= " ";
            }
        }
    }

    echo ("$answer\n");
?>