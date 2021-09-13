/*
 * @Author: Yomi
 * @Date: 2021-09-12 11:00:09
 * @LastEditors: Yomi
 * @LastEditTime: 2021-09-13 19:37:19
 */

//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
//必须在原数组上操作，不能拷贝额外的数组。
//尽量减少操作次数

/* //执行用时 :64 ms, 在所有 javascript 提交中击败了97.33%的用户
//内存消耗 :35.8 MB, 在所有 javascript 提交中击败了26.23%的用户
var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count++;
      i--;
    }
  }
  //填充count个0到末尾
  while (count-- != 0) {
    nums.push(0)
  }
};

//执行用时 :72 ms, 在所有 javascript 提交中击败了83.12%的用户
//内存消耗 :35.8 MB, 在所有 javascript 提交中击败了24.65%的用户
var moveZeroes = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1))  //nums.splice(nums.indexOf(0), 1); indexOf每次查找效率很低
      len--;
      i--;
    }
  }
  return nums;
};

//原地替换，而不消耗额外的空间，即空间复杂度要在O（1）。因此我们采用经典的双指针来解决，现实遍历数组将非0的元素依次存数组中。循环结束后看两个指针差多少，即补足0即可
// 1. 快指针寻找非0元素，慢指针填充元素。
// 2. 最后慢指针将剩余的位置全部填充为0


//执行用时 :80 ms, 在所有 javascript 提交中击败了47.43%的用户
//内存消耗 :36.2 MB, 在所有 javascript 提交中击败了7.04%的用户
var moveZeroes = function (nums) {
  var i = 0, j = 0;
  for (; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
  }
  for (; i < j; i++) {
    nums[i] = 0;
  }
  return nums;
};

//记录0的位置，遇到非0交换

//执行用时 :76 ms, 在所有 javascript 提交中击败了66.19%的用户
//内存消耗 :36.2 MB, 在所有 javascript 提交中击败了7.04%的用户
var moveZeroes = function (nums) {
  let n = 0,
    index = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] == 0) {
      n++;
      if (n == 1) {
        index = i;
      }
    } else if (n > 0) {
      nums[index] = nums[i];
      nums[i] = 0;
      index = index + 1;
    }
  }
}


console.log(moveZeroes([0, 1, 0, 3, 12])) */



/* 
//执行用时 :64 ms, 在所有 javascript 提交中击败了77.37%的用户
//内存消耗 :34.2 MB, 在所有 javascript 提交中击败了5.58%的用户
var removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

var removeElement = function (nums, val) {
  let len = nums.length;
  let i = -1;
  let j = 0;
  while (j <= len - 1) {
    if (nums[j] != val) {
      i += 1;
      nums[i] = nums[j];
    }
    j += 1;
  }
  return i + 1;
};

//执行用时 :72 ms, 在所有 javascript 提交中击败了37.31%的用户
//内存消耗 :34.4 MB, 在所有 javascript 提交中击败了5.04%的用户
var removeElement = function (nums, val) {
  var len = nums.length;
  for (var i = len; i--;) {
    if (nums[i] !== val) {
      nums.push(nums[i]);   //nums.unshift(nums[i]); i++; j++;
    }
  }
  return nums.splice(0, len).length;
};

//执行用时 :64 ms, 在所有 javascript 提交中击败了77.37%的用户
//内存消耗 :34.4 MB, 在所有 javascript 提交中击败了5.04%的用户
var removeElement = function (nums, val) {
  var lang = nums.length;
  for (var i = 0; i < lang; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};


console.log(removeElement(nums = [3, 2, 2, 3], val = 3));

//执行用时 :76 ms, 在所有 javascript 提交中击败了94.62%的用户
//内存消耗 :37.1 MB, 在所有 javascript 提交中击败了44.02%的用户
var removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};


//执行用时 :84 ms, 在所有 javascript 提交中击败了77.86%的用户
//内存消耗 :37.1 MB, 在所有 javascript 提交中击败了45.84%的用户
var removeDuplicates = function (nums) {
  let len = nums.length;
  if (len < 2) { return len; }
  let i = 0;
  let j = i + 1;
  while (j <= len - 1) {
    if (nums[j] != nums[i]) {
      if (i + 1 != j) nums[i + 1] = nums[j];
      i += 1;
    }
    j += 1;
  }
  return i + 1;
}


//执行用时 :80 ms, 在所有 javascript 提交中击败了74.45%的用户
//内存消耗 :36 MB, 在所有 javascript 提交中击败了34.28%的用户
var removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1] || (nums[i] == nums[i + 1] && nums[i] != nums[i + 2])) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

//执行用时 :64 ms, 在所有 javascript 提交中击败了99.76%的用户
//内存消耗 :36 MB, 在所有 javascript 提交中击败了35.71%的用户
var removeDuplicates = function (nums) {
  let len = nums.length;
  if (len <= 2) return len;
  let i = 1;
  let j = i - 1;
  let k = i + 1;

  while (k <= len - 1) {
    if (nums[i] != nums[k] || (nums[i] == nums[k] && nums[j] != nums[k])) {
      j = i;
      nums[i + 1] = nums[k];
      i += 1;
    }
    k++;
  }
  return i + 1;
};

//js 两边与中间相等, 则删除中间的
//执行用时 :84 ms, 在所有 javascript 提交中击败了53.28%的用户
//内存消耗 :36 MB, 在所有 javascript 提交中击败了34.28%的用户
var removeDuplicates = function (nums) {
  for (var i = 1; i < nums.length - 1; i++) {
    if (nums[i] == nums[i - 1] && nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
};


//执行用时 :76 ms, 在所有 javascript 提交中击败了90.51%的用户
//内存消耗 :36 MB, 在所有 javascript 提交中击败了31.43%的用户
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 2]) {
      nums.splice(i--, 1)
    }
  }
  return nums.length
}; */

//-------------------------------------------------------------------
//给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
//此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色

//执行用时 :76 ms, 在所有 javascript 提交中击败了20.38%的用户
//内存消耗 :34.3 MB, 在所有 javascript 提交中击败了7.82%的用户
var sortColors = function (nums) {
  let a = 0, b = 0, c = 0, index = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] == 0) {
      a++;
    } else if (nums[i] == 1) {
      b++;
    } else {
      c++;
    }
  }
  while (index < len) {
    if (index < a) {
      nums[index] = 0;
    } else if (index < a + b) {
      nums[index] = 1;
    } else {
      nums[index] = 2;
    }
    index++;
  }
  return nums;
};


//执行用时 :68 ms, 在所有 javascript 提交中击败了58.18%的用户
//内存消耗 :34.8 MB, 在所有 javascript 提交中击败了5.47%的用户
var sortColors = function (nums) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] != 1) {
      let temp = nums.splice(i, 1)[0];
      if (temp == 0) {
        nums.reverse();//nums.unshift(temp);  unshift效率低，需要移动数组元素需要额外消耗
        nums.push(temp);
        nums.reverse();
      } else if (temp == 2) {
        nums.push(temp);
        i--;
        len--;
      }
    }
  }
  return nums;
};


//三路快排思想，大于1的放右边，小于1的放左边，等于1的不动
//执行用时 :60 ms, 在所有 javascript 提交中击败了91.42%的用户
//内存消耗 :34.2 MB, 在所有 javascript 提交中击败了9.38%的用户
function swap (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var sortColors = function (nums) {
  var len = nums.length;
  var zeroFlag = 0;
  var twoFlag = len - 1;

  for (let i = 0; i <= twoFlag;) {  //注意是twoFlag
    if (nums[i] == 0) {
      swap(nums, i++, zeroFlag++);
    } else if (nums[i] == 2) {
      swap(nums, i, twoFlag--);
    } else {
      i++;
    }
  }
  return nums;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));




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