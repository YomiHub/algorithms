//-----------------------------------------------------------------
//生成「杨辉三角」的前 numRows 行
//在「杨辉三角」中，每个数是它左上方和右上方的数的和。
var generate = function (numRows) {
  console.log(createArr([], 0, numRows))
}

function createArr(arr, i, len) {
  if (i < len) {
    var temp = []
    for (let j = 0; j < i + 1; j++) {
      if (j == 0 || j == i) {
        temp.push(1)
      } else {
        temp.push(arr[i - 1][j - 1] + arr[i - 1][j])
      }
    }
    arr.push(temp)
    console.log(arr)
    return createArr(arr, ++i, len)
  } else {
    return arr[i - 1]
  }
}

generate(5)

/*
示例 1:

输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
示例 2:

输入: numRows = 1
输出: [[1]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pascals-triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
