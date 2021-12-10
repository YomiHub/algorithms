// 给定一个 N 叉树，找到其最大深度。

// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

// N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
// DFS
var maxDepth = function (root) {
  if (!root) return 0;
  let res = 1;
  let dfs = (node, depth) => {
      if (node.children&&node.children.length==0) {
          //到叶子
          res = Math.max(depth, res);
          return;
      }
      let children = node.children;
      for (let child of children) {
          dfs(child, depth + 1);
      }
  }
  dfs(root, 1);
  return res;
}

//DFS 官解
var maxDepth = function(root) {
  if (!root) {
      return 0;
  }
  let maxChildDepth = 0;
  const children = root.children;
  for (const child of children) {
      const childDepth = maxDepth(child);
      maxChildDepth = Math.max(maxChildDepth, childDepth);
  }
  return maxChildDepth + 1;
};


// BFS
var maxDepth = function (root) {
  if (!root) return 0
  let res = 0
  let queues = [root]
  while (queues.length) {
    let count = queues.length
    while (count > 0) {
      let node = queues.shift()
      let children = node.children
      //children是对象数组
      for (let child of children) {
        queues.push(child)
      }
      count--
    }
    res++
  }
  return res
}
/* 
示例 2：

输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：5
 

提示：

树的深度不会超过 1000 。
树的节点数目位于 [0, 104] 之间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
