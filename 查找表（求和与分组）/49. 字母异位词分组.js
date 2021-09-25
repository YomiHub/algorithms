//-----------------------------------------------------------------
//字母异位词分组
//给定一个字符串数组，将字母异位词组合在一起。
//字母异位词指字母相同，但排列不同的字符串。

//说明：所有输入均为小写字母且不考虑答案输出的顺序,所有源单词中的字母都恰好只用一次。

//执行用时 :156 ms, 在所有 javascript 提交中击败了62.75%的用户
//内存消耗 :45.7 MB, 在所有 javascript 提交中击败了55.43%的用户
var groupAnagrams = function (strs) {
  var tag = {}
  var res = []
  strs.forEach((item) => {
    let oderStr = item.split("").sort().join("")
    if (tag.hasOwnProperty(oderStr)) {
      tag[oderStr].push(item)
    } else {
      tag[oderStr] = [item]
    }
  })

  for (var key in tag) {
    res.push(tag[key])
  }

  return res
}

//map,排序后的字符串作为key
//执行用时 :144 ms, 在所有 javascript 提交中击败了83.75%的用户
//内存消耗 :47.1 MB, 在所有 javascript 提交中击败了29.34%的用户
const groupAnagrams = function (strs) {
  let sMap = new Map()
  for (let ss of strs) {
    let curr = ss
      .split("")
      .sort(function (a, b) {
        return a.charCodeAt(0) - b.charCodeAt(0)
      })
      .join("")
    let tmp = sMap.get(curr) || []
    tmp.push(ss)
    sMap.set(curr, tmp)
  }
  return Array.from(sMap.values()) //return [... sMap.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

/* 
示例 2:
输入: strs = [""]
输出: [[""]]

示例 3:
输入: strs = ["a"]
输出: [["a"]]
 

提示：
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
