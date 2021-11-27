//给你一个链表的头节点 head ，判断链表中是否有环。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//快慢指针
//慢指针每次只移动一步，而快指针每次移动两步。初始时，慢指针在位置 head，而快指针在位置 head.next。这样一来，如果在移动的过程中，快指针反过来追上慢指针，就说明该链表为环形链表
var hasCycle = function (head) {
  if (head == null || head.next == null) {
    return false
  }

  let slow = head;
  let fast = head.next;
  while(slow!=fast){    //while(slow!=null&&fast!=null&&fast.next!=null){}
    if(fast == null || fast.next == null){ 
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;  // if(slow==fast) return true
  }
  return true; //return false
}

//Set结构记录访问过的结点
var hasCycle = function (head) {
  let dict = new Set()
  while (head != null) {
    if (dict.has(head)) return true
    dict.add(head)
    head = head.next
  }
  return false
}

/* 
提示：

链表中节点的数目范围是 [0, 104]
-105 <= Node.val <= 105
pos 为 -1 或者链表中的一个 有效索引 。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
