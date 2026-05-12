// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 1、递归 深度遍历，查找左右子节点是否包含 p 节点或 q 节点
var lowestCommonAncestor = function (root, p, q) {
  let result

  const dfs = (root, p, q) => {
    if (root === null) {
      return false
    }

    const leftContain = dfs(root.left, p, q)
    const rightContain = dfs(root.right, p, q)

    // 子节点包含两个项 || 其中一项是当前值且子节点包含任意一项（因为每个节点的值时唯一，所以任意一项均可）
    if (
      (leftContain && rightContain) ||
      ((root.val === p.val || root.val === q.val) &&
        (leftContain || rightContain))
    ) {
      result = root
    }

    // 返回当前子树的包含情况
    return (
      leftContain || rightContain || root.val === p.val || root.val === q.val
    )
  }

  dfs(root, p, q)
  return result
}

// 2、用哈希表存储父节点
// 利用节点的父节点信息从 p 结点开始不断往上跳，并记录已经访问过的节点，再从 q 节点开始不断往上跳，如果碰到已经访问过的节点，那么这个节点就是我们要找的最近公共祖先。
var lowestCommonAncestor = function (root, p, q) {
  const parentMap = new Map()
  const visitedMap = new Map()

  const dfs = (node) => {
    if (node === null) return

    if (node.left !== null) {
      parentMap[node.left.val] = node
      dfs(node.left)
    }

    if (node.right !== null) {
      parentMap[node.right.val] = node
      dfs(node.right)
    }
  }

  dfs(root)

  while (p) {
    visitedMap[p.val] = true
    p = parentMap[p.val]
  }

  while (q) {
    if (visitedMap[q.val]) {
      return q
    }
    q = parentMap[q.val]
  }

  return
}

/* 
示例 1：
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。

提示：

树中节点数目在范围 [2, 105] 内。
-109 <= Node.val <= 109
所有 Node.val 互不相同 。
p != q
p 和 q 均存在于给定的二叉树中。

作者：力扣官方题解
链接：https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/solutions/238552/er-cha-shu-de-zui-jin-gong-gong-zu-xian-by-leetc-2/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
