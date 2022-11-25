'use strict';



function breadthFirst(graph, value) {
    let queue = [];
    let visited = new Set();
    let result = [];
    
    queue.push(value);
    visited.add(value);
    
    while (queue.length) {
        let current = queue.shift();
        result.push(current);
    
        let neighbors = graph.getNeighbors(current);
    
        for (let neighbor of neighbors) {
        let neighborNode = neighbor.vertex;
    
        if (visited.has(neighborNode)) {
            continue;
        } else {
            visited.add(neighborNode);
        }
    
        queue.push(neighborNode);
        }
    }
    
    return result;
    }

module.exports = breadthFirst;














