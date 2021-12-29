// 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 前序遍历是:根左右、中序遍历是:左右根
// DFS解法
var buildTree = function (preorder, inorder) {
  let len = inorder.length;
  let inordermap = {}
  // 创建中序遍历的映射，方便定位根节点
  for (let i = 0; i < len; i++) {
    inordermap[inorder[i]] = i
  }

  let dfs = (preLeft, preRight, inLeft, inRight) => {
    if (preLeft > preRight) {
      return null
    }
    let preRoot = preLeft
    let inRoot = inordermap[preorder[preRoot]] //根节点在中序遍历中的index
    let root = new TreeNode(preorder[preRoot])
    let left_treeLen = inRoot - inLeft  //根据中序下标确定左子树的长

    root.left = dfs(preLeft + 1, preLeft + left_treeLen, inLeft, inRoot - 1) // 递归构建左子树
    root.right = dfs(preLeft + left_treeLen + 1, preRight, inRoot + 1, inRight) // 递归构建右子树
    return root
  }

  return dfs(0,len-1,0,len-1);
}

// BFS 解法
// 对于前序遍历中的任意两个连续节点 u 和 v，根据前序遍历的流程，我们可以知道 u 和 v 只有两种可能的关系：
// 1.v 是 u 的左儿子。这是因为在遍历到 u 之后，下一个遍历的节点就是 u 的左儿子，即 v；
// 2.u 没有左儿子，并且 v 是 u 的某个祖先节点（或者 u 本身）的右儿子。如果 u 没有左儿子，那么下一个遍历的节点就是 u 的右儿子。如果 u 没有右儿子，我们就会向上回溯，直到遇到第一个有右儿子（且 u 不在它的右儿子的子树中）的节点 u_a，那么 v 就是 u_a的右儿子。

var buildTree = function (preorder, inorder) {
  // 朕看着有点晕，改天再批阅?
  
}

/* 示例 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]
 

提示:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder 和 inorder 均无重复元素
inorder 均出现在 preorder
preorder 保证为二叉树的前序遍历序列
inorder 保证为二叉树的中序遍历序列

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
