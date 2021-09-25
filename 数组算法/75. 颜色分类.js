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

/* 示例 1：
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]

示例 4：
输入：nums = [1]
输出：[1]
 

提示：

n == nums.length
1 <= n <= 300
nums[i] 为 0、1 或 2
 

进阶：

你可以不使用代码库中的排序函数来解决这道题吗？
你能想出一个仅使用常数空间的一趟扫描算法吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-colors
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */