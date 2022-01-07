// 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

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
 * @param {number} targetSum
 * @return {number}
 */
// DFS 
var getPathNum = function (node, sum) {
  // 求从node到叶子节点和为sum的个数
  let count = 0;
  let dfs = (node, target) => {
    if(!node) return;

    if(node.val === target){
      count++;
    }

    dfs(node.left,target-node.val);
    dfs(node.right,target-node.val)
  }
  dfs(node,sum);
  return count;
}

var pathSum = function (root, targetSum) {
  if(!root) return 0;
  // 从root到叶子节点的所有情况 + 左右子节点为起点的所有情况 
  return getPathNum(root,targetSum)+pathSum(root.left,targetSum)+pathSum(root.right,targetSum);
}

// 回溯解法（从递归的深层返回时，需要将改变过的变量重置） + map 记忆化
var pathSum = function (root, targetSum) {
  let sumMap = new Map();
  sumMap[0] = 1; //满足条件则至少+1
  let res = 0;

  let dfs = (node,prefixNum)=>{
    if(!node) return 0; 
    let sum = prefixNum+node.val;
    if(sumMap[sum-targetSum]>0){
      // 在遍历过的节点中查找满足条件的
      res += sumMap[sum-targetSum];
    }
    
    if(sumMap[sum]>0){
      sumMap[sum]++;
    }else{
      sumMap[sum] = 1;
    }

    dfs(node.left,sum);
    dfs(node.right,sum);

    sumMap[sum]--; //是全局的，所以要将值重置回去
  }

  dfs(root,0);
  return res;
}

/* 提示:
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3
 
二叉树的节点个数的范围是 [0,1000]
-109 <= Node.val <= 109 
-1000 <= targetSum <= 1000 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
