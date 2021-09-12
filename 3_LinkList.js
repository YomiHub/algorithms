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



