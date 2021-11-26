//给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
//如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// BFS
var isSameTree = function (p, q) {
  let queue1 = [p];
  let queue2 = [q];

  while(queue1.length){
    let node1 = queue1.shift();
    let node2 = queue2.shift();

    if(!node1||!node2){
      if(node1!=node2){
        //不是都遍历到终点
        return false;
      }
      continue;
    }

    if(node1.val!=node2.val){
      return false;
    }

    queue1.push(node1.left);
    queue1.push(node1.right);
    queue2.push(node2.left);
    queue2.push(node2.right);
  }
  return true;
}

// DFS的解法
var isSameTree = function (p, q) {
  //遍历完或者都为空
  if (!p && !q) {
    return true
  } 

  //有一个先遍历到空节点
  if ((!p && q) || (p && !q)) {
    return false
  } 

  if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
    return p.val === q.val
  } else {
    return false
  }
}



/* 
提示：

两棵树上的节点数目都在范围 [0, 100] 内
-104 <= Node.val <= 104 */
