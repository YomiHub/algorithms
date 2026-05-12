// 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。

// 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。

// 例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。

// 返回复制链表的头节点。

/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
// 1、递归 + 哈希表
// 如果已经拷贝过，我们可以直接从哈希表中取出拷贝后的节点的指针并返回
var copyRandomList = function (head, cacheMap = new Map()) {
  if (head == null) {
    return null
  }

  if (!cacheMap.get(head)) {
    cacheMap.set(head, { val: head.val })
    Object.assign(
      cacheMap.get(head),
      { next: copyRandomList(head.next, cacheMap) },
      { random: copyRandomList(head.random, cacheMap) }
    )
  }
  return cacheMap.get(head)
}

// 2、迭代 + 拆分节点复制
var copyRandomList = function (head) {
  if (head === null) {
    return null
  }

  // 将每一个节点复制之后，放在原节点的后面
  for (let node = head; node !== null; node = node.next.next) {
    const newNode = new Node(node.val, node.next, null)
    node.next = newNode
  }

  // 填充新节点的 random 为旧节点的 random 的 next 节点（新节点的位置）
  for (let node = head; node !== null; node = node.next.next) {
    const newNode = node.next
    newNode.random = node.random !== null ? node.random.next : null
  }

  const headNew = head.next
  // 将新链表摘下来，恢复旧链
  for (let node = head; node !== null; node = node.next) {
    const newNode = node.next
    node.next = node.next.next
    newNode.next = newNode.next !== null ? newNode.next.next : null
  }
  return headNew
}

/* 
示例：
输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
 

提示：

0 <= n <= 1000
-104 <= Node.val <= 104
Node.random 为 null 或指向链表中的节点 

作者：力扣官方题解
链接：https://leetcode.cn/problems/copy-list-with-random-pointer/solutions/889166/fu-zhi-dai-sui-ji-zhi-zhen-de-lian-biao-rblsf/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
