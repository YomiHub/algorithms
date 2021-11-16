// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

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
   let resultNode = new ListNode();
   let extra = 0; //进位数
   let cur = resultNode;

   while(l1||l2){
     let sum = extra;

     if(l1){
       sum += l1.val;
       l1 = l1.next;
     }

     if(l2){
       sum += l2.val;
       l2 = l2.next;
     }

     extra = Math.floor(sum/10);
     cur.next = new ListNode(sum%10);
     cur = cur.next;
   }

   if(extra) cur.next = new ListNode(extra);  //最后的进位
   return resultNode.next;
 }

/* 
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

提示：
每个链表中的节点数在范围 [1, 100] 内
0 <= Node.val <= 9
题目数据保证列表表示的数字不含前导零

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */