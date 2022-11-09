// Write here the code challenge solution
class Node{
    constructor(data) {
       this.data = data;
       this.left = null;
       this.right = null;
    };
 };
 class BinarySearchTree{
    constructor(){
       this.root = null;
    }
    insert(data){
       var newNode = new Node(data);
       if(this.root === null){
          this.root = newNode;
       }else{
          this.insertNode(this.root, newNode);
       };
    };
    insertNode(node, newNode){
       if(newNode.data < node.data){
          if(node.left === null){
             node.left = newNode;
          }else{
             this.insertNode(node.left, newNode);
          };
       } else {
          if(node.right === null){
             node.right = newNode;
          }else{
             this.insertNode(node.right,newNode);
          };
       };
    };
 };
 const BST1 = new BinarySearchTree();
 const BST2 = new BinarySearchTree();
 BST1.insert(1);
 BST1.insert(3);
 BST1.insert(2);

 BST2.insert(1);
 BST2.insert(2);
 BST2.insert(3);

//  BST2.insert(2);

var isSameTree = function(p, q) {
    function check(p, q) {
        if (!p || !q) return p === q;
        if (p.val !== q.val) return false;
        return check(p.left, q.left) && check(p.right, q.right);
    }
    return check(p, q);
  };

  console.log(isSameTree(BST1,BST2))
  console.log(BST1,BST2)
 