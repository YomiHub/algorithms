//-----------------------------------------------------------------
//直线上最多的点数:给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。

//执行用时 :1816 ms, 在所有 javascript 提交中击败了7.32%的用户
//内存消耗 :85.7 MB, 在所有 javascript 提交中击败了10.00%的用户
var maxPoints = function (points) {
  var len = points.length
  var res = 0
  if (len < 3) {
    return len
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i == j) continue

      let count = 2
      //p1与p2为同一个坐标
      if (points[j][0] == points[i][0] && points[j][1] == points[i][1]) {
        count = 3
        res = res < count ? count : res
        continue
      }
      for (let k = i + 1; k < len; k++) {
        if (k == i || k == j) continue

        let ifSameLine = ifOnline(points[i], points[j], points[k])
        if (ifSameLine) {
          count++
        }
      }
      res = res < count ? count : res //if (res < count) {res = count;  }
    }
  }
  return res
}

function ifOnline(p1, p2, p3) {
  if (
    (p2[0] == p1[0] && p3[0] == p1[0]) ||
    (p2[1] == p1[1] && p3[1] == p1[1])
  ) {
    return true
  } else if (
    (p2[0] == p1[0] && p3[0] !== p1[0]) ||
    (p2[1] == p1[1] && p3[1] !== p1[1])
  ) {
    return false
  } else {
    //BigInt是JavaScript中的一个新的原始类型，可以用任意精度表示整数。使用BigInt，即使超出JavaScript Number 的安全整数限制，也可以安全地存储和操作大整数(chrome 67+开始支持BigInt)
    return (
      BigInt(p3[0] - p1[0]) * BigInt(p2[1] - p1[1]) ==
      BigInt(p3[1] - p1[1]) * BigInt(p2[0] - p1[0])
    ) //超出安全数的情况9008126584144800n 9008126584144801n
    //(x-x1)/(x2-x1) = (y-y1)/(y2-y1)
  }
}

//执行用时 :88 ms, 在所有 javascript 提交中击败了78.05%的用户
//内存消耗 :38 MB, 在所有 javascript 提交中击败了60.00%的用户
var maxPoints = function (points) {
  //求最大公约数
  function gcd(x, y) {
    if (y === 0) {
      return x
    }
    return gcd(y, x % y)
  }

  if (points.length <= 2) {
    return points.length
  }

  let result = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < points.length - 1; ++i) {
    let max = 0
    let repeat = 0
    let slope = new Map()

    for (let j = i + 1; j < points.length; ++j) {
      let dx = points[i][0] - points[j][0]
      let dy = points[i][1] - points[j][1]

      if (dy === 0 && dx === 0) {
        ++repeat
        continue
      }

      const g = gcd(dy, dx)
      if (g !== 0) {
        dx /= g
        dy /= g
      }

      const key = `${dx}/${dy}` //分数表示
      let count = (slope.get(key) || 0) + 1

      slope.set(key, count)
      max = Math.max(max, count)
    }
    result = Math.max(result, repeat + max + 1)
  }

  return result
}

//执行用时 :112 ms, 在所有 javascript 提交中击败了48.78%的用户
//内存消耗 :38.5 MB, 在所有 javascript 提交中击败了60.00%的用户
var maxPoints = function (points) {
  if (points.length == 0) return 0
  var result = 0,
    pointsMap = new Map()
  for (var i = 0; i < points.length; i++) {
    if (pointsMap.has(points[i].toString())) {
      pointsMap.set(
        points[i].toString(),
        pointsMap.get(points[i].toString()) + 1
      ) //统计相同坐标数
    } else {
      pointsMap.set(points[i].toString(), 1)
    }
  }
  var pointsArr = [...pointsMap] //解构赋值，包含key和value的二维数组
  console.log(pointsArr)
  if (pointsArr.length == 1) return pointsArr[0][1]
  for (var i = 0; i < pointsArr.length; i++) {
    var map = new Map()
    for (var ii = i + 1; ii < pointsArr.length; ii++) {
      var res = 0
      if (pointsArr[i][0].split(",")[0] - pointsArr[ii][0].split(",")[0] === 0)
        //x轴坐标相同
        res = "y"
      if (pointsArr[i][0].split(",")[1] - pointsArr[ii][0].split(",")[1] === 0)
        //y轴坐标相同
        res = "x"
      res =
        res == 0
          ? (pointsArr[i][0].split(",")[0] - pointsArr[ii][0].split(",")[0]) /
            (pointsArr[i][0].split(",")[1] - pointsArr[ii][0].split(",")[1])
          : res //
      if (map.has(res)) {
        map.set(res, map.get(res) + pointsArr[ii][1]) //相同斜率下，相同y坐标的数量
      } else {
        map.set(res, pointsArr[ii][1] + pointsArr[i][1]) //重复坐标数
      }
    }
    map.forEach((value, key) => {
      result = result > value ? result : value
    })
  }
  return result
}

console.log(
  maxPoints([
    [0, 0],
    [94911151, 94911150],
    [94911152, 94911151],
  ])
)

/* 示例 2：
输入：points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
输出：4
 

提示：

1 <= points.length <= 300
points[i].length == 2
-104 <= xi, yi <= 104
points 中的所有点 互不相同

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-points-on-a-line
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
