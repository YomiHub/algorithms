function permutations(targets, num) {
  var origin = [];
  var arr = [];

  function arranges(targets, num, cur) {
    if (num === 1) {
      for (var i = 0; i < targets.length; i++) {
        var insert = cur.slice();
        insert.push(targets[i]);
        arr.push(insert);
      }
    } else {
      num -= 1;
      for (var i = 0; i < targets.length; i++) {
        var insert = cur.slice();
        var newTargets = targets.slice();
        insert.push(targets[i]);
        newTargets.splice(i, 1);
        arranges(newTargets, num, insert);
      }
    }
  }

  arranges(targets, num, origin);
  return arr;
}
// console.log(JSON.stringify(permutations([1, 2, 3], 2)));


//---------------------------------------------------------

function Stack() {
  this.items = [];

  Stack.prototype.push = function (ele) {
    this.items.push(ele);
  }

  Stack.prototype.pop = function () {
    return this.items.pop();
  }

  Stack.prototype.isEmpty = function () {
    return this.items.length == 0;
  }
}

function change(num) {
  var target = new Stack();
  var residue;
  var str = "";

  while (num > 0) {
    residue = num % 2;
    num = Math.floor(num / 2);
    target.push(residue);
  }

  while (!target.isEmpty()) {
    str = str + target.pop();
  }
  return str;
}
var source = 10;
// console.log(change(source));


//优先级队列--------------------------------------------
function Queue() {
  var items = []

  // 队列操作的方法
  // enter queue方法
  this.enqueue = function (element) {
    items.push(element)
  }

  // delete queue方法
  this.dequeue = function () {
    return items.shift()
  }

  // 查看前端的元素
  this.front = function () {
    return items[0]
  }

  // 查看队列是否为空
  this.isEmpty = function () {
    return items.length == 0
  }

  // 查看队列中元素的个数
  this.size = function () {
    return items.length
  }
}

//击鼓传花游戏：返回最后剩下的人所在原来队伍的位置
function playGame(arr, baseNum) {
  var team = new Queue();

  for (let i = 0; i < arr.length; i++) {
    team.enqueue(arr[i]);
  }

  while (team.size() > 1) {
    for (let j = 0; j < baseNum - 1; j++) {
      team.enqueue(team.dequeue());  //取出前面的num-1 个放在队列后面
    }

    team.dequeue();  //将第num个删除
  }

  var endName = team.dequeue();  //最后剩下的人
  return arr.indexOf(endName);  //最后剩下的人的位置
}

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var index = playGame(names, 7) // 数到8的人淘汰
// console.log(index);


//-------------------------------------------------
function LinkList() {
  function Node(ele) {
    this.ele = ele;
    this.next = null;
  }

  this.length = 0;
  this.head = null;

  //插入节点
  LinkList.prototype.append = function (ele) {
    var newNode = new Node(ele);

    if (this.head === null) {
      this.head = newNode;
    } else {
      var cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = newNode;
    }

    this.length++;
  }

  //返回链表上元素本身的值
  LinkList.prototype.toString = function () {
    var cur = this.head;
    var str = "";

    while (cur) {
      str = str + "," + cur.ele;
      cur = cur.next;
    }

    return str.slice(1);
  }

  //在指定位置插入元素
  LinkList.prototype.insert = function (position, ele) {
    if (position < 0 || position > this.length) return false;  //判断是否越界

    var newNode = new Node(ele);
    var cur = this.head;
    var previous = null;
    var index = 0;

    if (position == 0) {
      newNode.next = cur;
      this.head = newNode;
    } else {
      while (index++ < position) {
        previous = cur;
        cur = cur.next;
      }

      newNode.next = cur;
      previous.next = newNode;
    }

    this.length++;
    return true;
  }

  //在链表中查询元素并返回相应的位置
  LinkList.prototype.indexOf = function (ele) {
    var index = 0;
    var cur = this.head;

    while (cur) {
      if (cur.ele == ele) {
        return index;
      }
      cur = cur.next;
      index++;
    }

    return -1; //没有找到该元素时返回-1；
  }

  //移除指定位置的元素并返回元素的值
  LinkList.prototype.removeAt = function (position) {
    if (position < 0 || position > this.length) return null;  //判断是否越界

    var cur = this.head;
    var previous = null;
    var index = 0;

    if (position == 0) {
      this.head = cur.next;
    } else {
      while (index++ < position) {
        previous = cur;
        cur = cur.next;
      }

      previous.next = cur.next;
    }

    this.length--;
    return cur.ele;
  }

  //移除指定元素
  LinkList.prototype.remove = function (ele) {
    var index = this.indexOf(ele);
    return this.removeAt(index);
  }

  //判断链表是否为空
  LinkList.prototype.isEmpty = function () {
    return this.length == 0;
  }

  //返回链表的长度
  LinkList.prototype.size = function () {
    return this.length;
  }

  //获取链表的第一个元素
  LinkList.prototype.getFirst = function () {
    return this.head.ele;
  }
}

