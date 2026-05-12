// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

// 按顺序合并两个链表
const merge = (head1, head2) => {
  if (head1 == null || head1 == null) {
    return head1 != null ? head1 : head2
  }

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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 1、顺序合并
var mergeKLists = function (lists) {
  let result = null
  for (let i = 0; i < lists.length; i++) {
    result = merge(result, lists[i])
  }
  return result
}

// 2、分治合并： 每两个列表合并一次
const mergeGroupList = (listArr, left, right) => {
  if (left === right) {
    return listArr[left]
  }

  if (left > right) {
    return null
  }

  const mid = Math.floor((left + right) / 2)
  return merge(
    mergeGroupList(listArr, left, mid),
    mergeGroupList(listArr, mid + 1, right)
  )
}

var mergeKLists = function (lists) {
  return mergeGroupList(lists, 0, lists.length - 1)
}

/* 示例 1：

输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
示例 2：

输入：lists = []
输出：[]
示例 3：

输入：lists = [[]]
输出：[] 

提示：

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] 按 升序 排列
lists[i].length 的总和不超过 10^4
*/
