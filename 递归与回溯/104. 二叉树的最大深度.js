//-----------------------------------------------------------------
//二叉树：给定一个二叉树，找出其最大深度。即二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
//说明: 叶子节点是指没有子节点的节点。
const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: {
    val: 7,
    left: null,
    right: null,
  },
}

// DFS（深度优先搜索）策略
var maxDepth = function (root) {
  if (root === null) {
    return 0
  } else {
    let leftLen = maxDepth(root.left)
    let rightLen = maxDepth(root.right)
    return Math.max(leftLen, rightLen) + 1
  }
}

//DFS
var maxDepth = function(root){
  let max = 0;

  let dfs = (node,depth)=>{
    if(!node) return;
    max = Math.max(max,depth);

    if(node.left){dfs(node.left,depth+1)}
    if(node.right){dfs(node.right,depth+1)}
  }

  dfs(root,1);
  return max;
}

//BFS
var maxDepth = function (root) {
  if (root === null) return 0;
  let queue = [root];
  let max = 0;

  while(queue.length){
    ++max;
    let levelLen = queue.length;

    while(levelLen--){
      let node = queue.shift();
      if(node.left){
        queue.push(node.left);
      }

      if(node.right){
        queue.push(node.right);
      }
    }
  }
  return max;
}

//BFS
var maxDepth = function (root) {
  if (root === null) return 0
  let depth = 1
  let stack = [root]
  let currentNode = root

  while (stack.length) {
    while (getNotArrivedChild(currentNode)) {
      stack.push(getNotArrivedChild(currentNode))
      currentNode = getNotArrivedChild(currentNode)
      //这里给访问过的节点标记一下
      currentNode.ok = true
      //如果加入这个节点后，stack长度大于当前depth，就更新depth为stack长度。
      if (stack.length > depth) depth = stack.length
    }
    stack.pop()
    currentNode = stack[stack.length - 1]
  }

  return depth
}

//这个函数用来返回当前节点还未被访问过的子节点
function getNotArrivedChild(root) {
  if (root.left && !root.left.ok) return root.left
  if (root.right && !root.right.ok) return root.right
  return null
}

/* 示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