var testLink = new LinkList();
testLink.append("hym");
testLink.append("wyx");
console.log(testLink.toString());

testLink.insert(1, "zbl");
console.log(testLink.toString());

console.log(testLink.indexOf("wyx"));

testLink.remove("zbl");
console.log(testLink.toString());

console.log(testLink.size());
console.log(testLink.isEmpty());
console.log(testLink.getFirst());


// 创建双向链表的构造函数------------------------------------------------
function DoublyLinkedList() {
  // 创建节点构造函数
  function Node(element) {
    this.element = element
    this.next = null
    this.prev = null
  }

  // 定义属性
  this.length = 0
  this.head = null
  this.tail = null

  //尾部追加数据
  DoublyLinkedList.prototype.append = function (element) {
    // 根据元素创建节点
    var newNode = new Node(element)

    // 判断列表是否为空
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
  }

  // 正向遍历的方法
  DoublyLinkedList.prototype.forwardString = function () {
    var current = this.head
    var forwardStr = ""

    while (current) {
      forwardStr += "," + current.element
      current = current.next
    }
    return forwardStr.slice(1)
  }

  // 反向遍历的方法
  DoublyLinkedList.prototype.reverseString = function () {
    var current = this.tail
    var reverseStr = ""

    while (current) {
      reverseStr += "," + current.element
      current = current.prev
    }
    return reverseStr.slice(1)
  }

  // 在任意位置插入数据
  DoublyLinkedList.prototype.insert = function (position, element) {
    if (position < 0 || position > this.length) return false   //判断是否越界

    var newNode = new Node(element)

    if (position === 0) { // 在第一个位置插入数据
      // 判断链表是否为空
      if (this.head == null) {
        this.head = newNode
        this.tail = newNode
      } else {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      }
    } else if (position === this.length) { // 插入到最后的情况
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    } else { // 在中间位置插入数据
      var index = 0
      var current = this.head
      var previous = null

      while (index++ < position) {
        previous = current
        current = current.next
      }

      // 交换节点的指向顺序
      newNode.next = current
      newNode.prev = previous
      current.prev = newNode
      previous.next = newNode
    }

    this.length++
    return true
  }

  // 根据位置删除对应的元素
  DoublyLinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return null  //判断是否越界

    // 判断移除的位置
    var current = this.head
    if (position === 0) {
      if (this.length == 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
    } else if (position === this.length - 1) {
      current = this.tail
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      var index = 0
      var previous = null

      while (index++ < position) {
        previous = current
        current = current.next
      }

      previous.next = current.next
      current.next.prev = previous
    }

    this.length--

    return current.element
  }

  // 根据元素获取在链表中的位置
  DoublyLinkedList.prototype.indexOf = function (element) {
    var current = this.head
    var index = 0

    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  // 根据元素删除
  DoublyLinkedList.prototype.remove = function (element) {
    var index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 判断是否为空
  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }

  // 获取链表长度
  DoublyLinkedList.prototype.size = function () {
    return this.length
  }

  // 获取第一个元素
  DoublyLinkedList.prototype.getHead = function () {
    return this.head.element
  }

  // 获取最后一个元素
  DoublyLinkedList.prototype.getTail = function () {
    return this.tail.element
  }
}

// 1.创建双向链表对象
var list = new DoublyLinkedList()

// 2.追加元素
list.append("abc")
list.append("cba")
list.append("nba")
list.append("mba")

// 3.获取所有的遍历结果
console.log(list.forwardString()) // abc,cba,nba,mba
console.log(list.reverseString()) // mba,nba,cba,abc


//---------------------------------------------------

function Dictionary() {
  this.items = {};

  Dictionary.prototype.set = function (key, value) {
    this.items[key] = value;
  }

  Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key);
  }

  Dictionary.prototype.remove = function (key) {
    if (!this.has(key)) {
      return false;
    }

    delete this.items[key];
    return true;
  }

  Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  Dictionary.prototype.getKeys = function () {
    return Object.keys(this.items);
  }

  Dictionary.prototype.getValues = function () {
    return Object.values(this.items);
  }

  Dictionary.prototype.getSize = function () {
    return this.getKeys().length
  }

  Dictionary.prototype.clear = function () {
    this.items = {}
  }
}


