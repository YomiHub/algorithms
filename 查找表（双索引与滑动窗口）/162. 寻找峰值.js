

// 峰值元素是指其值严格大于左右相邻值的元素。

// 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

// 你可以假设 nums[-1] = nums[n] = -∞ 。

// 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 优化版二分查找：O(log n)
// 因为题中规定相邻两个数不相等，则在数组中的元素两边要么递增、递减，要么就是波浪式有增有减，无论如何都会以该数为分割点形成峰值

//用于根据下标获取对应数，方便处理边界情况
var getNum = (nums,index)=>{
  if(index === -1||index === nums.length){
    return [0,0]; //越界无值
  }
  retrun [1,nums[index]];
}

//比较两个的值确定index1是否为峰值
var compare = (nums,index1,index2)=>{
  let num1 = getNum(nums,index1);
  let num2 = getNum(nums,index2);
  if(num1[0]!=num2[0]){
    //其中一个越界
    return num1[0]>num2[0]?1:-1; //index1有值，index2越界，index1才符合峰值
  }
  if(num1[1] === num2[1]){
    return 0;  
  }
  return num1[1]>num2[1]?1:-1;
}

var findPeakElement = function(nums) {
  let len = nums.length;
  let left = 0, right = len-1, res = -1;
  while(left<=right){
    let mid = Math.floor((left+right)/2);
    if(compare(nums,mid-1,mid)<0&&compare(nums,mid,mid+1)>0){
      res = mid;
      break;
    }

    //找递增方向
    if(compare(nums,mid,mid+1)<0){
      left = mid+1;
    }else{
      right = mid-1;
    }
  }
  return res;
}


// 我的暴解 O(n)
var findPeakElement = function(nums) {
  let len = nums.length;
  if(len<=1){return 0};
  for(let i = 0; i<len; ++i){
    if((i==0||nums[i-1]<nums[i])&&(i==len-1||nums[i]>nums[i+1])){
      return i;
    }
  }
  return -1;
};

/* 示例 2：

输入：nums = [1,2,1,3,5,6,4]
输出：1 或 5 
解释：你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
 

提示：
1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
对于所有有效的 i 都有 nums[i] != nums[i + 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-peak-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */