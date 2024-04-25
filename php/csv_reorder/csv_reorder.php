<?php

/**
 * @param array<string, string> $arr
 *
 * @return array<string, string>
 */
function ksortIgnoreCase(array $arr): array
{
    $result = $arr;
    uksort($result, 'strcasecmp');

    return $result;
}

/**
 * @param string[] $headers
 * @param string[] $data
 * 
 * @return array<int, array<string, string>>
 */
function associateDataWithHeaders(array $headers, array $data): array
{
    $result = [];

    foreach ($data as $row) {
        $rowData = [];

        foreach ($headers as $index => $header) {
            $rowData[$header] = $row[$index] ?? '';
        }

        $result[] = $rowData;
    }

    return $result;
}

/**
 * @return array<string, string[]>
 */
function getCsvArray(string $csvString): array
{
    $lines = explode("\n", $csvString);

    return [
        'headers' => str_getcsv(array_shift($lines)),
        'data' => array_map('str_getcsv', $lines)
    ];
}

/**
 * @param string[] $headers
 * @param array<string, string[]> $data
 */
function getCsvString(array $headers, array $data): string
{
    $reorderedCsvString = implode(',', $headers) . "\n";

    foreach ($data as $rowData) {
        $rowValues = [];

        foreach ($headers as $header) {
            $rowValues[] = $rowData[$header];
        }

        $reorderedCsvString .= implode(',', $rowValues) . "\n";
    }

    return rtrim($reorderedCsvString);
}

function sort_csv_columns(string $csvString): string
{
    [
        'headers' => $headers,
        'data' => $data
    ] = getCsvArray($csvString);

    $dataWithHeaders = associateDataWithHeaders($headers, $data);

    natcasesort($headers);

    $dataWithSortedHeaders = array_map('ksortIgnoreCase', $dataWithHeaders);

    return getCsvString($headers, $dataWithSortedHeaders);
}
// Exemple d'utilisation
$originalCsvString = "Beta,Alpha,Omega,Gamma\n3,1,2\ntoto,tata";
$reorderedCsvString = sort_csv_columns($originalCsvString);

echo "CSV original :\n$originalCsvString\n\n";
echo "CSV réorganisé :\n$reorderedCsvString\n";
