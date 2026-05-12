// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

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

// 1、定义一个集合记录访问过的节点
var detectCycle = function (head) {
  const visited = new Set()
  while (head !== null) {
    if (visited.has(head)) {
      return head
    }
    visited.add(head, true)
    head = head.next
  }
  return null
}

// 2、快慢指针：slow 指针每次向后移动一个位置，而 fast 指针向后移动两个位置。

//如果链表中存在环，则 fast 指针最终将再次与 slow 指针在环中相遇。
//任意时刻，fast 指针走过的距离都为 slow 指针的 2 倍

//从相遇点到入环点的距离加上 n−1 圈的环长，恰好等于从链表头部到入环点的距离。
var detectCycle = function (head) {
  if (head === null) {
    return null
  }

  let slow = head,
    fast = head
  while (fast !== null) {
    slow = slow.next

    if (fast.next !== null) {
      fast = fast.next.next
    } else {
      return null
    }

    if (fast === slow) {
      let track = head
      // 在入环点相遇
      while (track !== slow) {
        track = track.next
        slow = slow.next
      }
      return track
    }
  }
  return null
}
