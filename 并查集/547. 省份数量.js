//有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。

// 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

// 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。

// 返回矩阵中 省份 的数量。

//[i,j]是否相连：解读就是同行或者同列元素是否相连
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
//并查集

class UnionFind {
  constructor(len) {
    this.count = len;
    this.parent = new Array(len)
    this.rank = new Array(len)

    for (let i = 0; i < len; ++i) {
      this.parent[i] = i
      this.rank[i] = 1
    }
  }

  findRoot(x) {
    while (this.parent[x] != x) {
      this.parent[x] = this.parent[this.parent[x]] //压缩路径
      x = this.parent[x]
    }
    return x
  }

  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);

    if(pRoot==qRoot) return; //根结点

    if(this.rank[pRoot]>this.rank[qRoot]){
      //将短的合并到长的
      this.parent[qRoot] = pRoot;
      this.rank[pRoot] += this.rank[qRoot];
    }else{
      this.parent[pRoot] = qRoot;
      this.rank[qRoot] += this.rank[pRoot];
    }

    this.count--; //合并后减少
  }

  getCount() {
    return this.count
  }
}

var findCircleNum = function (isConnected) {
  if(isConnected[0].length===0) return 0;

  let rowLen = isConnected.length;
  let colLen = isConnected[0].length;

  let num = Math.max(rowLen,colLen);//n*n的矩阵，所以任选其一即可
  let unionSet = new UnionFind(num);  //n个城市，所以初始集合数是n

  for(let i = 0; i<rowLen; ++i){
    for(let j = 0; j<colLen; ++j){
      //只需要将相连的合并
      if(isConnected[i][j]===1){
        let pRoot = unionSet.findRoot(i);
        let qRoot = unionSet.findRoot(j);

        unionSet.union(pRoot,qRoot);
      }
    }
  }

  return unionSet.getCount();
}
/*
 输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
输出：3
 

提示：

1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] 为 1 或 0
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-provinces
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
