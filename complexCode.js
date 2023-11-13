/**
 * filename: complexCode.js
 * 
 * This code demonstrates a complex implementation of a data structure,
 * called a tree, along with various operations on it, such as insertion, removal,
 * searching, and traversal.
 */
 
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      const replaceNode = this._findMinNode(node.right);
      node.value = replaceNode.value;
      node.right = this._removeNode(node.right, replaceNode.value);
      return node;
    }
  }

  _findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this._findMinNode(node.left);
    }
  }

  search(value) {
    return this._searchNode(this.root, value);
  }

  _searchNode(node, value) {
    if (node === null || node.value === value) {
      return node;
    } else if (value < node.value) {
      return this._searchNode(node.left, value);
    } else {
      return this._searchNode(node.right, value);
    }
  }

  preOrderTraversal() {
    this._preOrder(this.root);
  }

  _preOrder(node) {
    if (node !== null) {
      console.log(node.value);
      this._preOrder(node.left);
      this._preOrder(node.right);
    }
  }

  postOrderTraversal() {
    this._postOrder(this.root);
  }

  _postOrder(node) {
    if (node !== null) {
      this._postOrder(node.left);
      this._postOrder(node.right);
      console.log(node.value);
    }
  }

  inOrderTraversal() {
    this._inOrder(this.root);
  }

  _inOrder(node) {
    if (node !== null) {
      this._inOrder(node.left);
      console.log(node.value);
      this._inOrder(node.right);
    }
  }
}

// Usage:
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(7);
binaryTree.insert(3);
binaryTree.insert(15);
binaryTree.insert(18);
binaryTree.insert(12);

console.log("Pre-order traversal:");
binaryTree.preOrderTraversal();

console.log("Post-order traversal:");
binaryTree.postOrderTraversal();

console.log("In-order traversal:");
binaryTree.inOrderTraversal();

console.log("Searching for 7:", binaryTree.search(7));

binaryTree.remove(15);

console.log("In-order traversal after removing 15:");
binaryTree.inOrderTraversal();