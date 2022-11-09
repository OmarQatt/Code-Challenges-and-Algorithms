'use strict'

function Node(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var preorderTraversal = function(root) {
    if(!root) return null;
    const result = [];

    const preorder = (node) => {
        if(!node) return null;

        result.push(node.val);
        if(node.left) preorder(node.left)
        if(node.right) preorder(node.right)
    }
    preorder(root);
    return result;
}
var inorderTraversal = function(root) {
    if(!root) return null;
    const result = [];

    const inorder = (node) => {
        if(!node) return null;

        if(node.left) inorder(node.left)
        result.push(node.val);
        if(node.right) inorder(node.right)
    }
    inorder(root);
    return result;
}


var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null

    let root = new Node(preorder[0]);
    let mid = inorder.indexOf(root.val);

    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid +1), inorder.slice(mid + 1))

    return root
}
console.log(buildTree([3,9,20,15,7],[9,3,15,20,7]))

module.exports = buildTree