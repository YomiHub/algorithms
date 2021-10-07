//-----------------------------------------------------------------
//给定一个已按照 非递减顺序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
//函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。
//你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

//【双指针法】
// 初始时两个指针分别指向第一个元素位置和最后一个元素的位置。每次计算两个指针指向的两个元素之和，并和目标值比较
// 如果两个元素之和等于目标值，则发现了唯一解。如果两个元素之和小于目标值，则将左侧指针右移一位。如果两个元素之和大于目标值，则将右侧指针左移一位。移动指针之后，重复上述操作，直到找到答案。
var twoSum = function(numbers, target) {
  let low = 0,high = numbers.length-1;
  while(low<high){
    let sum = numbers[low]+numbers[high];
    if(sum==target){
      return [low+1,high+1];
    }else if(sum<target){
      ++low;
    }else{
      --high;
    }
  }
  return [-1,-1];
}

 
//【二分搜索法】
// 遍历每个 nums[i]，在剩余数组中查找 target-nums[i] 的值，时间复杂度为 O(n log n)。
// 利用数组的有序性质，可以通过二分查找的方法寻找第二个数。为了避免重复寻找，在寻找第二个数时，只在第一个数的右侧寻找。
// 固定第一个数，第二数使用二分查找，O(nlogn)，其中 n 是数组的长度。需要遍历数组一次确定第一个数，时间复杂度是 O(n)，寻找第二个数使用二分查找，时间复杂度是 O(logn)，因此总时间复杂度是O(nlogn)。
var twoSum = function(numbers, target) {
  let len = numbers.length;
  /* if(len==2){
      return numbers[1]==target-numbers[0]?[1,2]:[];
  } */

  for(let i=0;i<len-1;++i){
      let low = i+1,high = len-1
      while(low<=high){
        let mid = Math.floor((high-low)/2)+low;
          if(numbers[mid]==target-numbers[i]){
            return [i+1,mid+1]
          }else if(numbers[mid]>target-numbers[i]){
            high = mid-1;
          }else{
            low = mid+1;
          }
      }
  }
  return [-1,-1];
};


/* 
示例 3：

输入：numbers = [-1,0], target = -1
输出：[1,2]

提示：
2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers 按 非递减顺序 排列
-1000 <= target <= 1000
仅存在一个有效答案

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

