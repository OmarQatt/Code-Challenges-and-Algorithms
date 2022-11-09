

function findTarget(root, k) {
    let hash = {};
    let result = false;
    function traverse(node) {
        if (node === null) {
            return;
        }
        if (hash[k - node.val]) {
            result = true;
            return;
        }
        hash[node.val] = true;
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return result;
}






