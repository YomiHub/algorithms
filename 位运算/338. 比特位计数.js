// 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。

/**
 * @param {number} n
 * @return {number[]}
 */
// x&(x-1)去掉低位1的特性，while遍历每一个数
var countBits = function (n) {
  const bits = new Array(n + 1).fill(0) //n+1是因为存了0
  for (let i = 0; i <= n; ++i) {
    bits[i] = countOnes(i)
  }
  return bits
}

const countOnes = (x) => {
  let count = 0
  while (x > 0) {
    x = x & (x - 1)
    count++
  }
  return count
}

//动态规划（最低有效位）
var countBits = function (n) {
  const bits = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    //对于正整数 xx，将其二进制表示右移一位，等价于将其二进制表示的最低位去掉，得到的数是 x/2
    bits[i] = bits[i >> 1] + (i & 1)
  }
  return bits
}

// 动态规划（最低设置位）：由前继结点的计算值+1得到后继结点的值
var countBits = function (n) {
  let count = [0] //0 是0个1
  for (let i = 1; i <= n; ++i) {
    count[i] = count[i & (i - 1)] + 1 //i&(i-1)去除最低位的1，所以一定小于i ,去掉了最低位的1要加回去
  }
  return count
}

/*
 输入：n = 5
输出：[0,1,1,2,1,2]
解释：
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
 

提示：

0 <= n <= 105

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/counting-bits
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
