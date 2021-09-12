/* var reverseString = function (s) {
  printArr(0, s);
};

function printArr(index, s) {
  if (s == null || index > s.length - 2) {
    console.log(s);
    return;
  }

  s.splice(index, 0, s.splice(s.length - 1, 1).toString());
  return printArr(++index, s)
}

reverseString(s); */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* listNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}

var swapPairs = function (head) {
  return swap(head);
};

console.log(swapPairs(listNode));
function swap(head) {
  if (!head || !head.next) {
    return head
  }
  let tempHead = head.next
  head.next = swapPairs(head.next.next)
  tempHead.next = head
  return tempHead
}


 */


/* var generate = function (numRows) {
  console.log(createArr([], 0, numRows));
};

function createArr(arr, i, len) {
  if (i < len) {
    var temp = [];
    for (let j = 0; j < i + 1; j++) {
      if (j == 0 || j == i) {
        temp.push(1)
      } else {
        temp.push(arr[i - 1][j - 1] + arr[i - 1][j])
      }
    }
    arr.push(temp);
    console.log(arr);
    return createArr(arr, ++i, len);
  } else {
    return arr[i-1];
  }
}

generate(5); */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/* var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
} */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* var newList = null;
var reverseList = function (head) {
  var pre = null;
  while (head) {
    var next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};

console.log(reverseList(head)); */


/* //对应同步的操作 fs.mkdirSync(path.join(__dirname,'test2'));
const path = require("path");
const fs = require("fs");

fs.rmdir(path.join(__dirname, 'test'), (err) => {
  console.log(err);  //打印null表示成功删除
})

//对应的同步方法 fs.rmdirSync(path.join(__dirname, 'test'));   */

/* var fib = function (N) {
  var obj = {};
  return fibCal(N, obj)
};

function fibCal(n, obj) {
  if (0 <= n && n <= 30) {
    var result;
    if (obj.hasOwnProperty(n)) {
      return obj[n];
    }


    if (n < 2) {
      result = n
    } else {
      result = fibCal(n - 1, obj) + fibCal(n - 2, obj)
    }

    obj[n] = result;
    return result;
  }
}

console.log(fib(3));

var climbStairs = function (n) {
  var obj = {};
  return climbCal(n, obj);
};

function climbCal(n, obj) {
  var result;
  if (obj.hasOwnProperty(n)) {
    return obj[n];
  }

  if (n == 1) {
    result = 1;
  } else if (n == 2) {
    result = 2;
  } else {
    result = climbCal(n - 1, obj) + climbCal(n - 2, obj);
  }

  obj[n] = result;
  return result;
}

console.log(climbStairs(5))
 */

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
        right: null
      },
      right: null
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
}

// DFS（深度优先搜索）策略
/* var maxDepth = function (root) {
  if (root === null) {
    return 0;
  } else {
    let leftLen = maxDepth(root.left);
    let rightLen = maxDepth(root.right);
    return Math.max(leftLen, rightLen) + 1;
  }
}; */



/* var maxDepth = function (root) {
  if (root === null) return 0;
  let depth = 1;
  let stack = [root];
  let currentNode = root;

  while (stack.length) {
    while (getNotArrivedChild(currentNode)) {
      stack.push(getNotArrivedChild(currentNode));
      currentNode = getNotArrivedChild(currentNode);
      //这里给访问过的节点标记一下
      currentNode.ok = true;
      //如果加入这个节点后，stack长度大于当前depth，就更新depth为stack长度。
      if (stack.length > depth) depth = stack.length;
    }
    stack.pop();
    currentNode = stack[stack.length - 1];
  }

  return depth;
};

//这个函数用来返回当前节点还未被访问过的子节点
function getNotArrivedChild(root) {
  if (root.left && !root.left.ok) return root.left;
  if (root.right && !root.right.ok) return root.right;
  return null;
}

console.log(maxDepth(root)); */

//方法一：暴力循环
/* var myPow = function (x, n) {
  var result = 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  while (n--) {
    result = result * x;
  }
  return result;
}; */

//方法二：递归快速幂算法
/* 
  var myPow = function (x, n) {
  const fastPow = (x, n) => {
    if (n == 1) { return x };
    let val = n % 2 === 0 ? fastPow(x, n / 2) : fastPow(x, (n - 1) / 2);
    return n % 2 === 0 ? val * val : val * val * x;
  }

  if (x === 1 || n === 0) {
    return 1;
  }

  return n < 0 ? 1 / fastPow(x, Math.abs(n)) : fastPow(x, n);
} */


