// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */

//横向扫描，两两匹配取最长前缀
var longestCommonPrefix = function (strs) {
  let matchStr = function (str1, str2) {
    let len = Math.min(str1.length, str2.length)
    let i = 0
    while (i < len && str1[i] === str2[i]) {
      ++i
    }
    return str1.substring(0, i)
  }

  if (strs == null || strs.length == 0) return ""
  let prefix = strs[0]
  for (let i = 1; i < strs.length; ++i) {
    prefix = matchStr(prefix, strs[i])
    if (prefix.length == 0) {
      break
    }
  }
  return prefix
}

//纵向扫描：从前往后遍历所有字符串的每一列，比较相同列上的字符是否相同
//直到遍历的字符长为前缀index（字符结束）||或者字符与前缀index对应值不等时
var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length == 0) return ""
  let len = strs[0].length
  let count = strs.length

  for (let i = 0; i < len; ++i) {
    let word = strs[0][i]
    //每次遍历数组所有元素
    for (let j = 1; j < count; ++j) {
      if (strs[j].length == i || strs[j][i] != word) {
        return strs[0].substring(0, i)
      }
    }
  }
  return strs[0]
}

// 分治：两两求最长前缀
var longestCommonPrefix = function (strs) {
  //获取两个字符串的前缀
  let getPrefix = function (lcpLeft, lcpRight) {
    let minLen = Math.min(lcpLeft.length, lcpRight.length)
    for (let i = 0; i < minLen; ++i) {
      if (lcpLeft[i] != lcpRight[i]) {
        return lcpLeft.substring(0, i)
      }
    }
    return lcpLeft.substring(0, minLen)
  }

  //分治，将问题化简为求两个字符的最长前缀
  let getLongest = function (arr, start, end) {
    if (start == end) {
      return arr[start]
    } else {
      let mid = Math.floor((start + end) / 2)
      let lcpLeft = getLongest(arr, start, mid)
      let lcpRight = getLongest(arr, mid + 1, end)
      return getPrefix(lcpLeft, lcpRight)
    }
  }

  if (strs == null || strs.length == 0) {
    return ""
  } else {
    return getLongest(strs,0,strs.length-1)
  }
}

/* 
示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 

提示：

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
