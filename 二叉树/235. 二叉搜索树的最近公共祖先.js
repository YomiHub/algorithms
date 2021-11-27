// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
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
// 遍历两次：从根节点到目标节点p和q，得到两条遍历的路径，比较得到最后一个重合的位置
var lowestCommonAncestor = function (root, p, q) {
  //生成路径
  let findNode = (root, target) => {
    let path = []
    let curr = root
    while (curr && curr != target) {
      path.push(curr)

      if (curr.val < target.val) {
        curr = curr.right
      } else {
        curr = curr.left
      }
    }
    path.push(curr)
    return path
  }

  let pPath = findNode(root, p)
  let qPath = findNode(root, q)
  let res
  for (let i = 0; i < pPath.length && i < qPath.length; ++i) {
    if (pPath[i] == qPath[i]) {
      res = pPath[i]
    }
  }
  return res
}

//Recursion : 一次遍历，找到p或者q
// 当前节点为p或者q则当前结点就是目标；否则查找左子树，左子树返回不为空且右子树也不为空则此节点就是公共祖先
var lowestCommonAncestor = function (root, p, q) {
  if (root == null || root == p || root == q) return root
  let leftNode = lowestCommonAncestor(root.left, p, q)
  let rightNode = lowestCommonAncestor(root.right, p, q)
  return leftNode == null ? rightNode : (rightNode == null ? leftNode : root)
}


//结合二叉搜索树的性质：左子树比根小，右子树比根大
var lowestCommonAncestor = function (root, p, q) {
  if(p.val<root.val&&root.val>q.val){
    //在左边查找
    return lowestCommonAncestor(root.left,p,q);
  }
  if(p.val>root.val&&root.val<q.val){
    //在右边查找
    return lowestCommonAncestor(root.right,p,q);
  }

  //左右分布时，自己就是查找目标
  return root;
}

//非递归做法
var lowestCommonAncestor = function(root,p,q){
  while(root){
    if(p.val<root.val&&root.val>q.val){
      root = root.left;
    }else if (p.val>root.val&&root.val<q.val){
      root = root.right;
    }else{
      //左右分叉，则查找到目标节点
      return root;
    }
  }
}

/* 
示例 2:
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 

说明:
所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
