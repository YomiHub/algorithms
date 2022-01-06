//给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function (nums) {
  let len = nums.length
  if(len<=1){ return [nums]};

  let visited = new Array(len).fill(0);
  let res = [];
  let dfs = (arr,nowLen)=>{
    if(nowLen === len){
      res.push(arr);
    }

    for(let i = 0; i<len; ++i){
      if(visited[i]){
        continue;
      }
      visited[i] = 1;
      dfs(arr.concat(nums[i]),nowLen+1) //每次放一个元素，都可以与剩余元素全排
      visited[i] = 0; //归位
    }
  }
  dfs([],0);
  return res;
}

console.log(permute([1,2,3]))


// 数组指定元素个数的排列
// 输入：[1, 2, 3]  2
// 输出：[[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
function Permutations(arr, size) {
  var origin = [];
  var res = []
  function getArrange(arr, count, ret) {
    if (count === 1) {
      for (var i = 0; i < arr.length; i++) {
        var tmp = ret.slice();
        tmp.push(arr[i]);//剩余的数依次插入该数的组合
        res.push(tmp);
      }
    } else {
      count -= 1;
      for (var i = 0; i < arr.length; i++) {
        var tmp = ret.slice();
        var newTarget = arr.slice();
        tmp.push(arr[i]);  //从数组中取出一个数
        newTarget.splice(i, 1);
        getArrange(newTarget, count, tmp);
      }
    }
  }
  getArrange(arr, size, origin);
  return res;
}
console.log(JSON.stringify(Permutations([1, 2, 3], 2)));
//在node-v12.10.0环境下，直接[1,2,3].Array原型方法 调用会报错

//输出：[[1,2],[1,3],[2,1],[2,3],[3,1],[3,2]]