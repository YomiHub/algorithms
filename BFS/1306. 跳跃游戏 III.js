//这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。
// 请你判断自己是否能够跳到对应元素值为 0 的 任一 下标处。
// 注意，不管是什么情况下，你都无法跳到数组之外。
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

 var canReach = function(arr, start) {
  if(arr[start]==0) return true;

  let len = arr.length;
  let queue = [start];
  let visited = {};
  visited[start] = true;

  while(queue.length){
    let index = queue.shift();
    if(index+arr[index]<len&&!visited[index+arr[index]]){
      //合法下标且没有访问过的结点
      if(arr[index+arr[index]]==0){
        return true;
      }
      queue.push(index+arr[index]);
      visited[index+arr[index]] = true;
    }

    if(index-arr[index]>=0&&!visited[index-arr[index]]){
     //合法下标且没有访问过的结点
     if(arr[index-arr[index]]==0){
       return true;
     }
     queue.push(index-arr[index]);
     visited[index-arr[index]] = true;
   }
  }
  return false;
};


//DFS（不推荐）
var canReach = function (arr, start) {
  let dfs = (arr, len, index, visited) => {
    if (this.res) return //已经找到
    if (index >= len || index < 0 || visited[index]) return

    let item = arr[index]
    visited[index] = true
    //跳到值为0的地方
    if (item == 0) {
      this.res = true
      return
    }
    dfs(arr, len, index + item, visited)
    dfs(arr, len, index - item, visited)
  }
  
  let len = arr.length
  let visited = {}
  this.res = false
  dfs(arr, len, start, visited)
  return this.res;
}
/* 
示例 2：

输入：arr = [4,2,3,0,3,1,2], start = 0
输出：true 
解释：
到达值为 0 的下标 3 有以下可能方案： 
下标 0 -> 下标 4 -> 下标 1 -> 下标 3

示例 3：
输入：arr = [3,0,2,1,2], start = 2
输出：false
解释：无法到达值为 0 的下标 1 处。 
 

提示：

1 <= arr.length <= 5 * 10^4
0 <= arr[i] < arr.length
0 <= start < arr.length

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */