// 请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。
// 题目数据保证需要删除的节点 不是末尾节点 。

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next //将下一个节点的值赋值到要删除的节点，改变next删除下一个节点
}

/* 
输入：head = [4,5,1,9], node = 1
输出：[4,5,9]
解释：指定链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/delete-node-in-a-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */


// 对于已知头节点和要删除的节点值时
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  // 因为直接通过判断next，所以为适用于头节点，需要创建虚拟节点
  let virtualNode = {
    next: head,
  }

  let curr = virtualNode
  while (curr) {
    if (curr.next) {
      if (curr.next.val === val) {
        curr.next = cur.next.next;
      }
    }
    curr = curr.next;
  }
  return virtualNode.next;
}
