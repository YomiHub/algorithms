// 给你两个版本号 version1 和 version2 ，请你比较它们。

// 版本号由一个或多个修订号组成，各修订号由一个 '.' 连接。每个修订号由 多位数字 组成，可能包含 前导零 。每个版本号至少包含一个字符。修订号从左到右编号，下标从 0 开始，最左边的修订号下标为 0 ，下一个修订号下标为 1 ，以此类推。例如，2.5.33 和 0.1 都是有效的版本号。

// 比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较 忽略任何前导零后的整数值 。也就是说，修订号 1 和修订号 001 相等 。如果版本号没有指定某个下标处的修订号，则该修订号视为 0 。例如，版本 1.0 小于版本 1.1 ，因为它们下标为 0 的修订号相同，而下标为 1 的修订号分别为 0 和 1 ，0 < 1 。

// 返回规则如下：

// 如果 version1 > version2 返回 1，
// 如果 version1 < version2 返回 -1，
// 除此之外返回 0。
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
//双指针比较
var compareVersion = function(version1, version2) {
  const n = version1.length, m = version2.length;
  let i = 0, j = 0;
  while (i < n || j < m) {
      let x = 0;
      for (; i < n && version1[i] !== '.'; ++i) {
          x = x * 10 + version1[i].charCodeAt() - '0'.charCodeAt();
      }
      ++i; // 跳过点号
      let y = 0;
      for (; j < m && version2.charAt(j) !== '.'; ++j) {
          y = y * 10 + version2[j].charCodeAt() - '0'.charCodeAt();
      }
      ++j; // 跳过点号
      if (x !== y) {
          return x > y ? 1 : -1;
      }
  }
  return 0;
};

//切割字符串，逐个比较
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".")
  const v2 = version2.split(".")
  for (let i = 0; i < v1.length || i < v2.length; ++i) {
    let x = 0,
      y = 0
    if (i < v1.length) {
      x = parseInt(v1[i]);//除去前导0
    }
    if (i < v2.length) {
      y = parseInt(v2[i])
    }
    if (x > y) {
      return 1
    }
    if (x < y) {
      return -1
    }
  }
  return 0
}

//我的不优雅解法：
var compareVersion = function (version1, version2) {
  let arr1 = version1.split(".")
  let arr2 = version2.split(".")
  let i = 0
  let j = 0
  while (i < arr1.length || j < arr2.length) {
    if (!arr1[i] && arr2[j] && arr2[j] != 0) {
      return -1
    }

    if (!arr2[j] && arr1[i] && arr1[i] != 0) {
      return 1
    }

    let sub = parseInt(arr1[i] - parseInt(arr2[j]))
    if (sub < 0) {
      return -1
    }
    if (sub > 0) {
      return 1
    }
    i++
    j++
  }
  return 0
}

console.log(compareVersion("1.0", "1.0.0"))

/* 
示例 2：
输入：version1 = "1.0", version2 = "1.0.0"
输出：0
解释：version1 没有指定下标为 2 的修订号，即视为 "0"
示例 3：

输入：version1 = "0.1", version2 = "1.1"
输出：-1
解释：version1 中下标为 0 的修订号是 "0"，version2 中下标为 0 的修订号是 "1" 。0 < 1，所以 version1 < version2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/compare-version-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
