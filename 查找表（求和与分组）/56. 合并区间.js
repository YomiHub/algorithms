//以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 官解：【排序后和相邻元素比较是否合并】
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals
  let res = []

  //递增排序区间
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  for(let arr of intervals){
    let prevIndex = res.length-1;
    if(res.length==0||res[prevIndex][1]<arr[0]){
      //没有元素或者和上一个不重合
      res.push(arr);
    }else{
      // 按x排序，所以替换y即可
      res[prevIndex][1] = Math.max(res[prevIndex][1],arr[1])
    }
  }
  return res;
}

//排序后根据y大小冒泡查找可以合并的区间
var merge = function(intervals) { 
  intervals = intervals.sort((a,b)=> a[0] - b[0]);
  let i = 0;
  let max;
  let target = [];
  while(i<intervals.length) {
      let j = i + 1;
      max = intervals[i][1];
      //待插入区间的y要大于比较的x
      while(intervals[j] && max>=intervals[j][0] && j < intervals.length) {
          max = Math.max(max, intervals[j][1]);
          j++;
      }
      target.push([intervals[i][0], max]);
      i = j;  //跳到已经合并的index
  }
  return target;
};

// 自己的辣鸡暴力解法（没有排序直接合并）
function needMerge(arr1, arr2) {
  let [x1, y1] = arr1
  let [x2, y2] = arr2
  if ((x1 <= y2 && y2 <= y1) || (x2 <= y1 && y1 <= y2)) {
    //有区间重叠
    return [Math.min(x1, x2), Math.max(y1, y2)]
  } else {
    return false
  }
}
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals
  let res = []

  while (intervals.length) {
    let insert = intervals.splice(0, 1)[0] //无序的情况下，即将插入的区间要和未未插入的任意区间比较是否合并
    let i = intervals.length - 1
    while (i >= 0) {
      //插入的区域和剩余区域合并
      let item = needMerge(insert, intervals[i])
      if (item) {
        intervals.splice(i, 1)
        insert = item
      }
      --i
    }

    //已合并过的区间也需要比较
    if (res.length) {
      let j = res.length - 1
      while (j >= 0) {
        let item = needMerge(insert, res[j])
        if (item) {
          res.splice(j, 1)
          insert = item
        }
        --j
      }
    }
    res.push(insert)
  }
  return res
}

console.log(
  merge([
    [4, 5],
    [1, 4],
    [0, 1],
  ])
)
/* 示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 

提示：

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-intervals
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
