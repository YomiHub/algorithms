/*
 * @Author: Yomi
 * @Date: 2021-09-12 10:43:52
 * @LastEditors: Yomi
 * @LastEditTime: 2021-09-12 10:43:52
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

console.log(shellSort(a));