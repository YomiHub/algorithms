// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。(对称字符串)

//【方法1.0】进行一次遍历保留字母和数字，然后翻转字符串，得到逆序序列，如果和原序列相同则是回文串
// str.split('').reverse().join(''); 


//【方法1.1】同样保留字母和数字后，再用左右指针指向字符串两侧，然后将指针相向移动并判断字符是否相同，当两指针相遇则为回文

//执行用时：80 ms, 在所有 JavaScript 提交中击败了81.24%的用户
//内存消耗：40.3 MB, 在所有 JavaScript 提交中击败了65.68%的用户

var isPalindrome = function (s) {
  if (s == null) return true
  var reg = /[\W\_]/g
  str = s.toLowerCase().replace(reg, "").split("")
  //let str = s.toLocaleLowerCase().match(/[a-z0-9]+/g)
  let l = 0,
    r = str.length - 1
  while (l < r) {
    if (str[l] != str[r]) {
      return false
    }
    l++
    r--
  }
  return true
}

//【方法2.0】直接在原字符串 ss 上使用双指针。每次将指针移到下一个字母字符或数字字符，再判断这两个指针指向的字符是否相同。
// 时间复杂度：O(|s|)，其中 |s|∣s∣ 是字符串 ss 的长度；空间复杂度：O(1)。

//执行用时：80 ms, 在所有 JavaScript 提交中击败了81.24%的用户
//内存消耗：40.2 MB, 在所有 JavaScript 提交中击败了69.74%的用户
var isPalindrome = function (s) {
  let reg = /[0-9a-zA-Z]$/
  let i = 0,
    j = s.length - 1
  while (i < j) {
    while (i < j && !reg.test(s[i])) {
      ++i
    }

    while (i < j && !reg.test(s[j])) {
      --j
    }
    if (i < j) {
      if (s[i].toUpperCase() != s[j].toUpperCase()) {
        return false
      }
      ++i
      --j
    }
  }

  return true
}

var res = isPalindrome("A man, a plan, a canal: Panama")
console.log(res)

/* 
示例 1:
输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串

示例 2:
输入: "race a car"
输出: false
解释："raceacar" 不是回文串
 

提示：
1 <= s.length <= 2 * 105
字符串 s 由 ASCII 字符组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
