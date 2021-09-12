/*
 * @Author: Yomi
 * @Date: 2021-09-12 10:33:49
 * @LastEditors: Yomi
 * @LastEditTime: 2021-09-12 10:33:50
 */

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