//分治、递归
/* var myPow = function (x, n) {
  //临界条件
  if (n === 0) return 1;
  if (x === 0) return 0;
  if (n < 0) return 1 / myPow(x, -n);
  //n为奇数
  if (n % 2) return x * myPow(x, n - 1);
  //n为偶数
  return myPow(x * x, n / 2);
};

console.log(myPow(2, 5)); */

const list1 = {
  val: 1,
  next: {
    val: 7,
    next: {
      val: 9,
      next: null
    }
  }
}

const list2 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 8,
      next: null
    }
  }
}

//执行用时 :80 ms, 在所有 javascript 提交中击败了53.05%的用户
//内存消耗 :35.7 MB, 在所有 javascript 提交中击败了22.92%的用户
/* 
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

function ListNode(val) {
  this.val = val;
  this.next = null;
} */


//执行用时 :76 ms, 在所有 javascript 提交中击败了71.00%的用户
//内存消耗 :35.5 MB, 在所有 javascript 提交中击败了39.88%的用户
/* var mergeTwoLists = function (l1, l2) {
  var prehead = new ListNode();
  var prev = prehead;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  prev.next = l1 === null ? l2 : l1;
  return prehead.next;
};

console.log(JSON.stringify(mergeTwoLists(list1, list2))); */


/* var kthGrammar = function (N, K) {
  return getArrs(N)[K - 1];
};

function getArrs(n) {
  var arr = [];
  if (n == 1) {
    arr.push(0)
  } else {
    var preArr = getArrs(n - 1);
    preArr.forEach(num => {
      if (num == 0) {
        arr.push(0);
        arr.push(1);
      } else {
        arr.push(1);
        arr.push(0);
      }
    });
  }
  return arr;  //字符串的长度可能有 10 亿左右，因为每一行的长度都是前一行的两倍，所以这种方法不够高效
} */



//执行用时 :72 ms, 在所有 javascript 提交中击败了29.88%的用户
//内存消耗 :33.6 MB, 在所有 javascript 提交中击败了40.00%的用户
/* var kthGrammar = function (N, K) {
  if (N == 1) { return 0; }
  return (~K & 1) ^ kthGrammar(N - 1, (K + 1) / 2);
}; */

//执行用时 :76 ms, 在所有 javascript 提交中击败了22.99%的用户
//内存消耗 :34.1 MB, 在所有 javascript 提交中击败了20.00%的用户
/* var kthGrammar = function (N, K) {
  if (K === 1) {
    return 0;
  }
  if (K === 2) {
    return 1;
  }

  var parent = K % 2 == 0 ? kthGrammar(N - 1, K / 2) : kthGrammar(N - 1, (K + 1) / 2);

  if (parent === 0) {
    return K % 2 === 0 ? 1 : 0;
  }
  return K % 2 === 0 ? 0 : 1;
}
console.log(kthGrammar(2, 1)); */

//js
//找到不同的根，生成左右两个集合进行组合
/* var generateTrees = function (n) {
  if (n === 0) return [];
  return generateTrees(1, n);

  function generateTrees(start, end) {
    var res = [];
    if (start > end) {
      res.push(null);
      return res;
    }
    for (var i = start; i <= end; i++) {
      var left = generateTrees(start, i - 1);
      var right = generateTrees(i + 1, end);
      for (var l = 0; l < left.length; l++) {
        for (var r = 0; r < right.length; r++) {
          var node = new TreeNode(i);
          node.left = left[l];
          node.right = right[r];
          res.push(node);
        }
      }
    }
    return res;
  }
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var generateTrees = function (n) {
  if (n === 0) { return []; }
  return getTree(1, n);

  function getTree(start, end) {
    var res = [];
    if (start > end) {
      res.push(null);
      return res;
    }

    for (var i = start; i <= end; i++) {
      var left = getTree(start, i - 1);
      var right = getTree(i + 1, end);

      for (var l = 0; l < left.length; l++) {
        for (var r = 0; r < right.length; r++) {
          var newNode = new TreeNode(i);
          newNode.left = left[l];
          newNode.right = right[r];
          res.push(newNode);
        }
      }
    }
    return res;
  }
} */

var arr1 = [1, 2, 2, 1], arr2 = [2, 2];
