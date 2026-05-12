// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 翻转链表： 翻转其本身之外，还需要将子链表的头部与上一个子链表连接，以及子链表的尾部与下一个子链表连接
const reverseList = (head, tail) => {
  let prev = tail.next
  let p = head
  while (prev !== tail) {
    const next = p.next
    p.next = prev
    prev = p
    p = next
  }
  return [tail, head]
}

var reverseKGroup = function (head, k) {
  const mock = new ListNode(0)
  mock.next = head

  let prev = mock
  while (head) {
    let tail = prev

    // 检查剩余长度是否大于k
    for (let i = 0; i < k; ++i) {
      tail = tail.next
      if (!tail) {
        return mock.next
      }
    }

    const next = tail.next
    ;[head, tail] = reverseList(head, tail)
    prev.next = head
    tail.next = next
    prev = tail
    head = tail.next
  }

  return mock.next
}

/* 
示例1：
输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]

示例2：
输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5] 

提示：
链表中的节点数目为 n
1 <= k <= n <= 5000
0 <= Node.val <= 1000
*/
