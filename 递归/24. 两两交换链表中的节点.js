//-----------------------------------------------------------------
//两两交换链表中的节点
//给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
//你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

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
var listNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
}

function swap(head) {
  if (!head || !head.next) {
    return head
  }
  let tempHead = head.next
  head.next = swapPairs(head.next.next)
  tempHead.next = head
  return tempHead
}

var swapPairs = function (head) {
  return swap(head)
}


// 通过迭代方式实现，先创建哑结点 dummyHead，令 dummyHead.next = head
var swapPairs = function(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let curr = dummy;
  //后面没有节点或者只有一个节点
  while(curr.next!=null&&curr.next.next!=null){
    let temp1 = curr.next;
    let temp2 = curr.next.next;
    curr.next = temp2;  // 互换后记得连接前驱节点
    temp1.next = temp2.next;
    temp2.next = temp1;
    curr = temp1;
  }
  return dummy.next;
};

console.log(swapPairs(listNode))

/* 输入：head = [1,2,3,4]
输出：[2,1,4,3]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
