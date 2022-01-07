// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

// 一般来说，删除节点可分为两个步骤：
// 1.首先找到需要删除的节点；
// 2.如果找到了，删除它。

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
 * @param {number} key
 * @return {TreeNode}
 */
// 如果目标节点大于当前节点值，则去右子树中删除；
// 如果目标节点小于当前节点值，则去左子树中删除；
// 如果目标节点就是当前节点，分为以下三种情况：
// 其无左子：其右子顶替其位置，删除了该节点；
// 其无右子：其左子顶替其位置，删除了该节点；
// 其左右子节点都有：其左子树转移到其右子树的最左节点的左子树上，然后右子树顶替其位置，由此删除了该节点。

/* 作者：Terry2020
链接：https://leetcode-cn.com/problems/delete-node-in-a-bst/solution/miao-dong-jiu-wan-shi-liao-by-terry2020-tc0o/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */

var deleteNode = function (root, key) {
  if (!root) return null
  if (key > root.val) {
    root.right = deleteNode(root.right, key)
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else {
    if (!root.left) {
      return root.right //右子树顶替
    }else if(!root.right){
      return root.left;
    }

    //有左右子树，用右子树顶替，
    let node = root.right;
    while(node.left){
      node = node.left;
    }
    node.left = root.left; //将左子树移动到最小的位置
    root = root.right;
  }
  return root;
}

// 二叉搜索树中序遍历为递增
// 对于删除的节点存在右子树，则在右子树查找最小值替代 Successor(比当前节点大的最小节点)
// 删除的节点存在左子树，则在左子树查找最大值替代 Predecessor(比当前节点小的最大节点)
var predecessor = function (root) {
  root = root.left
  while (root.right) {
    root = root.right
  }
  return root.val //返回值用于替换root.val
}

var successor = function (root) {
  root = root.right
  while (root.left) {
    root = root.left
  }
  return root.val
}

var deleteNode = function (root, key) {
  if (!root) return null

  if (key > root.val) {
    root.right = deleteNode(root.right, key)
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else {
    if (!root.left && !root.right) {
      // 叶子节点直接删除
      root = null
    } else if (root.right) {
      // 在右子树查找最小值
      root.val = successor(root)
      root.right = deleteNode(root.right, root.val)
    } else {
      // 比当前值要小的最大值
      root.val = predecessor(root)
      root.left = deleteNode(root.left, root.val)
    }
  }

  return root
}

/* 示例 2:
输入: root = [5,3,6,2,4,null,7], key = 0
输出: [5,3,6,2,4,null,7]
解释: 二叉树不包含值为 0 的节点

示例 3:
输入: root = [], key = 0
输出: []
 

提示:

节点数的范围 [0, 104].
-105 <= Node.val <= 105
节点值唯一
root 是合法的二叉搜索树
-105 <= key <= 105
 

进阶： 要求算法时间复杂度为 O(h)，h 为树的高度。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/delete-node-in-a-bst
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
