// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
// 算法的时间复杂度应该为 O(log (m+n)) 。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// O(m+n) 复杂度的解法：归并数组
// 执行用时： 220 ms, 在所有 JavaScript 提交中击败了8.31% 的用户
var swap = function(arr1,i,arr2,j){
  let temp = arr1[i];
  arr1[i] = arr2[j];
  arr2[j] = temp;
}
var findMedianSortedArrays = function(nums1, nums2) {
   let m = nums1.length-1, n = nums2.length-1;
   let len = m+n+2;
   
   let index = m+n+1;
   while(n>=0){
     while(m>=0&&nums1[m]>nums2[n]){
       // 找到最大值
       console.log(index)
       swap(nums1,index,nums1,m)
       index--;
       m--;
     }
     swap(nums1,index,nums2,n)
     index--;
     n--;
   }

   let mid = len/2;
   if(len%2===0){
     //偶数取中间两个
     return (nums1[mid]+nums1[mid-1])/2;
   }else{
     return nums1[Math.floor(mid)];
   }
};

// 维护两个指针，找到中位数下标和·······未完待续
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length, n = nums2.length;

};

var nums1 = [1, 3, 4]
var nums2 = [6, 7, 8, 9]
console.log(findMedianSortedArrays(nums1,nums2))

/* 
示例 2：

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

提示：

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
