// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 数组存储链表结点，实现直接访问倒数第n个结点
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let curr = head;
  let nodes = [];
  do{
    nodes.push(curr);
    curr = curr.next;
  }while(curr);  //将结点存储在数组中

  let len = nodes.length;
  let index = len-n; //找到倒数第n个结点
  let targetNode = nodes[index];
  let prevNode = nodes[index-1];

  if(prevNode){
    prevNode.next = targetNode.next;
  }

  let tempNext = targetNode.next;
  targetNode.next = null;
  
  if(targetNode == head){
    return tempNext;
  }
  return head;
};

// 快慢指针
var removeNthFromEnd = function(head, n) {
 let dummy = new ListNode(0,head);
 let first = head;
 let second = dummy;

 for(let i = 0; i<n; ++i){
   first = first.next;
 }

 //通过快慢指针控制刚好能取到len-n
 while(first!=null){
   first = first.next;
   second = second.next;
 }

 second.next = second.next.next;
 let res = dummy.next;
 return res;
}

/* 
示例 3：
输入：head = [1,2], n = 1
输出：[1]
 

提示：
链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。] */