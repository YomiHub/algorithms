// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

//将Number转为String，然后将String转为Array，并且注意补齐较短的数组，将他们的长度标称一样
//再一一相加得到一个新数组，再将和组成的新数组转为数字
var addStrings = function (num1, num2) {
  let res = ""
  let flag = 0 //进位
  let len = Math.max(num1.length, num2.length)

  while (num1.length < len) {
    num1 = "0" + num1
  }

  while (num2.length < len) {
    num2 = "0" + num2
  }

  //从低位开始累加
  for (let i = len - 1; i >= 0; --i) {
    flag = Number(num1[i]) + Number(num2[i]) + flag
    res = (flag % 10) + res //字符串拼接
    flag = flag >= 10 ? 1 : 0 //是否进位
  }
  return flag == 1 ? "1" + res : res //注意检查最后是否还有进位
}

// 举一反三： 两个字符串相减
var subtractStrings = function (num1, num2) {
  let res = ""
  let borrow = 0 // 借位
  let len = Math.max(num1.length, num2.length)

  // 确保两个数字都有相同的长度
  while (num1.length < len) {
    num1 = "0" + num1
  }

  while (num2.length < len) {
    num2 = "0" + num2
  }

  // 从低位开始相减
  for (let i = len - 1; i >= 0; --i) {
    let digit1 = Number(num1[i])
    let digit2 = Number(num2[i]) + borrow // 加上借位

    if (digit1 < digit2) {
      digit1 += 10 // 借位
      borrow = 1 // 更新借位
    } else {
      borrow = 0 // 不需要借位
    }

    res = digit1 - digit2 + res // 字符串拼接
  }

  // 去掉前导零
  res = res.replace(/^0+/, "")

  // 如果结果为空，返回 "0"
  return res.length > 0 ? res : "0"
}

// 示例
const num1 = "123456789123456789123456789"
const num2 = "987654321987654321"
const difference = subtractStrings(num1, num2)
console.log(difference) // 输出相应的差值

//官解  ASCII码竖式计算
var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    add = 0
  const ans = []
  while (i >= 0 || j >= 0 || add != 0) {
    // 48 是字符 0 的ASCII码，也可以直接 -48
    const x = i >= 0 ? num1.charAt(i) - "0" : 0
    const y = j >= 0 ? num2.charAt(j) - "0" : 0
    const result = x + y + add
    ans.push(result % 10) //可以直接字符串拼接 res = '' + flag % 10 + res
    add = Math.floor(result / 10) //~~(result/10)  位运算向下取整
    i -= 1
    j -= 1
  }
  return ans.reverse().join("")
}

/* 
示例 3：
输入：num1 = "0", num2 = "0"
输出："0"
 

提示：
1 <= num1.length, num2.length <= 104
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
