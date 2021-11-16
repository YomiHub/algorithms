// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
   let dummy = new ListNode(-1);
   dummy.next = head;
   let cur = dummy;
   while(cur){
     let next = cur.next;
     if(!next){
       break; //当next值为null则跳过
     }
     if(next.val == val){
       cur.next = cur.next.next; //删除结点后不需要移动指针，继续判断
     }else{
       cur = cur.next;
     }
   }
   return dummy.next;
};

/* 
示例 3：
输入：head = [7,7,7,7], val = 7
输出：[]
 

提示：

列表中的节点数目在范围 [0, 104] 内
1 <= Node.val <= 50
0 <= val <= 50

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-linked-list-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */