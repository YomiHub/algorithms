// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。

// 二叉搜索树： 结点的左子树只包含小于当前结点的数、结点的右子树只包含大于当前结点的数、所有左子树和右子树自身必须也是二叉搜索树

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
 * @param {number} k
 * @return {number}
 */

// 1、根据二叉搜索树的特性，直接中序遍历
var kthSmallest = function (root, k) {
  const stack = []
  while (root !== null || stack.length) {
    while (root !== null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    --k
    if (k === 0) {
      break
    }
    root = root.right
  }
  return root.val
}

// 2、记录子树的结点数
// 如果 node 的左子树的结点数 left 小于 k−1，则第 k 小的元素一定在 node 的右子树中
// 如果 node 的左子树的结点数 left 等于 k−1，则第 k 小的元素即为 node ，结束搜索并返回 node 即可；
// 如果 node 的左子树的结点数 left 大于 k−1，则第 k 小的元素一定在 node 的左子树中，令 node 等于其左子结点，继续搜索
var kthSmallest = function (root, k) {
  const countTree = new CalTree(root)
  return countTree.getKthSmall(k)
}

class CalTree {
  constructor(root) {
    this.root = root
    this.countMap = new Map()
    this.countNodeNum(root)
  }

  // 统计以node为根结点的子树结点数
  countNodeNum(node) {
    if (node == null) {
      return 0
    }
    this.countMap.set(
      node,
      1 + this.countNodeNum(node.left) + this.countNodeNum(node.right)
    )
    return this.countMap.get(node)
  }

  getNodeCount(node) {
    return this.countMap.get(node) || 0
  }

  // 获取第 k 小的元素
  getKthSmall(k) {
    let node = this.root

    while (node !== null) {
      let leftCount = this.getNodeCount(node.left)
      if (leftCount < k - 1) {
        node = node.right
        k = k - 1 - leftCount // 除去当前 node，要减1
      } else if (leftCount === k - 1) {
        break
      } else {
        node = node.left
      }
    }
    return node.val
  }
}

/* 
示例 1：
输入：root = [3,1,4,null,2], k = 1
输出：1

提示：

树中的节点数为 n 。
1 <= k <= n <= 104
0 <= Node.val <= 104 */
