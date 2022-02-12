// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

// 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 将有序数组分成3份，中间为根节点，左小右大，再递归建立左右子树
var sortedArrayToBST = function (nums) {
  let len = nums.length
  if (!len) return null

  let mid = Math.floor(len / 2)
  let root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1, len))
  return root
}

var sortedArrayToBST = function (nums) {
  let dfs = (left, right) => {
    if (left > right) return null

    let mid = Math.floor((left + right) / 2) //中间靠右的话：Math.floor((left+right+1)/2)
    let root = new TreeNode(nums[mid])
    root.left = dfs(left, mid - 1)
    root.right = dfs(mid + 1, right)
    return root
  }
  dfs(0, nums.legnth - 1)
}

let testObj =new {
  name: "hym",
  age: 18,
}

testObj.prototype.sayhello = "你好"

// console.log(Object.keys(testObj));
