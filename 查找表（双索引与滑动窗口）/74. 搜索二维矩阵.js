//编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

//每行中的整数从左到右按升序排列。
//每行的第一个整数大于前一行的最后一个整数。
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//二分法
var searchMatrix = function(matrix, target) {
  let rowIndex = binarySearchLine(matrix,target);
  if(rowIndex<0){
    return false; //没有找到行
  }
  return binarySearchColumn(matrix[rowIndex],target);
}

// 二分查找到在第几行
function binarySearchLine(arr,target){
  let low = -1, high = arr.length-1;
  let mid;
  while(low<high){
    mid = Math.floor((low+high+1)/2);
    if(arr[mid][0]<=target){
      low = mid;
    }else{
      high = mid-1;
    }
  }
  return low;
}

//在行中查找所在的列
function binarySearchColumn(arr,target){
 let low = 0,high = arr.length-1;
 let mid;
 while(low<=high){
   mid = Math.floor((low+high)/2);

   if(arr[mid]==target){
     return true;
   }else if(arr[mid]<target){
     low = mid+1;
   }else{
     high = mid-1;
   }
 }
 return false;
}

//贪心算法
var searchMatrix = function(matrix, target) {
  let rowLine = matrix.length-1;
  let columnLine = matrix[0].length-1;
  let i = j = 0;
  while(true){
    if(matrix[i][j]==target){
      return true;
    }else if(i<rowLine&&matrix[i+1][j]<=target){
      ++i;  //查找行
    }else if(j<columnLine&&matrix[i][j+1]<=target){
      ++j;  //在行中查找列
    }else {
      return false;
    }
  }
}

// 害，相比之下我这没有美感的答卷：
var searchMatrix = function(matrix, target) {
   let lineLen = matrix.length;
   let i = 0;  //行
   let j = 0;
   let hasLine = false;

   while(i<lineLen){
    if(i<0||j>matrix[i].length) return false;

     let item = matrix[i][j];
     if(item==target){
       return true;
     }else if(item<target||hasLine){
       if(hasLine){
         ++j;  //找到行之后，向右查询列
       }else{
         if(i+1>=lineLen){
           //最后一行直接向右找
           ++j;
           hasLine = true;
         }else{
           ++i; //向下查找行 
         }
       }
     }else{
       --i;
       ++j;
       hasLine = true;
     }
   }
   return false;
}; 

let matrix = [[1]], target = 0;
console.log(searchMatrix(matrix, target))
/*
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false


提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-a-2d-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */