// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明：叶子节点是指没有子节点的节点。

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
 * @return {number}
 */

// DFS
 var minDepth = function(root) {
  if(root == null) return 0

  let dfs = (node,depth)=>{
    if(node == null) return;

    //找到叶子节点的时候更新最小值
    if(!node.left&&!node.right){
      this.min = Math.min(this.min,depth);
    }

    if(node.left) dfs(node.left,depth+1);
    if(node.right) dfs(node.right,depth+1);
  }

  this.min = Infinity;
  dfs(root,1);
  return this.min;
};

//分治
var minDepth = function(root) {
  if(!root) return 0
  if(!root.left) return 1+minDepth(root.right);
  if(!root.right) return 1+minDepth(root.left);

  let leftMinDepth = minDepth(root.left);
  let rightMinDepth = minDepth(root.right);

  let result = 1+Math.min(leftMinDepth,rightMinDepth); //当前层+左右子树最小的深度
  return result;
}


// BFS
var minDepth = function(root) {
  if(root == null) return 0

  let queue = [root];
  let min = 0;

  while(queue.length){
    let len = queue.length;
    min++;
    //层序遍历
    while(len--){
      let node = queue.shift();

      if(!node.left&&!node.right){
        return min; //找到叶子结点
      }

      if(node.left){
        queue.push(node.left);
      }

      if(node.right){
        queue.push(node.right);
      }
    }
  }
  return min;
};
/* 示例 2：
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 

提示：
树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */