// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 层序遍历取最后一个节点值（广度优先搜索BFS）
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function (root) {
  if (!root) return []
  let res = []
  let queue = [root]

  while (queue.length) {
    let len = queue.length
    let last

    for (let i = 0; i < len; ++i) {
      let node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      // 注意：val可能为0
      if (node.val !== undefined) {
        last = node.val
      }
    }
    res.push(last)
  }
  return res
}


//深度优先搜索 DFS：按照 「根结点 -> 右子树 -> 左子树」 的顺序访问
var rightSideView = function (root) {
  if (!root) return []
  let res = [];
  const DFS = function(node,depth){
    if(!node) return;

    if(depth == res.length){
      res.push(node.val);
    } //如果当前节点所在深度还没有出现在res里,在该深度下当前节点是第一个被访问的节点

    depth++;
    DFS(node.right,depth);
    DFS(node.left,depth);
  }

  DFS(root,0);
  return res;
}
/* 示例 2:

输入: [1,null,3]
输出: [1,3]

示例 3:
输入: []
输出: []
 

提示:

二叉树的节点个数的范围是 [0,100]
-100 <= Node.val <= 100 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-right-side-view
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
