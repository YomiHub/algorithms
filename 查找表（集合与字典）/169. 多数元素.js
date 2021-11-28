// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
//方法一：双循环，一趟枚举所有的元素；二趟找到最大值（题示：一定存在，则找出现次数最多即可）

//sort排序之后，计数同一个数出现的次数，复杂度O(NlogN)
var majorityElement = function(nums) {
  nums.sort((a,b)=>a-b)
  return nums[parseInt(nums.length/2)]
}

//存储元素出现次数 复杂度O(N)
 var majorityElement = function(nums) {
  let half = nums.length / 2
  let obj = {}
  for(let num of nums){
     obj[num] = (obj[num] || 0) + 1
     if(obj[num] > half) return num
  }
};

//出现相同元素则计数加1，不同则减1，最终剩余的肯定是最大的出现次数（用栈pop和push原理一致）
//作者：shetia
var majorityElement = function(nums){
  let res = 0;
  let count = 0;
  for(let num of nums){
    if(count===0) res = num; //初始化新的一个元素
    count+= res===num?1:-1; //是都和上一个遍历元素相同
  }
  return res;
}

//分治：分成子块计算出现的次数，复杂度O(NlogN)
//作者：zxhnext
var majorityElement = function(nums) {
  function majorityElementRec(nums, lo, hi) {
      if (lo === hi) {
          return nums[lo];
      }

      const mid = Math.floor((hi - lo) / 2) + lo;
      const left = majorityElementRec(nums, lo, mid);
      const right = majorityElementRec(nums, mid + 1, hi);

      if (left === right) {
          return left;
      }

      const leftCount = countInRange(nums, left, lo, hi);
      const rightCount = countInRange(nums, right, lo, hi);

      return leftCount > rightCount ? left : right;
  }

  function countInRange (nums, num, lo, hi) {
      let count = 0;
      for (let i = lo; i <= hi; i++) {
          if (nums[i] == num) {
              count++;
          }
      }
      return count;
  }

  return majorityElementRec(nums, 0, nums.length - 1);
};




console.log(majorityElement([1]))

/* 
示例 2：
输入：[2,2,1,1,1,2,2]
输出：2
 

进阶：
尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */