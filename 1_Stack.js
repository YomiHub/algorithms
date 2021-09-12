/*
 * @Author: Yomi
 * @Date: 2021-09-12 10:18:00
 * @LastEditors: Yomi
 * @LastEditTime: 2021-09-12 10:20:45
 */
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

//将十进制转为二进制
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
console.log(change(source));

