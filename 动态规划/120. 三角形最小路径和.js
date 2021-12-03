//给定一个三角形 triangle ，找出自顶向下的最小路径和。

//每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
//也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
/**
 * @param {number[][]} triangle
 * @return {number}
 */
//DP 动态规划 O(n*m)，从终点往前递推，将计算结果放在对应下标的位置
var minimumTotal = function (triangle) {
  let rowLen = triangle.length

  //最后一行路径最小值就是自己本身
  for (let i = rowLen - 2; i >= 0; --i) {
    for (let j = triangle[i].length - 1; j >= 0; --j) {
      //从下面目标点到当前[i,j]的最小路径和
      triangle[i][j] =
        triangle[i][j] + Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
    }
  }

  return triangle[0][0]
}

//DP 不污染本身数据的情况下，可以使用长度为triangle[rowLen-1].length的一维数组存储（每一列）
var minimumTotal = function (triangle) {
  let rowLen = triangle.length
  let [res] = triangle.slice(rowLen - 1) //不改变原数组，切割最后一行

  //最后一行路径最小值就是自己本身
  for (let i = rowLen - 2; i >= 0; --i) {
    //注意：列是从前往后，以避免res[j]被覆盖
    for (let j = 0; j < triangle[i].length; ++j) {
      //从下面目标点到当前[i,j]的最小路径和
      res[j] = triangle[i][j] + Math.min(res[j], res[j + 1])
    }
  }

  return res[0]
}

//DFS 穷举走过的路径：42 / 44 个通过测试用例（噗哈哈哈，直接超时，不愧是我）
var minimumTotal = function (triangle) {
  let min = Infinity
  let rowLen = triangle.length

  let dfs = (i, j, sum) => {
    if (i >= rowLen || j >= triangle[i].length) {
      min = Math.min(min, sum)
      return
    }
    dfs(i + 1, j, sum + triangle[i][j])
    dfs(i + 1, j + 1, sum + triangle[i][j])
  }

  dfs(0, 0, 0)
  return min
}

/* 
示例 1：

输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。


提示：

1 <= triangle.length <= 200
triangle[0].length == 1
triangle[i].length == triangle[i - 1].length + 1
-104 <= triangle[i][j] <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
