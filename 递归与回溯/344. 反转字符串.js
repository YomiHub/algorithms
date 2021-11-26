//-----------------------------------------------------------------
//反转字符串
//编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
//不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

//【解法一】
var reverseString = function (s) {
  printArr(0, s)
}

function printArr(index, s) {
  if (s == null || index > s.length - 2) {
    console.log(s)
    return
  }

  s.splice(index, 0, s.splice(s.length - 1, 1).toString())
  return printArr(++index, s)
}

reverseString(s)

/* 作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/problems/reverse-string/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */
