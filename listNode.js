
//来源：力扣（LeetCode）链接：https://leetcode-cn.com

/* https://leetcode-cn.com/problems/add-two-numbers/
给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.


输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const resultNode = new ListNode();
  let extra = 0;
  let cur = resultNode;
  while(l1||l2){
      let sum = extra;
      if(l1){
          sum+=l1.val;
          l1 = l1.next;
      }

      if(l2){
          sum+=l2.val;
          l2 = l2.next;
      }
      extra = Math.floor(sum/10); //取进位数
      cur.next = new ListNode(sum%10);
      cur = cur.next;
  }
  if(extra) cur.next = new ListNode(extra); //最后的进位数
  return resultNode.next;
};