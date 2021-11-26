//-----------------------------------------------------------------
//第K个语法符号
//在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。 给定行数 N 和序数 K，返回第 N 行中第 K个字符。（K从1开始）
//字符串的长度可能有 10 亿左右，因为每一行的长度都是前一行的两倍

//执行用时 :76 ms, 在所有 javascript 提交中击败了22.99%的用户
//内存消耗 :34.1 MB, 在所有 javascript 提交中击败了20.00%的用户
var kthGrammar = function (N, K) {
  if (K === 1) {
    return 0
  }
  if (K === 2) {
    return 1
  }

  var parent =
    K % 2 == 0 ? kthGrammar(N - 1, K / 2) : kthGrammar(N - 1, (K + 1) / 2)

  if (parent === 0) {
    return K % 2 === 0 ? 1 : 0
  }
  return K % 2 === 0 ? 0 : 1
}
console.log(kthGrammar(2, 1))

//执行用时 :72 ms, 在所有 javascript 提交中击败了29.88%的用户
//内存消耗 :33.6 MB, 在所有 javascript 提交中击败了40.00%的用户
var kthGrammar = function (N, K) {
  if (N == 1) {
    return 0
  }
  return (~K & 1) ^ kthGrammar(N - 1, (K + 1) / 2)
}

/* 
输入: N = 4, K = 5
输出: 1

解释:
第一行: 0
第二行: 01
第三行: 0110
第四行: 01101001

注意：

N 的范围 [1, 30].
K 的范围 [1, 2^(N-1)].

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/k-th-symbol-in-grammar
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
