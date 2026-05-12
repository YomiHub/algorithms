// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 1、自顶向下归并排序  时间复杂度：O(nlogn)，空间复杂度：O(logn)
// 以中点为分界，将链表拆分成两个子链表，对两个子链表分别排序，最后将排序好的两个子链表合并

// 按顺序合并链表
const merge = (head1, head2) => {
  const dummyHead = new ListNode(0)
  let temp = dummyHead,
    temp1 = head1,
    temp2 = head2
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1
      temp1 = temp1.next
    } else {
      temp.next = temp2
      temp2 = temp2.next
    }
    temp = temp.next
  }

  if (temp1 !== null) {
    temp.next = temp1
  } else if (temp2 !== null) {
    temp.next = temp2
  }
  return dummyHead.next
}

// 使用快慢对链表进行分组，点那个快指针到链表结尾时，慢指针在中间
var getSortList = function (head, tail) {
  if (head === null) {
    return head
  }

  // 只有一个元素时结束
  if (head.next === tail) {
    head.next = null
    return head
  }

  let slow = head,
    fast = head
  while (fast !== tail) {
    slow = slow.next
    fast = fast.next
    if (fast !== tail) {
      fast = fast.next
    }
  }

  const mid = slow
  return merge(getSortList(head, mid), getSortList(mid, tail))
}

var sortList = function (head) {
  return getSortList(head, null)
}

/* 
示例 1：
输入：head = [4,2,1,3]
输出：[1,2,3,4]

示例 2：
输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]

提示：
链表中节点的数目在范围 [0, 5 * 104] 内
-105 <= Node.val <= 105
 */
