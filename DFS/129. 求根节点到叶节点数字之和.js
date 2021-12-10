// 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
// 每条从根节点到叶节点的路径都代表一个数字：

// 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
// 计算从根节点到叶节点生成的 所有数字之和 。

// 叶节点 是指没有子节点的节点。
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
// middle
// 格局打开，官方解法看了就知道自己还是在暴解下苟活
// 官解DFS：遇到叶子节点时存叶子节点当前路径和；非叶子节点则计算左右节点和
const dfs = (node, preSum) => {
  if (node === null) return 0

  let sum = preSum * 10 + node.val //每递归一层，上一个数就进位
  if (!node.left && !node.right) {
    return sum
  } else {
    return dfs(node.left, sum) + dfs(node.right, sum)
  }
}

var sumNumbers = function (root) {
  return dfs(root, 0)
}

// 看到有用字符的遂改写了一番
var sumNumbers = function (root) {
  if (!root) return
  let res = 0
  let dfs = (node, path) => {
    if (!node) return

    path = path + node.val
    if (!node.left && !node.right) {
      res += Number(path)
      return
    }

    dfs(node.left, path)
    dfs(node.right, path)
  }
  dfs(root, "")
  return res
}

// 不知道自己是咋想的，好好的字符不用，用数组
var sumNumbers = function (root) {
  if (!root) {
    return 0
  }
  let res = 0
  let dfs = (node, path) => {
    if (!node) return
    path.unshift(node.val)
    if (!node.left && !node.right) {
      //叶子节点，求和path
      let len = path.length
      for (let i = 0; i < len; ++i) {
        res += path[i] * Math.pow(10, i)
      }
      //不需要return，还要执行数据复原的操作
    }

    dfs(node.left, path)
    dfs(node.right, path)
    path.shift()
  }

  dfs(root, [])
  return res
}
/* 
示例 2：
输入：root = [4,9,0,5,1]
输出：1026
解释：
从根到叶子节点路径 4->9->5 代表数字 495
从根到叶子节点路径 4->9->1 代表数字 491
从根到叶子节点路径 4->0 代表数字 40
因此，数字总和 = 495 + 491 + 40 = 1026
 

提示：

树中节点的数目在范围 [1, 1000] 内
0 <= Node.val <= 9
树的深度不超过 10

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sum-root-to-leaf-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
