//请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：
var MyQueue = function() {
  //一个用于输入，一个用于输出
  this.inStack = [];
  this.outStack = [];
  this.front = null; //存放队首元素
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  if(this.inStack.length==0){
    this.front = x; //初始化队首元素
  }
  this.inStack.push(x);
};

/**
 * @return {number}
 */

//弹出的时候查询输出栈是否为空，空则从输出栈获取元素
MyQueue.prototype.pop = function() {
  if(this.outStack.length==0){  //初始化输出栈
    while(this.inStack.length!=0){
      //先将输入栈的元素放到输出栈的栈顶
      this.outStack.push(this.inStack.pop());
    }
  }
  return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  //如果输出栈不为空，则队首为输出栈的栈顶元素
  if(this.outStack.length!=0){
    return this.outStack[this.outStack.length-1]
  }
  return this.front;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.inStack.length==0&&this.outStack.length==0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/* 实现 MyQueue 类：

void push(int x) 将元素 x 推到队列的末尾
int pop() 从队列的开头移除并返回元素
int peek() 返回队列开头的元素
boolean empty() 如果队列为空，返回 true ；否则，返回 false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-queue-using-stacks
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */