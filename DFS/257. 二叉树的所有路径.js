// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
// 叶子节点 是指没有子节点的节点。
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// Tag simple

 var binaryTreePaths = function (root) {
  if (!root) {
    return
  }
  let res = []
  let dfs = (node, str) => {
    if (!node.left && !node.right) {
      //叶子节点
      res.push(str);
      return;
    }

    if(node.left){
      dfs(node.left,str+ "->" + node.left.val)
    }

    if(node.right){
      dfs(node.right,str+ "->" + node.right.val);
    }
  }

  dfs(root,root.val+"");
  return res;
}

var binaryTreePaths = function (root){
  let res = [];

  let dfs = (node,curPath)=>{
    if(!node){
      return;
    }
    curPath.push(node.val);

    if(!node.left&&!node.right){
      res.push(curPath.slice().join("->"));  //slice拷贝一份数据，避免源数据被修改
    }

    dfs(node.left,curPath);
    dfs(node.right,curPath);
    curPath.pop();  //数据归位
  }

  dfs(root,[]);
  return res;
}


/* 
示例 1：

输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]

提示：

树中节点的数目在范围 [1, 100] 内
-100 <= Node.val <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-paths
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
