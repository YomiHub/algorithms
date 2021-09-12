/*
 * @Author: Yomi
 * @Date: 2021-09-12 10:16:58
 * @LastEditors: Yomi
 * @LastEditTime: 2021-09-12 10:21:40
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