// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

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
 * @return {number[][]}
 */
//推荐 BFS 解法：while对每一层的节点开一个for循环
var levelOrder = function(root) {
  if(!root) return [];
  let result = [];
  let queue = [root];

  while(queue.length){
    let len = queue.length;
    let levelNode = [];
    for(let i= 0; i<len;++i){
      let node = queue.shift();
      levelNode.push(node.val);

      if(node.left){
        queue.push(node.left);
      }

      if(node.right){
        queue.push(node.right);
      }
    }
    result.push(levelNode);
  }

  return result;
}


// DFS 解法: 使用变量level记录所在的层，递归遍历时push到对应level的数组中
var levelOrder = function(root) {
   let res = [];
   let dfs = (node,level=0)=>{
     if(!node) return; //null

     if(!res[level]){
       res[level] = [];
     }

     res[level].push(node.val);

     dfs(node.left,level+1);
     dfs(node.right,level+1);
   }

   dfs(root);
   return res;
};

/* 二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */