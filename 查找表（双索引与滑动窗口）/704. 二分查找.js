// 二分查找:给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

function search(nums,target){
  let left = 0,right = nums.length-1;
  //left 和 right 相等的情况，也就是查找区间里只有一个值
  while(left<=right){
    let mid = Math.round((left+right)/2);

    if(nums[mid]===target){
      return mid;
    }else if(nums[mid]<target){
      left = mid+1;
    }else{
      right = mid -1;
    }
  }
  return -1;
}

/* 
提示：
你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */