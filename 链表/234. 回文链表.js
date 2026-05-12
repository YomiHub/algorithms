// 回文 序列是向前和向后读都相同的序列
// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 1、将值复制到数组中后用双指针法
var isPalindrome = function (head) {
  const values = []
  while (head != null) {
    values.push(head.val)
    head = head.next
  }
  for (let left = 0, right = values.length - 1; left < right; ++left, --right) {
    if (values[left] !== values[right]) {
      return false
    }
  }
  return true
}

// 2、使用递归：currentNode 指针是先到尾节点，从后往前比较
let frontPointer

const recursivelyCheck = (currentNode) => {
  if (currentNode !== null) {
    if (!recursivelyCheck(currentNode.next)) {
      return false
    }

    if (currentNode.val !== frontPointer.val) {
      return false
    }

    frontPointer = frontPointer.next
  }
  return true
}

var isPalindrome = function (head) {
  frontPointer = head
  return recursivelyCheck(head)
}
