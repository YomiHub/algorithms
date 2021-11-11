// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

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
 * @return {number[]}
 */
// 使用栈模拟递归：由于先进后出，所以先将右节点入栈、左节点后入栈
var preorderTraversal = function (root) {
  let res = []
  let stack = [
    () => {
      visit(root)
    }
  ]

  const visit = function (node) {
    if (!node) return

    stack.push(() => {
      if (node.right) {
        visit(node.right)
      }
    })

    stack.push(() => {
      if (node.left) {
        visit(node.left)
      }
    })

    stack.push(() => {
      res.push(node.val)
    })
  }

  while (stack.length) {
    stack.pop()(); //执行函数
  }
  return res
}

// 递归
var preorderTraversal = function (root) {
  let res = []
  preOrder(root, res)
  return res
}

function preOrder(node, arr) {
  if (node) {
    arr.push(node.val)
    preOrder(node.left, arr)
    preOrder(node.right, arr)
  }
}

/* 
进阶：递归算法很简单，你可以通过迭代算法完成吗

输入：root = [1,null,2]
输出：[1,2]
 

提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-preorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
