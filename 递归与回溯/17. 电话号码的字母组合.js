// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同 a-z, 其中7和9对应4个字母）。注意 1 不对应任何字母。

/**
 * @param {string} digits
 * @return {string[]}
 */
var phoneMap = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
}

var letterCombinations = function (digits) {
  if (digits.length < 1) {
    return []
  }

  const combinations = []
  const backTrack = (digits, index, combination) => {
    if (index === digits.length) {
      combinations.push(combination)
    } else {
      const digit = digits[index]
      const letters = phoneMap[digit]
      const letterCount = letters.length

      for (let i = 0; i < letterCount; ++i) {
        backTrack(digits, index + 1, `${combination}${letters[i]}`)
      }
    }
  }

  backTrack(digits, 0, "")
  return combinations
}

console.log(letterCombinations("23"))

/* 
示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
示例 2：

输入：digits = ""
输出：[]

提示：
0 <= digits.length <= 4
digits[i] 是范围 ['2', '9'] 的一个数字。

作者：力扣官方题解
链接：https://leetcode.cn/problems/letter-combinations-of-a-phone-number/solutions/388738/dian-hua-hao-ma-de-zi-mu-zu-he-by-leetcode-solutio/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
