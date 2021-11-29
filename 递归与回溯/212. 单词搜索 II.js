// 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words，找出所有同时在二维网格和字典中出现的单词。

// 单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// 相比79这里要找出board里面所有符合的words，结合了字典树Trie的知识点
//【字典树+递归回溯解法】四个方向连通用一个二维数组设置index；创建与board相同的矩阵vsited来进行访问统计；字典树{}对要查找的word进行管理
var findWords = function (board, words) {
  if (board.length == 0 || board[0].length == 0) return []
  if (words.length == 0) return []

  let result = []

  //创建字典树，将words放入到字典树中
  let root = {}
  for (let word of words) {
    let node = root
    for (let char of word) {
      if (!node[char]) {
        node[char] = {}
      }
      node = node[char]
    }
    node["isEnd"] = true
  }

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

  let dfs = (board, i, j, str, root) => {
    str += board[i][j] //拼接字符
    root = root[board[i][j]] //新字典

    if (root["isEnd"]) {
      result.push(str) //已经查询到叶子，即为完整的字符
    }

    visited[i][j] = true

    for (const [dx, dy] of nextDirection) {
      let newx = i + dx
      let newy = j + dy
      if (newx >= 0 && newx < rowLen && newy >= 0 && newy < columnLen) {
        //没有访问过，且在字典树
        if (!visited[newx][newy] && root[board[newx][newy]]) {
          dfs(board, newx, newy, str, root)
        }
      }
    }
    visited[i][j] = false //复原访问记录
  }

  for (let i = 0; i < rowLen; ++i) {
    for (let j = 0; j < columnLen; ++j) {
      //先判断字符是否在字典树内
      if (root[board[i][j]]) {
        dfs(board, i, j, "", root)
      }
    }
  }

  return result
}

/* 
输入：board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
输出：["eat","oath"]

提示：
m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] 是一个小写英文字母
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] 由小写英文字母组成
words 中的所有字符串互不相同

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/word-search-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
