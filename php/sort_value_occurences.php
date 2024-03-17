<?php
$numbers = [1, 1, 2, 3, 3, 1, 2, 4, 6, 5, 7, 7];

$numberCounts = [];

foreach($numbers as $number) {
	if(!isset($numberCounts[$number])) {
		$numberCounts[$number] = 1;
	} else {
		$numberCounts[$number]++;
	}
}

$numberCountsArrayReduce = array_reduce($numbers, function($carry, $number) {
	if(!isset($carry[$number])) {
		$carry[$number] = 1;
	} else {
		$carry[$number]++;
	}
	
	return $carry;
}, []);

arsort($numberCounts);
arsort($numberCountsArrayReduce);

var_dump($numberCounts);
var_dump($numberCountsArrayReduce);