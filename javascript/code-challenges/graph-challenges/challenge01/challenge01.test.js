
const { Graph } = require('./challenge01');
const breadthFirst = require('./challenge01');

describe('breadthFirst', () => {
    it('should return a list of all the nodes in the graph in the order they were visited', () => {
        const graph = new Graph();
        const ten = graph.addNode(10);
        const two = graph.addNode(2);
        const six = graph.addNode(6);
        const seven = graph.addNode(7);
        const three = graph.addNode(3);
        const eight = graph.addNode(8);
        graph.addEdge(ten, two);
        graph.addEdge(ten, six);
        graph.addEdge(ten, three);
        graph.addEdge(two, seven);
        graph.addEdge(six, seven);
        graph.addEdge(six, eight);
        graph.addEdge(three, eight);
        expect(breadthFirst(graph, ten)).toEqual([10, 2, 6, 3, 7, 8]);
    });
    });


