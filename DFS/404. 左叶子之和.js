// 计算给定二叉树的所有左叶子之和。

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
//DFS
var sumOfLeftLeaves = function (root) {
  let sum = 0
  let dfs = (node) => {
    if (!node) return

    //判断node.left是否是叶子节点
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val
    }
    node.left && dfs(node.left)
    node.right && dfs(node.right)
  }
  dfs(root)
  return sum
}

//BFS
var sumOfLeftLeaves = function (root) {
  if (!root) return 0

  let sum = 0
  let queues = [root]
  while (queues.length) {
    let node = queues.shift()

    if (node.left) {
      //左子节点是叶子节点
      if (!node.left.left && !node.left.right) {
        sum+=node.left.val;
      } else {
        queues.push(node.left)
      }
    }

    if(node.right){
      //不是叶子节点则入队列
      if(!(!node.right.left&&!node.right.right)){
        queues.push(node.right);
      }
    }
  }
  return sum;
}

/* 
 3
/ \
9  20
 /  \
15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24


作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/sum-of-left-leaves/solution/zuo-xie-zi-zhi-he-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */
