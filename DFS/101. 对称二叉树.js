// 给定一个二叉树，检查它是否是镜像对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

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
//DFS 检查左右是否对称
var isSymmetric = function (root) {
  if (!root) {
    return true
  }

  let isSame = true
  let dfs = (left, right) => {
    //叶子节点，遍历结束
    if (!left && !right) return;
    if ((!left && right) || (left && !right)||left.val!=right.val) {
      isSame = false
      return
    }

    //left和right节点都存在
    if(isSame){
      dfs(left.left,right.right);
      dfs(left.right,right.left);
    }
  }

  dfs(root.left,root.right);
  return isSame;
}

//BFS 根节点入队两次，每次取两个节点比较
var isSymmetric = function (root) {
  let queues = [root,root];

  while(queues.length){
    let left = queues.shift();
    let right = queues.shift();

    if(!left&&!right) continue; //叶子节点
    if(!left||!right||left.val!=right.val) return false;

    //下面为两个节点相同时
    queues.push(left.left);
    queues.push(right.right);
    queues.push(left.right);
    queues.push(right.left);
  }

  return true;
}

/* 
下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
 

进阶：你可以运用递归和迭代两种方法解决这个问题吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/symmetric-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
