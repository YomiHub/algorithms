//-----------------------------------------------------------------
//回旋镖的数量
//给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中

//执行用时 :180 ms, 在所有 javascript 提交中击败了89.47%的用户
//内存消耗 :41.7 MB, 在所有 javascript 提交中击败了59.38%的用户
var numberOfBoomerangs = function (points) {
  var len = points.length

  var count = 0
  for (let i = 0; i < len; i++) {
    let sumMap = new Map()
    for (let j = 0; j < len; j++) {
      if (i === j) continue
      let sum = getDis(points[i], points[j]) //节省内存可以直接计算d = dx * dx + dy * dy
      if (sumMap.has(sum)) {
        let num = sumMap.get(sum)
        count += num
        sumMap.set(sum, num + 1)
      } else {
        sumMap.set(sum, 1)
      }
      //上述map条件判断可以简写为 let count = ~~map.get(dis);
    }
  }
  return count * 2
}

function getDis(point1, point2) {
  return (
    (point1[0] - point2[0]) * (point1[0] - point2[0]) +
    (point1[1] - point2[1]) * (point1[1] - point2[1])
  )
}

console.log(
  numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ])
)

/* 
示例 1：
输入：points = [[0,0],[1,0],[2,0]]
输出：2
解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]

示例 2：
输入：points = [[1,1],[2,2],[3,3]]
输出：2

示例 3：
输入：points = [[1,1]]
输出：0
 

提示：
n == points.length
1 <= n <= 500
points[i].length == 2
-104 <= xi, yi <= 104
所有点都 互不相同

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-boomerangs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