/* var dict = new Dictionary()// 创建字典对象

dict.set("age", 18)// 在字典中添加元素
dict.set("name", "Coderwhy")
dict.set("height", 1.88)
dict.set("address", "广州市")

// 获取字典的信息
console.log(dict.getKeys()) // age,name,height,address
console.log(dict.getValues()) // 18,Coderwhy,1.88,广州市
console.log(dict.get("name")) // Coderwhy

// 字典的删除方法
dict.remove("height")
console.log(dict.getKeys())// age,name,address */



//哈希表-----------------------------------------------------
function HashTable() {
  this.storage = [];
  this.count = 0;  //已经存在了多少数据.
  this.limit = 8;  //数组中一共可以存放多少个元素.

  //获取hashCode
  HashTable.prototype.hashFunc = function (key, max) {
    var hashCode = 0;

    for (var i = 0; i < key.length; i++) {
      hashCode = 37 * hashCode + key.charCodeAt(i);
    }

    hashCode = hashCode % max;
    return hashCode;
  }

  //插入或者修改
  HashTable.prototype.put = function (key, value) {
    var hashCode = this.hashFunc(key, this.limit);
    var buket = this.storage[hashCode];
    if (buket === undefined) {
      buket = [];
      this.storage[hashCode] = buket;
    }

    var overWriter = false;   //判断是否是重写
    for (var i = 0; i < buket.length; i++) {
      var temp = buket[i];
      if (temp[0] == key) {
        temp[1] = value;
        overWriter = true;
      }
    }

    if (!overWriter) {
      buket.push([key, value]);  //插入数据
      this.count++;
    }
  }

  //根据key获取值
  HashTable.prototype.get = function (key) {
    var hashCode = this.hashFunc(key, this.limit);
    var buket = this.storage[hashCode];
    if (buket == null) {
      return null;
    }

    for (var i = 0; i < buket.length; i++) {
      var item = buket[i];

      if (item[0] == key) {
        return item[1];
      }
    }
    return null;
  }

  //根据key删除对应的数据
  HashTable.prototype.remove = function (key) {
    var hashCode = this.hashFunc(key, this.limit);
    var buket = this.storage[hashCode];

    if (buket == null) {
      return null;
    }

    for (var i = 0; i < buket.length; i++) {
      var temp = buket[i];
      if (temp[0] === key) {
        buket.splice(i, 1);
        this.count--;
        return temp[1];
      }
    }

    return null;
  }

  //是否为空
  HashTable.prototype.isEmpty = function () {
    return this.count == 0;
  }

  //获取哈希表中数据的个数
  HashTable.prototype.size = function () {
    return this.count;
  }
}

/* var test = new HashTable();
test.put("hym", "123");
test.put("hym", "345");
test.put("wyx", "245");
console.log(test.isEmpty());
console.log(test.size());
console.log(test.get("hym"));
test.remove("hym");
console.log(test.get("hym"));
console.log(test.size()); */

//二叉搜索树--------------------------------------------
function BinarySearchTree() {
  //根结点
  this.root = null;

  //创建结点的构造函数
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  // 插入结点 参数：插入结点的key值
  BinarySearchTree.prototype.insert = function (key) {
    var newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 前序遍历 参数：对结点key值的处理函数
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    this.preOrderTraversalNode(this.root, handler);
  }

  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      handler(node.key);  //打印当前结点
      this.preOrderTraversalNode(node.left, handler);
      this.preOrderTraversalNode(node.right, handler);
    }
  }

  //中序遍历
  BinarySearchTree.prototype.inOrderTraversal = function (handler) {
    this.inOrderTraversalNode(this.root, handler);
  }

  BinarySearchTree.prototype.inOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, handler);
      handler(node.key);
      this.inOrderTraversalNode(node.right, handler);
    }
  }

  //后序遍历
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
    this.postOrderTraversalNode(this.root, handler);
  }

  BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, handler);
      this.postOrderTraversalNode(node.right, handler);
      handler(node.key);
    }
  }

  //获取最小值
  BinarySearchTree.prototype.min = function () {
    var node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.key;
  }

  //获取最大值
  BinarySearchTree.prototype.max = function () {
    var node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.key;
  }

  //搜索特定的值，返回true或者false
  BinarySearchTree.prototype.search = function (key) {
    return this.searchNode(this.root, key);
  }

  BinarySearchTree.prototype.searchNode = function (node, key) {
    if (node == null) {
      return false;
    }

    if (node.key > key) {
      return this.searchNode(node.left, key);
    } else if (node.key < key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  //非递归搜索
  //  BinarySearchTree.prototype.search = function (key) {
  //    var node = this.root;
  //    while (node !== null) {
  //      if (node.key > key) {
  //        node = node.left;
  //      } else if (node.key < key) {
  //        node = node.right;
  //      } else {
  //        return true;
  //      }
  //    }
  //    return false;
  //  }


  //二叉搜索树删除结点
  BinarySearchTree.prototype.remove = function (key) {
    var current = this.root;
    var parent = this.root;
    var isLeftChild = true;

    //查找结点
    while (current.key !== key) {
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }

      if (current === null) {
        return false;  //没有找到要删除的结点
      }
    }

    //情况一：删除的是叶子结点
    if (current.left === null && current.right === null) {
      if (current == this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (current.right === null) { //情况二： 删除有一个子结点的结点
      if (current == this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.right;
      }
    } else if (current.left === null) {
      if (current == this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else {   //情况三：删除有两个结点的结点
      //获取后继结点
      var successor = this.getSuccessor(current);

      if (current == this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }

      successor.left = current.left;
    }
    return true;
  }

  //寻找后继结点(在右子树中寻找最小值)
  BinarySearchTree.prototype.getSuccessor = function (delNode) {
    var successorParent = delNode;
    var successor = delNode;
    var current = delNode.right;

    //在左子树中找最小值，即最后一个左结点
    while (current !== null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    if (successor != delNode.right) {
      successorParent.left = successor.right;   //摘结点successor
      successor.right = delNode.right;
    }
    return successor;
  }
}

// 测试代码
/* var test = new BinarySearchTree()
test.insert(11) // 插入数据
test.insert(7)
test.insert(15) */

//------------------------------------------------------

//字典
function Dictionary() {
  this.items = {};

  Dictionary.prototype.set = function (key, value) {
    this.items[key] = value;
  }

  Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key);
  }

  Dictionary.prototype.remove = function (key) {
    if (!this.has(key)) {
      return false;
    }

    delete this.items[key];
    return true;
  }

  Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  Dictionary.prototype.getKeys = function () {
    return Object.keys(this.items);
  }

  Dictionary.prototype.getValues = function () {
    return Object.values(this.items);
  }

  Dictionary.prototype.getSize = function () {
    return this.getKeys().length
  }

  Dictionary.prototype.clear = function () {
    this.items = {}
  }
}

// 自定义队列
function Queue() {
  var items = []

  // 队列操作的方法
  // enter queue方法
  this.enqueue = function (element) {
    items.push(element)
  }

  // delete queue方法
  this.dequeue = function () {
    return items.shift()
  }

  // 查看前端的元素
  this.front = function () {
    return items[0]
  }

  // 查看队列是否为空
  this.isEmpty = function () {
    return items.length == 0
  }

  // 查看队列中元素的个数
  this.size = function () {
    return items.length
  }
}

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


//----------------------------------------------
var a = [13, 56, 78, 3, 2, 6, 4, 7];


function bubbleSort(arr) {
  //反向循环，循环次数减少
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//找出最小值进行交换
function selectSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var min = i;
    for (var j = min + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

function insertSort(arr) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    var insertNum = arr[i];  //暂存待插入记录，设置哨兵
    var j = i;
    while (j > 0 && insertNum < arr[j - 1]) {   //移动有序序列
      arr[j] = arr[j - 1];   //已排序的元素大于新元素，将该元素移到一下个位置
      j--;
    }

    arr[j] = insertNum;  //插入记录
  }

  return arr;
}


//希尔排序
function shellSort(arr) {
  var len = arr.length;
  var gap = Math.floor(len / 2);  //建议的初始间距是N / 2, 简单的把每趟排序分成两半.

  while (gap > 0) {   //增量不断变小，大于0就继续排序
    for (var i = gap; i < len; i++) {
      var j = i;
      var insertNum = arr[i];

      //插入排序的内层循环
      while (j > gap - 1 && insertNum < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = insertNum;
    }
    gap = Math.floor(gap / 2);  //重新计算间隔
  }

  return arr;
}

console.log(shellSort(a));

