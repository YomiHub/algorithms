// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 1、先 前序遍历 展开到数组，然后遍历数组修改链表的指针指向
const preOrderTraversal = (root, list) => {
  if (root !== null) {
    list.push(root)
    preOrderTraversal(root.left, list)
    preOrderTraversal(root.right, list)
  }
}

var flatten = function (root) {
  const list = []
  preOrderTraversal(root, list)

  const size = list.length
  for (let i = 1; i < size; ++i) {
    const prev = list[i - 1],
      curr = list[i]
    prev.left = null
    prev.right = curr
  }
}

// 2、一边展开，一边修改指针指向
var flatten = function (root) {
  if (root === null) {
    return
  }

  const stack = [root]
  let prev = null
  while (stack.length) {
    const curr = stack.pop()

    if (prev !== null) {
      prev.left = null
      prev.right = curr
    }

    let left = curr.left,
      right = curr.right
    if (right !== null) {
      stack.push(right)
    }

    if (left !== null) {
      stack.push(left)
    }
    prev = curr
  }
}

// 3、前驱节点
// 如果一个节点的左子节点为空，则该节点不需要进行展开操作。如果一个节点的左子节点不为空，则该节点的左子树中的最后一个节点被访问之后，该节点的右子节点被访问
// 即查找当前结点 right 指针的前驱节点，对应应该是左树的最后一个右结点

var flatten = function (root) {
  let curr = root
  while (curr !== null) {
    if (curr.left !== null) {
      const next = curr.left
      let predecessor = next
      while (predecessor.right !== null) {
        predecessor = predecessor.right
      }
      predecessor.right = curr.right
      curr.left = null
      curr.right = next
    }
    curr = curr.right
  }
}

/* 示例 1：
输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]

示例 2：
输入：root = []
输出：[]

提示：

树中结点数在范围 [0, 2000] 内
-100 <= Node.val <= 100 */
