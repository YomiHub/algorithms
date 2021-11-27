// 计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

// 请实现 KthLargest 类：

// KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
// int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。

/**
 * @param {number} k
 * @param {number[]} nums
 */
// 优先队列（size为K的小根堆,优先队列的队头为队列中最小的元素，也就是第 kk 大的元素。）
// ---------头大，有空再补补


//数组存储前K大的数
var KthLargest = function(k, nums) {
  nums.sort((a,b)=>{return b-a});  //从大到小

  this.k = k;
  if(nums.length<=k){
    this.nums = nums;
  }else{
    this.nums = nums.slice(0,k);
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
//检查新增的元素是否为前K大
KthLargest.prototype.add = function(val) {
  if(this.nums.length<this.k){
    this.nums.push(val);
  }else{
    if(this.nums[this.k-1]>val){
      return this.nums[this.k-1];
    }else{
      this.nums[this.k-1] = val;
    }
  }
  this.nums.sort((a,b)=>{return b-a});

  return this.nums[this.k-1]; //排序后返回第K大的数
};

let kNum = new KthLargest(3,[4,5,8,2])
console.log(kNum.add(3));
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
/*
输入：
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
输出：
[null, 4, 5, 5, 8, 8]

解释：
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-largest-element-in-a-stream
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */