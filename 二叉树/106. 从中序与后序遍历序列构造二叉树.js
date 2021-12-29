// 根据一棵树的中序遍历与后序遍历构造二叉树。

// 注意:你可以假设树中没有重复的元素。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// DFS解法 
 var buildTree = function(inorder, postorder) {
  let len = inorder.length;
  let inordermap = {}
  for(let i = 0; i<len; ++i){
    inordermap[inorder[i]] = i;
  }

  let dfs = (inLeft,inRight,postLeft,postRight)=>{
    if(postLeft>postRight) return null;
    let postRoot = postRight;
    let inRoot = inordermap[postorder[postRoot]];  //根节点在中序遍历中的下标
    let right_treeLen = inRight-inRoot;  // 右子树的长
    let root = new TreeNode(postorder[postRoot]);
    root.right = dfs(inRoot+1,inRight,postRight-right_treeLen,postRight-1);
    root.left = dfs(inLeft,inRoot-1,postLeft,postRight-right_treeLen-1);
    return root
  }

  return dfs(0,len-1,0,len-1);
};


/* 
例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */