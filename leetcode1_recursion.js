/*
 * @Author: Yomi
 * @Descripttion:在leetcode学习"算法之递归"
 * @Date: 2021-09-13 14:15:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-17 14:59:22
 */

//-----------------------------------------------------------------
// 斐波那契数列:该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和
//F(0) = 0，F(1) = 1
//F(n) = F(n - 1) + F(n - 2)，其中 n > 1
//给你 n ，请计算 F(n) 。
var fib = function (N) {
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


 
/* 
示例 1：

输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fibonacci-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

//-----------------------------------------------------------------
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
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


//-----------------------------------------------------------------
//二叉树：给定一个二叉树，找出其最大深度。即二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。 
//说明: 叶子节点是指没有子节点的节点。
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
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  } else {
    let leftLen = maxDepth(root.left);
    let rightLen = maxDepth(root.right);
    return Math.max(leftLen, rightLen) + 1;
  }
};



var maxDepth = function (root) {
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

console.log(maxDepth(root));


//-----------------------------------------------------------------
//实现 pow(x, n) ，即计算 x 的 n 次幂函数。
//方法一：暴力循环
var myPow = function (x, n) {
  var result = 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  while (n--) {
    result = result * x;
  }
  return result;
};

//方法二：递归快速幂算法

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
}


//分治、递归
var myPow = function (x, n) {
  //临界条件
  if (n === 0) return 1;
  if (x === 0) return 0;
  if (n < 0) return 1 / myPow(x, -n);
  //n为奇数
  if (n % 2) return x * myPow(x, n - 1);
  //n为偶数
  return myPow(x * x, n / 2);
};

console.log(myPow(2, 5));


//-----------------------------------------------------------------
//两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
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
}


//执行用时 :76 ms, 在所有 javascript 提交中击败了71.00%的用户
//内存消耗 :35.5 MB, 在所有 javascript 提交中击败了39.88%的用户
var mergeTwoLists = function (l1, l2) {
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

console.log(JSON.stringify(mergeTwoLists(list1, list2)));


//-----------------------------------------------------------------
//第K个语法符号
//在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。 给定行数 N 和序数 K，返回第 N 行中第 K个字符。（K从1开始）
var kthGrammar = function (N, K) {
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
}



//执行用时 :72 ms, 在所有 javascript 提交中击败了29.88%的用户
//内存消耗 :33.6 MB, 在所有 javascript 提交中击败了40.00%的用户
var kthGrammar = function (N, K) {
  if (N == 1) { return 0; }
  return (~K & 1) ^ kthGrammar(N - 1, (K + 1) / 2);
};

//执行用时 :76 ms, 在所有 javascript 提交中击败了22.99%的用户
//内存消耗 :34.1 MB, 在所有 javascript 提交中击败了20.00%的用户
var kthGrammar = function (N, K) {
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
console.log(kthGrammar(2, 1));



//-----------------------------------------------------------------
//二叉搜索树：给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树
//找到不同的根，生成左右两个集合进行组合
var generateTrees = function (n) {
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

var arr1 = [1, 2, 2, 1], arr2 = [2, 2];
