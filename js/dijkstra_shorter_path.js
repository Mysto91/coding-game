// Define a graph using an adjacency list
const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

function test(value, expected) {
    if (JSON.stringify(dijkstraShorterPath(value)) === JSON.stringify(expected)) {
        console.log('.')
    } else {
        console.log('F')
    }
}

function dijkstraShorterPath(graph, start) {
    let distances = {};

    let nodesVisited = new Set();

    let nodes = Object.keys(graph);

    for (let node of nodes) {
        distances[node] = Infinity;
    }

    distances[start] = 0;

    while (nodes.length) {
        nodes.sort((a, b) => distances[a] - distances[b]);
        let closestNode = nodes.shift();

        if (distances[closestNode] === Infinity) {
            break;
        }

        nodesVisited.add(closestNode);

        for (let neighbor in graph[closestNode]) {
            if (!nodesVisited.has(neighbor)) {
                let newDistance = distances[closestNode] + graph[closestNode][neighbor];

                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                }
            }
        }
    }

    return distances;
}


console.log((dijkstraShorterPath(graph, 'A')))