//-----------------------------------------------------------------
//二叉搜索树：给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树
//给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。

//找到不同的根，生成左右两个集合进行组合
var generateTrees = function (n) {
  if (n === 0) return [];
  return generateTrees(1, n);

  function generateTrees(start, end) {
    var res = [];
    if (start > end) {
      res.push(null);
      return res;
    }
    for (var i = start; i <= end; i++) {
      var left = generateTrees(start, i - 1);
      var right = generateTrees(i + 1, end);
      for (var l = 0; l < left.length; l++) {
        for (var r = 0; r < right.length; r++) {
          var node = new TreeNode(i);
          node.left = left[l];
          node.right = right[r];
          res.push(node);
        }
      }
    }
    return res;
  }
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var arr1 = [1, 2, 2, 1], arr2 = [2, 2];


/* 
示例 1：
输入：n = 3
输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]] 

示例 2：
输入：n = 1
输出：[[1]]
 

提示：

1 <= n <= 8

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-binary-search-trees-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */