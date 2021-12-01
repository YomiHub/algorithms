// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
// 叶子节点 是指没有子节点的节点。

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
 * @return {number[][]}
 */

// DFS解法
var pathSum = function (root, targetSum) {
  if (root == null) return []

  let res = []

  let dfs = (node, sum, nodeArr) => {
    //遍历到叶子节点时判断值
    if (node.left == null && node.right == null) {
      if (sum == targetSum) {
        res.push(nodeArr)
        return
      } else {
        return
      }
    }

    if (node.left != null) {
      let shallowArr = nodeArr.concat([node.left.val])
      dfs(node.left, sum + node.left.val, shallowArr)
    }

    if (node.right != null) {
      let shallowArr = nodeArr.concat([node.right.val])
      dfs(node.right, sum + node.right.val, shallowArr)
    }
  }

  dfs(root, root.val, [root.val])
  return res
}

// BFS
var pathSum = function (root, targetSum) {
  if (root == null) return []

  let res = []
  //这做法，优秀啊！参考题解看到的，看来自己的思维还是太固化了，还看到有记录上一个访问节点的做法
  let queues = [[root, root.val, [root.val]]] 

  while (queues.length) {
    let [node, sum, path] = queues.shift()

    //遍历到叶子节点时判断值
    if (node.left == null && node.right == null) {
      if (sum == targetSum) {
        res.push(path)
      }
    }

    if (node.left) {
      queues.push([node.left,sum+node.left.val,[...path,node.left.val]])
    }

    if (node.right) {
      queues.push([node.right,sum+node.right.val,[...path,node.right.val]])//记录到该节点为止的路径和
    }
  }

  return res
}

/* 
示例1
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]

提示：

树中节点总数在范围 [0, 5000] 内
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
