//-----------------------------------------------------------------
//判断一个数是不是“快乐数”:
//对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和
//然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1
//如果可以变为 1，那么这个数就是快乐数
//如果 n 是快乐数就返回 true ；不是，则返回 false 。

//关键：判断出现的数之前有没有出现过，出现过就会产生循环，就不是快乐数。

var isHappy = function (n) {
  var sum = 0
  var resSet = new Set()
  while (sum != 1) {
    sum = getSquare(getRemain(n))
    if (resSet.has(sum)) {
      return false
    }
    resSet.add(sum)
    n = sum
  }
  return true
}

//获取num每个位置的数字
function getRemain(num) {
  var arr = []
  var last = 0 //余数
  var divisor = 10 //除数
  if (num < 10) {
    arr.push(num)
    return arr
  }

  while (last != num) {
    last = num % divisor
    arr.push(Math.floor(last / (divisor / 10)))
    divisor *= 10
  }
  return arr
}

//求平方和
function getSquare(arr) {
  var sum = 0
  var result = arr.forEach((item) => {
    return (sum += item * item)
  })
  return sum
}

//判断出现的数之前有没有出现过，出现过就会产生循环，就不是快乐数。可以用集合 set 来记录之前出现的数字。

//执行用时 :76 ms, 在所有 javascript 提交中击败了66.78%的用户
//内存消耗 :34.6 MB, 在所有 javascript 提交中击败了87.73%的用户
var isHappy = function (n) {
  var resSet = new Set()
  while (true) {
    if (n == 1) {
      return true
    }
    var sum = 0
    while (n !== 0) {
      sum += (n % 10) * (n % 10)
      n = Math.floor(n / 10)
    }

    if (resSet.has(sum)) {
      return false
    }

    resSet.add(sum)
    n = sum
  }
}

//执行用时 :64 ms, 在所有 javascript 提交中击败了97.09%的用户
//内存消耗 :36.2 MB, 在所有 javascript 提交中击败了25.15%的用户
var isHappy = function (n) {
  var loopArr = []
  while (n !== 1) {
    var arr = []
    while (n !== 0) {
      arr.push(n % 10)
      n = Math.floor(n / 10)
    }
    n = arr.reduce((left, right) => left + right * right, 0)
    var isLoop = loopArr.some((item) => item == n)
    if (isLoop) {
      return false
    }
    loopArr.push(n)
  }
  return true
}

console.log(isHappy(19))

/* 示例 1：

输入：19
输出：true
解释：
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
示例 2：

输入：n = 2
输出：false
 

提示：

1 <= n <= 231 - 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/happy-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
