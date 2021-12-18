/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
//两个字符串相加（只有我才能写出的如此不优雅的代码了吧，救命···）
var addStr = function (num1, num2) {
  let len1 = num1.length
  let len2 = num2.length
  let i = len1 - 1
  let j = len2 - 1
  let res = ""
  let add = 0
  while (i >= 0 || j >= 0) {
    let temp = 0
    if (i >= 0) {
      temp += Number(num1[i])
    }
    if (j >= 0) {
      temp += Number(num2[j])
    }

    temp += add
    res = (temp % 10) + res
    add = Math.floor(temp / 10) //进位
    i--
    j--
  }
  if (add != 0) {
    res = add + res
  }
  return res
}

//竖式计算
var multiply = function (num1, num2) {
  if (num1 == 0 || num2 == 0) return "0"
  let len1 = num1.length
  let len2 = num2.length
  let res = "0"
  for (let i = len1 - 1; i >= 0; --i) {
    let zero = new Array(len1 - i - 1).fill(0)
    let subOnce = "" //记一次尾数相乘的结果
    let add = 0
    for (let j = len2 - 1; j >= 0; --j) {
      let sub = Number(num1[i]) * Number(num2[j]) + add //注意是先+add，再取余计算
      subOnce = (sub % 10) + subOnce
      add = Math.floor(sub / 10) //进位
    }

    if (add != 0) subOnce = add + subOnce
    res = addStr(subOnce + zero.join(""), res) //补0后相加
  }
  return res
}

//官解：做乘法
//从右往左遍历乘数，将乘数的每一位与被乘数相乘得到对应的结果，再将每次得到的结果累加
var multiply = function (num1, num2) {
  if (num1 == 0 || num2 == 0) return "0"

  let len1 = num1.length
  let len2 = num2.length
  let dict = new Array(len1 + len2).fill(0) //乘积的最大长度为 m+n
  for (let i = len1 - 1; i >= 0; --i) {
    let x = num1[i] - "0"
    for (let j = len2 - 1; j >= 0; --j) {
      let y = num2[j]- "0"
      dict[i + j + 1] += x * y
    }
  }

  for (let i = len1 + len2 - 1; i > 0; --i) {
    dict[i - 1] += Math.floor(dict[i] / 10)
    dict[i] %= 10
  }

  let index = dict[0] == 0 ? 1 : 0; //如果最高位是 0 则舍弃最高位。
  let strArr = [];
  while(index<len1+len2){
    strArr.push(dict[index]);
    index++;
  }
  return strArr.join("")
}
console.log(multiply("123", "456"))

/* 示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/multiply-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */