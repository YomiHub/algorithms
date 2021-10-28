/*
 * @Author: Yomi
 * @Date: 2021-09-12 10:16:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-27 09:42:57
 */
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
console.log(index);


//实现循环队列
var MyCircularQueue = function(k) {
  this.items = new Array(k+1);
  this.front = 0;
  this.tail = 0; 
};

/** 向循环队列插入一个元素。如果成功插入则返回真
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.isFull()){
    return false;
  }else{
    this.items[this.tail] = value;
    this.tail = (this.tail+1)%this.items.length;
    return true;
  }
};

/**从循环队列中删除一个元素。如果成功删除则返回真
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty()){
    return false;
  }else{
    this.front = (this.front+1)%this.items.length;
    return true;
  }
};

/** 从队首获取元素。如果队列为空，返回 -1 
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if(this.isEmpty()){
    return -1;
  }else{
    return this.items[this.front];
  }
};

/**获取队尾元素。如果队列为空，返回 -1 
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if(this.isEmpty()){
    return -1;
  }else{
    return this.items[(this.tail-1+this.items.length)%this.items.length]
  }
};

/**检查循环队列是否为空
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  if(this.front == this.tail){
    return true;
  }else{
    return false;
  }
};

/**检查循环队列是否已满
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  if((this.tail+1)%this.items.length==this.front){
    return true;
  }else{
    return false;
  }
};

