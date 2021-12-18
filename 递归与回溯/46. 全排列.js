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