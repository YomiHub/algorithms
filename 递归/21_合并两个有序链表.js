
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

//方法一：递归解法
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

//方法二：while循环遍历
//执行用时 :76 ms, 在所有 javascript 提交中击败了71.00%的用户
//内存消耗 :35.5 MB, 在所有 javascript 提交中击败了39.88%的用户
function ListNode(val) {
  this.val = val;
  this.next = null;
}

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


/* 示例 2：
输入：l1 = [], l2 = []
输出：[]

示例 3：
输入：l1 = [], l2 = [0]
输出：[0]
 

提示：

两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */