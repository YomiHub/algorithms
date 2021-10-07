//盛最多水的容器（两个数的x轴差值与它们最短Y的乘积）

//给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
//说明：你不能倾斜容器。

//贪心 双指针：相同情况时两边距离越远越好；区域受限于短边（时间复杂度：O(N)）
var maxArea = function (height) {
  let left = 0,right = height.length-1;
  let res = 0; 

  while(left<right){
    res = Math.max(res,Math.min(height[left],height[right])*(right-left));
    if(height[left]<height[right]){
      ++left;
    }else{
      --right;
    }
  }
  return res;
}

//暴力解法（超时弃用）：遍历左右边，找出所有面积，取最大（时间复杂度为O(n²)，空间复杂度为O(1)）
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxarea = 0;
  for(let i = 0;i<height.length;++i){
    for(let j = i+1; j<height.length;++j){
      maxarea = Math.max(maxarea,(Math.min(height[i],height[j]))*(j-i))
    }
  }
  return maxarea;
}


/*
 示例 3：
输入：height = [4,3,2,1,4]
输出：16

提示：
n == height.length
2 <= n <= 105
0 <= height[i] <= 104

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/all-about-array/x96n4v/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */