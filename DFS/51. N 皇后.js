// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
/**
 * @param {number} n
 * @return {string[][]}
 */
// 回溯
var solveNQueens = function(n) {
  let dfs = (n,row)=>{
    if(row==n){ //每行最多放一个皇后，放到最后一行结束
      const stringBorder = this.border.slice();
      for(let i = 0; i<n;++i){
        stringBorder[i] = stringBorder[i].join(""); //记录每一行的数组转为字符串
      }
      this.result.push(stringBorder)
      return;
    }

    for(let col = 0; col < n; ++col){
      //同行、同列、对角线的位置（i+j、i-j）
      if(this.cols.has(col)||this.pie.has(row+col)||this.na.has(row-col)){
        continue;
      }

      //放下皇后位之后，要将攻击位记录
      this.border[row][col] = "Q";
      this.cols.add(col);
      this.pie.add(row+col);
      this.na.add(row-col);

      
      dfs(n,row+1); //寻找下一行

      //执行完递归后将数组归位（回溯）
      this.border[row][col] = ".";
      this.cols.delete(col);
      this.pie.delete(row+col);
      this.na.delete(row-col);
    }
  }

  if(n<1) return [];
  this.border = new Array(n);
  for(let i = 0; i<n; ++i){
    this.border[i] = new Array(n).fill('.'); //生成border
  }

  this.cols = new Set();
  this.pie = new Set();
  this.na = new Set(); //记录不可放皇后的攻击位置
  this.result = [];  //皇后位置
  dfs(n,0);
  return this.result;
};

/* 
示例1：
输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。

1 <= n <= 9
皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/n-queens
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */