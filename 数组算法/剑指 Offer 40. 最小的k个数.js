//输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

// 快排思想太秀了吧，我这等凡夫俗子实在没想到
function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 快排思想，将小于等于pivot的放在左边，大于的放在右边
// 将小于等于最后一位的放在前面，最后交换i+1与最后一位
function partion(arr,start,end){
  let i = start-1;
  let pivot = arr[end];

  for(let j = start;j<end;j++){
    if(arr[j]<=pivot){
      i++;
      swap(arr,i,j)
    }
  }
  //最后交换中间和最后一个
  swap(arr,i+1,end);
  return i+1;
}

// 如果中间位置index==k表示已经找到前k小；
// 如果index<k表示要向右继续找k-index；
// 如果index>k表示要在左边区间找
function changeRange(arr,start,end,k){
  let pos = partion(arr,start,end);
  let num = pos-start+1;  //start到pos的总元素数
  if(k<num){
     changeRange(arr,start,pos-1,k)//向左边找
  }else if(k>num){
    changeRange(arr,pos+1,end,k-num); //只需要再找k-num
  }
}

var getLeastNumbers = function(arr, k) {
  if(k==0) return [];
  changeRange(arr,0,arr.length-1,k);
  return arr.slice(0,k);
};

//【选择排序取前K个】菜菜如我···
var getLeastNumbers = function (arr, k) {
  if (k == 0) return []
  let count = 0
  let len = arr.length
  for (let i = 0; i < len; ++i) {
    let min = i
    for (let j = min + 1; j < len; ++j) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    var temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
    count++
    if (count == k) {
      return arr.slice(0, k)
    }
  }
  return arr
}

// sort()后取前k个【这个会被面试官打吧~~但是sort太优秀了吧】
var getLeastNumbers = function (arr, k) {
  arr.sort((a, b) => {
    return a - b
  })
  return arr.slice(0,k)
}

/* 示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]
 

限制：

0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */