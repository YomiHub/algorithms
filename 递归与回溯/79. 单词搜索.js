// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

//创建表示四个方向的二维数组，确定下一步可以走的方向，并进行递归，递归完毕后复原访问记录，并返回结果
 var exist = function (board, word) {
  if(board.length==0||board[0].length==0) return false;
  let rowLen = board.length
  let columnLen = board[0].length
  let nextDirection = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ] //相对自己所在坐标下一个可查找的方向：下、上、右、左
  let visited = new Array(rowLen)
    .fill(0)
    .map(() => new Array(columnLen).fill(false)) //相同的矩阵存储是否访问过结点

  let check = (i, j, str, len) => {
    if (board[i][j] != str[len]) {
      return false //当前字符与要匹配的不符合
    } else if (len == str.length - 1) {
      return true //匹配完整
    }

    visited[i][j] = true
    let isWord = false //字符是否匹配

    for (const [dx, dy] of nextDirection) {
      let newx = i + dx;
      let newy = j + dy;
      if(newx>=0&&newx<rowLen&&newy>=0&&newy<columnLen){
        if(!visited[newx][newy]){
          const flag = check(newx,newy,str,len+1);
          if(flag){
            isWord = true;
            break;  //在某个方向已经找到了
          }
        }
      }
    }
    visited[i][j] = false; //复原访问记录
    return isWord;
  }

  for(let i= 0; i<rowLen; ++i){
    for(let j = 0; j<columnLen; ++j){
      const flag = check(i,j,word,0);
      if(flag){
        return true;
      }
    }
  }
  return false;
}

/*
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
输出：false
 

提示：

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board 和 word 仅由大小写英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/word-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
