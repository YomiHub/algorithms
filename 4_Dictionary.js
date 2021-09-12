/*
 * @Author: Yomi
 * @Date: 2021-09-12 10:32:00
 * @LastEditors: Yomi
 * @LastEditTime: 2021-09-12 10:33:13
 */
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


