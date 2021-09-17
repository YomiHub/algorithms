//-----------------------------------------------------------------
//反转一个单链表
//给你单链表的头节点 head ，请你反转链表，并返回反转后的链表

//链表可以选用迭代或递归方式完成反转
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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

console.log(reverseList(head));

/* 输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]
 

提示：
链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */