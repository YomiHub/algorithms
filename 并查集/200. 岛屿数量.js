//给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

/**
 * @param {character[][]} grid
 * @return {number}
 */

//染色思路，找到1就count++并把周边的1染色变成0

//DFS
var numIslands = function(grid) {
  if(grid[0].length==0) return 0;
  let rowLen = grid.length;
  let colLen = grid[0].length;
  let direction = [[-1,0],[1,0],[0,1],[0,-1]]; //左、右、下、上
  let res = 0;

  //将[i,j]四个方向的1都变成0
  let dfs = (x,y)=>{
    if(grid[x][y]!=1){ return;}
    grid[x][y] = 0;

    for(let [dx,dy] of direction){
      let x1 = x+dx;
      let y1 = y+dy;
      if(x1>=0&&x1<rowLen&&y1>=0&&y1<colLen){
        if(grid[x1][y1]==1){
          dfs(x1,y1);
        }
      }
    }
  }

  for(let i = 0; i<rowLen; ++i){
    for(let j = 0; j<colLen; ++j){
      if(grid[i][j]==1){
        res++;
        dfs(i,j);
      }
    }
  }
  return res;
};


// BFS (染色思路) 将遍历到1的位置，和它相邻的1都染成0
var numIslands = function (grid) {
  if (grid[0].length === 0) return 0

  let res = 0
  let rowLen = grid.length
  let colLen = grid[0].length
  let directions = [[-1,0],[1,0],[0,-1],[0,1]];

  for (let i = 0; i < rowLen; ++i) {
    for (let j = 0; j < colLen; ++j) {
      if (grid[i][j]==1) {
        //将1和相邻的1都变成0
        let queues = [[i,j]];
        res++;
        while(queues.length){
          let [x1,y1] = queues.shift(); //取出1
          if(grid[x1][y1]!=1){continue;};
          grid[x1][y1] = 0;

          for(let [dx,dy] of directions){
            let x2 = x1+dx, y2 = y1+dy;
            if(x2>=0&&x2<rowLen&&y2>=0&&y2<colLen){
              queues.push([x2,y2]);
            }
          }
        }
      }
    }
  }
  return res;
}

//并查集：初始化时将结点的root指向自己
class UnionFind{
  constructor(len){
    this.count = len; //并查集总数
    this.parent = new Array(len); //用于存root
    this.rank = new Array(len); //用于优化并查集深度

    for(let i = 0; i<len; ++i){
      this.parent[i] = i; //初始化时各自为营
      this.rank[i] = 1; //存储每个集合包含的结点数，表示深度
    }
  }

  //查找结点的root
  findRoot(x){
    //root是自己指向自己的结点  this.parent[-1] == undefined
    while(this.parent[x]!=x){
      // 进行路径压缩
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }

  //将p和q加入到一个集合（连通）
  union(p,q){
    //先找到p、q的root
    let pRoot = this.findRoot(p);  //p为-1，得到的是undefined
    let qRoot = this.findRoot(q);
    if(pRoot===qRoot) return;

    if(this.rank[pRoot]>this.rank[qRoot]){
      //将深度小的连接到深度大的p中
      this.parent[qRoot] = pRoot;
      this.rank[pRoot] += this.rank[qRoot];
    }else {
      //两者相等时rank++
      this.parent[pRoot] = qRoot;
      this.rank[qRoot] += this.rank[pRoot];
    }
    this.count--; //连通后集合数减少
  }

  //返回集合数
  getCount(){
    return this.count;
  }
}

var numIslands = function (grid) {
  if (grid[0].length === 0) return 0

  let rowLen = grid.length
  let colLen = grid[0].length
  let directions = [[1, 0], [0, 1]]  //因为是顺序遍历，向右向下扫描即可
  let dummy = -1; //用于union矩阵中的0，count--
  let unionSet = new UnionFind(rowLen*colLen); //创建并查集

  for (let i = 0; i < rowLen; ++i) {
    for (let j = 0; j < colLen; ++j) {
      if(grid[i][j]==='0'){
        unionSet.union(i*colLen+j,dummy);
      }else if(grid[i][j]==='1'){
        for(let [dx,dy] of directions){
          let x = i+dx, y = j+dy;
          //下标合法
          if(x>=rowLen||y>colLen) continue;
          if(grid[x][y]==='1'){
            unionSet.union(i*colLen+j,x*colLen+y);//合并
          }
        }
      }
    }
  }
  return unionSet.getCount();
}


let test = [["1","1","1"],["1","0","1"],["1","1","1"]];
console.log(numIslands(test))


let test = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
console.log(numIslands(test))

/* 示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] 的值为 '0' 或 '1'

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-islands
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */