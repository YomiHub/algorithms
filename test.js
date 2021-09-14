/*
 * @Date: 2021-01-04 15:37:04
 * @LastEditors: Yomi
 * @LastEditTime: 2021-09-14 18:14:58
 */

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//堆排
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
  return sortArr[k - 1];
};

const array = [1, 2, 5, 3, 2, 4, 6, 8, 5, 9];
console.log("原始array:", array);
const newArr = heapSort(array);
console.log("newArr:", newArr);
