/*
 * @Des：常用的排序
 * @Author: Yomi
 * @Date: 2021-09-12 10:43:52
 * @LastEditors: Yomi
 * @LastEditTime: 2021-09-16 22:18:40
 */
//----------------------------------------------
var a = [13, 56, 78, 3, 2, 6, 4, 7];

//冒泡排序
function bubbleSort(arr) {
  //反向循环，循环次数减少
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//-----------------------------------------------------------------
//选择排序 找出最小值进行交换
function selectSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var min = i;
    for (var j = min + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

//-----------------------------------------------------------------
//插入排序
function insertSort(arr) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    var insertNum = arr[i];  //暂存待插入记录，设置哨兵
    var j = i;
    while (j > 0 && insertNum < arr[j - 1]) {   //移动有序序列
      arr[j] = arr[j - 1];   //已排序的元素大于新元素，将该元素移到一下个位置
      j--;
    }

    arr[j] = insertNum;  //插入记录
  }

  return arr;
}

//-----------------------------------------------------------------
//希尔排序
function shellSort(arr) {
  var len = arr.length;
  var gap = Math.floor(len / 2);  //建议的初始间距是N / 2, 简单的把每趟排序分成两半.

  while (gap > 0) {   //增量不断变小，大于0就继续排序
    for (var i = gap; i < len; i++) {
      var j = i;
      var insertNum = arr[i];

      //插入排序的内层循环
      while (j > gap - 1 && insertNum < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = insertNum;
    }
    gap = Math.floor(gap / 2);  //重新计算间隔
  }

  return arr;
}

//-----------------------------------------------------------------
//堆排
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
  return sortArr[k - 1];
};

//-----------------------------------------------------------------
//归并排
//原文出自：https://juejin.cn/post/6844903895789993997#heading-1
const merge = function (left, right) {
  let result = [];

  while (left.length && right.length) {
    // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  console.log("结束", result);
  return result;
};

const mergeSort = function (arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }

  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};


//-----------------------------------------------------------------
//计数排序
function countingSort(array) {
  var len = array.length,
      B = [],
      C = [],
      min = max = array[0];

  //统计每个元素出现的次数
  for (var i = 0; i < len; i++) {
      min = min <= array[i] ? min : array[i];
      max = max >= array[i] ? max : array[i];
      C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
  }

  //通过前面的个数求和，统计元素个数，以方便后续得到当前元素所在的正确下标
  for (var j = min; j < max; j++) {
      C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
  }

  //
  for (var k = len - 1; k >= 0; k--) {
      B[C[array[k]] - 1] = array[k];  //最后一个正确下标=对应元素求和的个数-1
      C[array[k]]--;
  }
  console.timeEnd('计数排序耗时');
  return B;
}

const array = [1,2,5,3,2,4,6,8,5,9];
console.log("原始array:", array);
const newArr = countingSort(array);
console.log("newArr:", newArr);
console.log(shellSort(a));