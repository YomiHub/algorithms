// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// 经典的「拓扑排序」问题：
// 给定一个包含 n 个节点的有向图 G，我们给出它的节点编号的一种排列，如果满足：
// 对于图 G 中的任意一条有向边 (u,v)，u 在排列中都出现在 v 的前面。 那么称该排列是图 G 的「拓扑排序」。
// ** 如果图 G 中存在环（即图 G 不是「有向无环图」），那么图 G 不存在拓扑排序
// ** 如果图 G 是有向无环图，那么它的拓扑排序可能不止一种

// 1、深度优先遍历
// 对于一个节点 u，如果它的所有相邻节点都已经搜索完成，那么在搜索回溯到 u 的时候，u 本身也会变成一个已经搜索完成的节点。
var canFinish = function (numCourses, prerequisites) {
  const edges = new Array(numCourses).fill(0).map(() => new Array())
  const visited = new Array(numCourses).fill(0)
  let valid = true

  // 从顶点处，访问边
  const dfs = (point) => {
    visited[point] = 1
    for (let i = 0; i < edges[point].length; ++i) {
      const v = edges[point][i]
      if (visited[v] === 0) {
        dfs(v)
        if (!valid) {
          return
        }
      } else if (visited[v] === 1) {
        // B 已经是先修课 A 下的课程，检查 B 作为先修课时，是否还需要先修 A
        valid = false
        return
      }
    }
    visited[point] = 2
  }

  for (let i = 0; i < prerequisites.length; ++i) {
    const info = prerequisites[i]
    edges[info[1]].push(info[0]) // 先修课为顶点，放入对应的边
  }

  for (let j = 0; j < numCourses && valid; ++j) {
    if (visited[j] === 0) {
      dfs(j)
    }
  }
  return valid
}

// 2、广度优先遍历
var canFinish = function (numCourses, prerequisites) {
  const edges = new Array(numCourses).fill(0).map(() => new Array())
  const side = new Array(numCourses).fill(0)
  const queue = []

  for (let i = 0; i < prerequisites.length; ++i) {
    const info = prerequisites[i]
    edges[info[1]].push(info[0]) // 先修课为顶点，放入对应的边
    side[info[0]] = side[info[0]] + 1 // 统计可到达路径
  }

  for (let j = 0; j < numCourses; ++j) {
    if (side[j] === 0) {
      queue.push(j) // 非后修课，无依赖的顶点
    }
  }

  let visited = 0
  while (queue.length) {
    ++visited
    const point = queue.shift()
    for (let i = 0; i < edges[point].length; ++i) {
      const v = edges[point][i]
      side[v] = side[v] - 1
      if (side[v] === 0) {
        queue.push(v) // 不再是其它课程的后修课
      }
    }
  }
  return visited == numCourses
}

const testArr = [[1, 0]]
console.log(canFinish(2, testArr))

/* 示例 1：

输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
示例 2：

输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 

提示：

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
prerequisites[i] 中的所有课程对 互不相同


作者：力扣官方题解
链接：https://leetcode.cn/problems/course-schedule/solutions/359392/ke-cheng-biao-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
