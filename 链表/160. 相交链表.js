// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

// 图示两个链表在节点 c1 开始相交：

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 1、让两个链表从同距离末尾同等距离的位置开始遍历
// 比较长的链表指针指向较短链表head时，长度差就消除了
// 如此，只需要将最短链表遍历两次即可找到位置
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null
  let nodeA = headA
  let nodeB = headB
  while (nodeA != nodeB) {
    nodeA = nodeA == null ? headB : nodeA.next
    nodeB = nodeB == null ? headA : nodeB.next
  }
  return nodeA
}
