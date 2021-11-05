//运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。实现 LRUCache 类：

// LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。
// 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。


class DoubleNode{
  constructor(key,val){
    this.key = key;
    this.val = val;

    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
   this.max = capacity; //存储最大值
   this.map = new Map();

   this.head = null;
   this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let node = this.map.get(key);

  if(!node){
    return -1;
  }else{
    this.remove(node);
    this.appendHead(node);
    return node.val;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = this.map.get(key);

  if(node){
    node.val = value;
    this.remove(node);
    this.appendHead(node);
  }else{
    //没有缓存时
    node = new DoubleNode(key,value);

    if(this.map.size>=this.max){
      //缓存已满
      this.map.delete(this.tail.key);
      this.remove(this.tail);
      this.appendHead(node);
      this.map.set(key,node);
    }else{
      this.appendHead(node);
      this.map.set(key,node);
    }
  }
};

LRUCache.prototype.appendHead = function(node){
  if(this.head === null){
    this.head = this.tail = node;
  }else{
    node.next= this.head;
    this.head.prev = node;
    this.head = node;
  }
};

LRUCache.prototype.remove = function(node){
  if(this.head === this.tail){
    this.head = this.tail = null;
  }else{
    if(this.head === node){
      this.head = this.head.next;
      node.next = null;
    }else if(this.tail === node){
      this.tail = this.tail.prev;
      this.tail.next = null;
      node.prev = null;
    }else{
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.prev = node.next = null;
    }
  }
};

/* 
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lru-cache
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */