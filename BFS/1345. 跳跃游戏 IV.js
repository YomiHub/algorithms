// 给你一个整数数组 arr ，你一开始在数组的第一个元素处（下标为 0）。

// 每一步，你可以从下标 i 跳到下标：

// i + 1 满足：i + 1 < arr.length
// i - 1 满足：i - 1 >= 0
// j 满足：arr[i] == arr[j] 且 i != j
// 请你返回到达数组最后一个元素的下标处所需的 最少操作次数 。

// 注意：任何时候你都不能跳到数组外面。

/**
 * @param {number[]} arr
 * @return {number}
 */
// 超出时间限制解法：
// 相比1306的跳跃，需要增加的处理：去重超过两个连续重复数字（直接跳是最短路径）；遍历数据记录数字的下标位置
var minJumps = function (arr) {
  let len = arr.length
  if (len == 1) return 0

  //连续出现超过两个的去重
  let sameCount = 0
  let newArr = []
  for (let i = 0; i < len; i++) {
    if (i - 1 >= 0 && arr[i] == arr[i - 1]) {
      sameCount += 1
      if (sameCount >= 2) {
        continue
      } else {
        newArr.push(arr[i])
      }
    } else {
      newArr.push(arr[i])
      sameCount = 0
    }
  }

  let newLen = newArr.length; //可以直接覆盖len，不需要开辟新的存储空间 len = newArr.length;
  let valIndexMap = new Map(); //创建值到Index的映射，BFS是用index值进行查找比较

  for(let i = 0; i<newLen; ++i){
    if(!valIndexMap.has(newArr[i])){
      valIndexMap.set(newArr[i],[i]);
    }else{
      valIndexMap.get(newArr[i]).push(i);
    }
  }

  let visited = {};
  let count = 0; //记录步数
  let queue = [0]; 
  while(queue.length){
    count++;
    let queueLen = queue.length;
    //每次步数有三个方案，所以需要for循环遍历队列直至空
    for(let i = 0; i<queueLen; ++i){
      let index = queue.shift();

      //已经到最后一个元素
      if(index == newLen-1){
        return count-1;
      }

      let val = newArr[index];
      let prevIndex = index-1;
      let nextIndex = index+1;
      let sameIndexes = valIndexMap.get(val); 

      if(prevIndex >=0 && !visited[prevIndex])  queue.push(prevIndex)
      if(nextIndex < newLen && !visited[nextIndex]) queue.push(nextIndex);
      for(let sameIndex of sameIndexes){
        if(sameIndex !== index&&!visited[sameIndex]){
          queue.push(sameIndex);
        }
      }

      visited[index] = true;
    }
  }
  return newLen;  //循环中没有return找到最后一个元素的步数，则返回数组总长
}

console.log(minJumps([6,1,9]))

/* 
示例 3：

输入：arr = [7,6,9,6,9,6,9,7]
输出：1
解释：你可以直接从下标 0 处跳到下标 7 处，也就是数组的最后一个元素处。

示例 4：
输入：arr = [6,1,9]
输出：2
示例 5：

输入：arr = [11,22,7,7,7,7,7,7,7,22,13]
输出：3
 

提示：

1 <= arr.length <= 5 * 10^4
-10^8 <= arr[i] <= 10^8

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game-iv
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
