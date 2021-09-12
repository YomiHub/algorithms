/*
 * @Author: Yomi
 * @Date: 2021-09-12 10:37:20
 * @LastEditors: Yomi
 * @LastEditTime: 2021-09-12 10:39:13
 */
//二叉搜索树--------------------------------------------
function BinarySearchTree() {
  //根结点
  this.root = null;

  //创建结点的构造函数
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  // 插入结点 参数：插入结点的key值
  BinarySearchTree.prototype.insert = function (key) {
    var newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 前序遍历 参数：对结点key值的处理函数
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    this.preOrderTraversalNode(this.root, handler);
  }

  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      handler(node.key);  //打印当前结点
      this.preOrderTraversalNode(node.left, handler);
      this.preOrderTraversalNode(node.right, handler);
    }
  }

  //中序遍历
  BinarySearchTree.prototype.inOrderTraversal = function (handler) {
    this.inOrderTraversalNode(this.root, handler);
  }

  BinarySearchTree.prototype.inOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, handler);
      handler(node.key);
      this.inOrderTraversalNode(node.right, handler);
    }
  }

  //后序遍历
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
    this.postOrderTraversalNode(this.root, handler);
  }

  BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, handler);
      this.postOrderTraversalNode(node.right, handler);
      handler(node.key);
    }
  }

  //获取最小值
  BinarySearchTree.prototype.min = function () {
    var node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.key;
  }

  //获取最大值
  BinarySearchTree.prototype.max = function () {
    var node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.key;
  }

  //搜索特定的值，返回true或者false
  BinarySearchTree.prototype.search = function (key) {
    return this.searchNode(this.root, key);
  }

  BinarySearchTree.prototype.searchNode = function (node, key) {
    if (node == null) {
      return false;
    }

    if (node.key > key) {
      return this.searchNode(node.left, key);
    } else if (node.key < key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  //非递归搜索
  //  BinarySearchTree.prototype.search = function (key) {
  //    var node = this.root;
  //    while (node !== null) {
  //      if (node.key > key) {
  //        node = node.left;
  //      } else if (node.key < key) {
  //        node = node.right;
  //      } else {
  //        return true;
  //      }
  //    }
  //    return false;
  //  }


  //二叉搜索树删除结点
  BinarySearchTree.prototype.remove = function (key) {
    var current = this.root;
    var parent = this.root;
    var isLeftChild = true;

    //查找结点
    while (current.key !== key) {
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }

      if (current === null) {
        return false;  //没有找到要删除的结点
      }
    }

    //情况一：删除的是叶子结点
    if (current.left === null && current.right === null) {
      if (current == this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (current.right === null) { //情况二： 删除有一个子结点的结点
      if (current == this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.right;
      }
    } else if (current.left === null) {
      if (current == this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else {   //情况三：删除有两个结点的结点
      //获取后继结点
      var successor = this.getSuccessor(current);

      if (current == this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }

      successor.left = current.left;
    }
    return true;
  }

  //寻找后继结点(在右子树中寻找最小值)
  BinarySearchTree.prototype.getSuccessor = function (delNode) {
    var successorParent = delNode;
    var successor = delNode;
    var current = delNode.right;

    //在左子树中找最小值，即最后一个左结点
    while (current !== null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    if (successor != delNode.right) {
      successorParent.left = successor.right;   //摘结点successor
      successor.right = delNode.right;
    }
    return successor;
  }
}

// 测试代码
/* var test = new BinarySearchTree()
test.insert(11) // 插入数据
test.insert(7)
test.insert(15) */