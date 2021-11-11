// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
// 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 一次遍历「穿针引线」反转链表（头插法）
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
  // **  因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
    let dummyNode = new ListNode(-1);
    dummyNode.next = head;

    let pre = dummyNode;
    // left 节点的前一个节点
    for(let i = 0; i<left-1; ++i){
      pre = pre.next;
    }
    
    let cur = pre.next;
    for(let i = 0; i<right-left;++i){
      const next = cur.next;
      cur.next = next.next;
      next.next = pre.next;
      pre.next = next;
    }
    return dummyNode.next;
  }

// 穿针引线：找到left和right，翻转子链表，然后翻转left和right的next指向
 var reverseBetween = function(head, left, right) {
   let dummyNode = new ListNode(-1);
   dummyNode.next = head;

   let pre = dummyNode;
   // left 节点的前一个节点
   for(let i = 0; i<left-1; ++i){
     pre = pre.next;
   }

   let rightNode = pre;
   //找到right节点
   for(let i = 0; i<right-left+1; ++i){
     rightNode = rightNode.next;
   }

   //切断出一个子链表（截取链表）
   let leftNode = pre.next;
   let curr = rightNode.next;
   pre.next = null;
   rightNode.next = null;

   //反转子链表
   reverseList(leftNode);

   //接入反转完毕的链表
   pre.next = rightNode;
   leftNode.next = curr;  // 反转后的head指向right

   return dummyNode.next;
};

const reverseList = (head)=>{
  let pre = null;
  let cur = head;

  while(cur){
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
}

/* 
链表中节点数目为 n
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n

示例1：
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */