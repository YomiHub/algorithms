/*
 * @Author: Yomi
 * @Date: 2021-09-12 10:42:46
 * @LastEditors: Yomi
 * @LastEditTime: 2021-09-12 10:49:34
 */

//用邻接表存储图结构
function Grapha() {
  this.vertexes = []; //存储图的顶点
  this.adjList = new Dictionary();  //addjoin存储边

  //添加顶点
  Grapha.prototype.addVertex = function (v) {
    this.vertexes.push(v);
    this.adjList.set(v, []);   //用数组存储连接顶点的边
  }

  //添加边
  Grapha.prototype.addEdge = function (v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);   //注意要给两个顶点都添加，边是连接两个顶点的
  }

  //显示图的结构
  Grapha.prototype.toString = function () {
    var resultStr = "";
    for (var i = 0; i < this.vertexes.length; i++) {
      resultStr += this.vertexes[i] + "->";

      var adj = this.adjList.get(this.vertexes[i]);
      for (var j = 0; j < adj.length; j++) {
        resultStr += adj[j] + " ";
      }
      resultStr += "\n";
    }

    return resultStr;
  }

  //初始化顶点访问状态
  Grapha.prototype.initializeColor = function () {
    var colors = [];
    for (var i = 0; i < this.vertexes.length; i++) {
      colors[this.vertexes[i]] = "white";
    }
    return colors;
  }

  //广度优先遍历
  Grapha.prototype.bfs = function (v, handler) {
    var color = this.initializeColor();
    var queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      var qv = queue.dequeue();   //从队列中取出顶点
      var qAdj = this.adjList.get(qv);   //获取到qv的所有相邻结点
      color[qv] = "gray";   //标记为已经访问，但未探索

      for (var i = 0; i < qAdj.length; i++) {
        var a = qAdj[i];
        if (color[a] === "white") {
          queue.enqueue(a);
          color[a] = "gray";
        }
      }

      color[qv] = "black";   //将qv标记为探测完毕

      if (handler) {
        handler(qv);   //处理qv
      }
    }
  }

  //深度优先遍历
  Grapha.prototype.dfs = function (handler) {
    var color = this.initializeColor();

    for (var i = 0; i < this.vertexes.length; i++) {
      if (color[this.vertexes[i]] === "white") {
        this.dfsVisit(this.vertexes[i], color, handler);
      }
    }
  }

  //递归调用方法
  Grapha.prototype.dfsVisit = function (u, color, handler) {
    color[u] = "gray";
    if (handler) {
      handler(u);
    }

    var uAdj = this.adjList.get(u);
    for (var i = 0; i < uAdj.length; i++) {
      var w = uAdj[i];
      if (color[w] === "white") {
        this.dfsVisit(w, color, handler);
      }
    }

    color[u] = "black";
  }
}

//测试
/* var grapha = new Grapha();
var v = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

v.forEach((item) => {
  grapha.addVertex(item);
})

// 添加边
grapha.addEdge('A', 'B');
grapha.addEdge('A', 'C');
grapha.addEdge('A', 'D');
grapha.addEdge('C', 'D');
grapha.addEdge('C', 'G');
grapha.addEdge('D', 'G');
grapha.addEdge('D', 'H');
grapha.addEdge('B', 'E');
grapha.addEdge('B', 'F');
grapha.addEdge('E', 'I');


// 调用广度优先算法
var result = ""
grapha.dfs(function (v) {
  result += v + " "
})
console.log(result) // A B E I F C D G H  */

