// Write here the code challenge solution

class Node{
    constructor(data, left=null, right=null) {
       this.data = data;
       this.left = left;
       this.right = right;
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
 BST1.insert(2);
 BST1.insert(3);

 BST2.insert(1);
 BST2.insert(2);
 BST2.insert(3);
//  BST2.insert(4);

var newArray = [3,1]

var arrayToBST = function(nums) {
    let arr = nums;
    function BST(left, right) {
        if (left > right) return null;
        if (left === right) {
            return new Node(arr[left])
        }
        let mid = Math.floor((left + right) / 2);
        let node = new Node(arr[mid]);
        node.left = BST(left, mid - 1);
        node.right = BST(mid + 1, right);
        return node;
    }

    let root = BST(0, arr.length - 1);
    return root;
  };

  console.log(arrayToBST(newArray))

 