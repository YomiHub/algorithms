
//-----------------------------------------------------------------
//在未排序数组中，查找排序后第K个最大的元素（重复元素计算在内）

//冒泡排序
//执行用时：324 ms, 在所有 JavaScript 提交中击败了5.06%的用户
//内存消耗：38 MB, 在所有 JavaScript 提交中击败了99.47%的用户
function bubbleSort(nums){
  let len = nums.length;
  for (let i = 0;i<len;i++){
    for(let j=0; j<len-i; j++){
    
      if(nums[j]>nums[j+1]){
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
      }

    }
  }
  return nums[len-k];
}

var findKthLargest = function (nums, k) {
  return bubbleSort(nums,k);
};
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))

//快排
// 执行用时：108 ms, 在所有 JavaScript 提交中击败了38.17%的用户
// 内存消耗：40.8 MB, 在所有 JavaScript 提交中击败了15.33%的用户
function quickSort(nums, k) {
  if (nums.length < 2) return nums;

  var left = [],
    right = [],
    mid = nums.splice(Math.floor(nums.length / 2), 1);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > mid) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  if (left.length == k) {
    return quickSort(left, 1); //从大到小完整排序
  } else if (left.length > k) {
    return quickSort(left, k);
  } else {
    return left.concat(mid, quickSort(right, k - left.length - 1));
  }
}

var findKthLargest = function (nums, k) {
  var sortArr = quickSort(nums, k);
  return sortArr[k - 1];
  //return nums.sort((a, b) => b - a)[k - 1];
};
var testArr = [3, 2, 3, 1, 2, 4, 5, 5, 6];
//console.log(quickSort(testArr,2));
console.log(findKthLargest(testArr, 4));

//堆排序
//执行用时：88 ms, 在所有 JavaScript 提交中击败了54.34%的用户
//内存消耗：38.8 MB, 在所有 JavaScript 提交中击败了84.08%的用户
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapSort(arr) {
  //初始化大顶堆，得到第一个为最大元素，从第一个非叶子结点开始（性质：叶子结点总数n0是度为2的非叶子结点个数n2加一）
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

  // 排序，每一次 for 循环找出一个当前最大值，数组长度减一
  for (let i = arr.length - 1; i >= 0; i--) {
    // 根节点与最后一个节点交换
    swap(arr, 0, i);
    heapify(arr, 0, i); //从根节点开始调整，并且最后一个结点已经为当前最大值，不需要再参与比较
  }
  return arr;
}

// 维护堆的性质：将 i 结点以下的堆整理为大顶堆
// 具体实现的是：找到结点i 在包括结点i的堆中正确位置
function heapify(arr, i, len) {
  let temp = arr[i];
  // 从第一个非叶子结点开始，对每一个非叶子结点都执行 heapify 操作
  for (let j = 2 * i + 1; j < len; j = 2 * j + 1) {
    temp = arr[i]; // 当前父节点

    if (j + 1 < len && arr[j] < arr[j + 1]) {
      j++; //寻找最大子结点
    }

    if (temp < arr[j]) {
      swap(arr, i, j); // 如果父节点小于子节点:交换；否则跳出
      i = j;
    } else {
      break;
    }
  }
}

var findKthLargest = function (nums, k) {
  var sortArr = heapSort(nums);
  var len = sortArr.length;
  return sortArr[len - k]
};
const array = [1, 2, 5, 3, 2, 4, 6, 8, 5, 9];
console.log("原始array:", array);
const newArr = heapSort(array);
console.log("newArr:", newArr);



/* 示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
 

提示：

1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */