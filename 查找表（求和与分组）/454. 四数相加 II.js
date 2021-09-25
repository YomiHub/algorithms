//-----------------------------------------------------------------
//四数相加
//给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。

//为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -2^28 到 2^28 - 1 之间，最终结果不会超过 2^31 - 1

//执行用时 :144 ms, 在所有 javascript 提交中击败了81.95%的用户
//内存消耗 :51.3 MB, 在所有 javascript 提交中击败了69.23%的用户
var fourSumCount = function (A, B, C, D) {
  let sumMap = new Map()
  let count = 0

  for (let a of A) {
    for (let b of B) {
      sumMap.set(a + b, sumMap.get(a + b) ? sumMap.get(a + b) + 1 : 1)
    }
  }

  for (let c of C) {
    for (let d of D) {
      let target = 0 - c - d
      if (sumMap.has(target)) {
        count += sumMap.get(target)
      }
    }
  }
  return count
}

//执行用时 :364 ms, 在所有 javascript 提交中击败了45.11%的用户
//内存消耗 :78.7 MB, 在所有 javascript 提交中击败了7.69%的用户

var fourSumCount = function (A, B, C, D) {
  const record = {}
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      if (record[C[i] + D[j]]) {
        record[C[i] + D[j]]++
      } else {
        record[C[i] + D[j]] = 1
      }
    }
  }
  let res = 0
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (record[0 - A[i] - B[j]]) {
        res += record[0 - A[i] - B[j]]
      }
    }
  }
  return res
}

/* 

输入:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

输出:
2

解释:
两个元组如下:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/4sum-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/
