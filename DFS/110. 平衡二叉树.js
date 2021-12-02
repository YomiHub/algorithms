// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

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
 * @return {boolean}
 */
// DFS 获取左右子树的最大深度
var isBalanced = function (root) {
  if (!root) return true
  //获取深度
  let dfs = (node) => {
    if (!node) {
      return 0
    }
    return Math.max(dfs(node.left), dfs(node.right)) + 1
  }

  let leftDepth = dfs(root.left)
  let rightDepth = dfs(root.right)
  //左右子树深度差不超过1，且子树也满足
  return (
    Math.abs(leftDepth - rightDepth) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}

//自底向上递归（后序遍历），减少重复的计算
var isBalanced = function (root) {
  if (!root) return true
  //获取深度，-1表示深度差大于1,
  let dfs = (node) => {
    if (!node) {
      return 0
    }

    let leftDepth = dfs(node.left);
    let rightDepth = dfs(node.right);
    if(leftDepth == -1 || rightDepth == -1 || Math.abs(leftDepth-rightDepth)>1){
      return -1;
    }
    return Math.max(leftDepth,rightDepth)+1;
  }

  return dfs(root)>=0;
}

/* 示例二
输入：root = [1,2,2,3,3,null,null,4,4]
输出：false

示例 3：
输入：root = []
输出：true
 

提示：

树中的节点数在范围 [0, 5000] 内
-104 <= Node.val <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/balanced-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
