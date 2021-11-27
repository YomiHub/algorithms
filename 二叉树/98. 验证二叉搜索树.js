//给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：
// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树
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
 * @return {boolean}
 */
//方法一：中序遍历（左根右）的结果是升序的
var isValidBST = function(root) {
  let midOrder = (node,arr)=>{
    if(node!=null){
      midOrder(node.left,arr);
      arr.push(node.val);
      midOrder(node.right,arr);
    }
  }
  
  let res = [];
  midOrder(root,res);
  let str = res.join(",");
  let setArr = new Set(res);  //数组去重，排序根结点与子树相等的情况

  return str==[...setArr].sort((a,b)=>{ return a-b}).join(",")  //大量消耗内存
}

//方法二：左根右中序遍历，用前驱prev记录上一次的访问，用于验证是否是递增遍历
 var isValidBST = function(root) {
  let diff = (root,_this)=>{
    if(root==null) return true;

    if(!diff(root.left,_this)){
      return false;
    }

    //左根右，遍历应该是递增的
    if(_this.prev&&_this.prev.val>=root.val){
      return false
    }

    _this.prev = root;
    return diff(root.right,_this);
  }

  this.prev= null;  //保存上一次遍历的结果，用于验证是否为递增
  return diff(root,this);
};

//方法二延伸
var isValidBST = function(root) {
  let stack = [];
  let inorder = -Infinity;

  while (stack.length || root !== null) {
      while (root !== null) {
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
      if (root.val <= inorder) {
          return false;
      }
      inorder = root.val;
      root = root.right;
  }
  return true;
};


// 推荐方法三：递归（左子树递归后最大值小于根节点、右子树最小值大于根结点）
var isValidBST = function(root) {
  let diff = (node,min,max)=>{
    if(node==null) return true;
    if(min != null && node.val<=min) return false;   //当前节点点要大于左子树
    if(max != null && node.val>=max) return false;  //当前节点要小于右子树

    return diff(node.left,min,node.val)&&diff(node.right,node.val,max);
  }

  return diff(root,-Infinity,Infinity);
};

  
/* 来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/validate-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */