<!--
 * @Author: Yomi
 * @Date: 2021-09-02 23:56:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-10 10:59:53
-->
### 关于数据结构
- 栈：[1_Stack](https://github.com/YomiHub/algorithms/blob/master/1_Stack.js)
- 队列：[2_Queue](https://github.com/YomiHub/algorithms/blob/master/2_Queue.js)
- 链表：[3_LinkList](https://github.com/YomiHub/algorithms/blob/master/3_LinkList.js)
- 字典：[4_Dictionary](https://github.com/YomiHub/algorithms/blob/master/4_Dictionary.js)
- 哈希表：[5_HashTable](https://github.com/YomiHub/algorithms/blob/master/5_HashTable.js)
- 二叉树：[6_BinaryTree](https://github.com/YomiHub/algorithms/blob/master/6_BinaryTree.js)
- 图：[7_Grapha](https://github.com/YomiHub/algorithms/blob/master/7_Grapha.js)

</br>

### 关于算法的六个重要模板，以及位运算常用的几个方式
- （1）递归：递归终止条件、当前循环任务、进入下一层循环、根据需要恢复成递归前的状态（参考N皇后）；
- （2）DFS：访问记录visited、for循环当前处理状态且没有访问过则递归（参考跳跃游戏 III）；
- （3）BFS：创建queue=[root]、循环队列、pop结点并用visited做访问记录、将下一结点push到队列；
- （4）二分查找：left=0,right=len-1、当left<=right进入循环，取mid=Math.floor((left+right)/2)、根据当前值与目标值的大小，调整便捷left=mid+1还是right=mid-1；
- （5）并查集：构造函数定义parent和rank以及初始化集合数count、方法findRoot找到结点的根，即while(this.parent[x]!=x)、union将结点合并、rank判断将短的合并到长的，更改parent和rank以及count--
- （6）动态规划:定义初始状态矩阵、循环矩阵更改状态、返回最优解（一般在开头或者结尾）
- （7）位运算：用x&1==1或者==0判断奇偶（等同于x%2==1）、x=x&(x-1)将最低位的1重置为0、x&-x的结果取得最低位的1

### 递归与回溯
- 反转字符串
- 两两交换链表中的节点
- 杨辉三角
- 反转链表
- 斐波那契数
- 爬楼梯
- 二叉树的最大深度
- Pow(x,n)
- 合并两个有序链表
- 第K个语法符号
- 不同的二叉搜索树
- 括号生成（递归和回溯）
- 单词搜索
- 单词搜索 II（回溯+字典树）

</br>

### 贪心算法
> 每一次都取当前最优解
- 买卖股票的最佳时机 II

</br>

### 动态规划
> (1)递归+记忆化->递推  (2)状态的定义：opt[n]、dp[n]、fib[n]表示的含义  (3)状态转移方程： opt[n] = best_of(opt[n-1],opt[n-2],...)   (4)最优子结构

> 回溯（递归）—— 重复计算；贪心 —— 永远局部最优解；DP —— 记录局部最优子结构/多种记录值 

- 三角形最小路径和（从终点往上找）
- 乘积最大子数组（存储最大最小值两种情况）
- 买卖股票（121、122、123、188、309、714）：dp[n]状态为第n天最大收益，mp[n]表示是否持有股票，dk[n]表示之前总共交易的次数（三维状态）
- 最长递增子序列
- 零钱兑换（记录面值为n需要的最少硬币数为arr[n]）
- 编辑距离

</br>

### 查找表（集合与字典）
- 两个数组的交集
- 快乐数
- 存在重复元素
- 两个数组的交集 II
- 同构字符串
- 有效的字母异位词
- 根据字符出现频率排序
- 找不同(统计字母出现的次数||字母ASCII码求和取差值)
- 最长公共前缀（横向匹配、纵向匹配、分治、二分法）
- 多数元素（求众数）
- 有效的数独

</br>

### 查找表（求和与分组）
- 两数之和
- 三数之和
- 四数之和
- 四数相加 II
- 字母异位词分组
- 回旋镖的数量
- 直线上最多的点数
- 和为 K 的子数组(前缀和+哈希表)
- 最接近的三数之和(排序后使用双指针取三个数的和)

</br>

### 查找表（双索引与滑动窗口）
- 存在重复元素 II
- 存在重复元素 III
- 无重复字符的最长子串
- 两数之和 II 
- 验证回文串（双指针）
- 长度最小的子数组
- 最小覆盖子串
- 找到字符串中所有字母异位词
- 滑动窗口最大值
- 通过删除字母匹配到字典里最长单词(贪心算法)
- 面试题 17.15. 最长单词(排序后去重，单词划分的动态规划)
- 分发饼干(排序后贪心算法)
- 判断子序列(双指针匹配字符)
- 搜索二维矩阵

</br>

### 链表
- LRU 缓存机制
- 反转链表 II （穿针引线、头插法）
- 删除链表中的节点（不能访问头节点、已知头节点）
- 删除链表的倒数第 N 个结点
- 两数相加
- 移除链表元素
- 环形链表（快慢指针）

### 数组算法
- 移动零
- 移除元素
- 删除有序数组中的重复项
- 删除有序数组中的重复项 II
- 颜色分类
- 数组中的第K个最大元素
- 合并两个有序数组
- 剑指 Offer 40. 最小的k个数（快排思想）

</br>

### 栈和队列
- 逆波兰表达式求值
- 有效的括号
- 简化路径
- 二叉树的前序遍历
- 二叉树的右视图
- 用栈实现队列（输入栈和输出栈）
- 数据流中的第 K 大元素

</br>

### BFS
- 相同的树(DFS递归解法、BFS解法)
- 二叉树的层序遍历（核心遍历模板）
  - DFS使用变量level记录所在的层，递归遍历时根据level将节点push到对应层的数组中;
  - BFS循环队列，while给每层开一个for循环，遍历同层节点
- 跳跃游戏 III
- 跳跃游戏 IV

</br>

### DFS
- 二叉树的最小深度（分治DFS）
- N皇后（DFS、位运算！！！）
- 路径总和 II
- 对称二叉树
- 平衡二叉树
- 二叉树的所有路径
- 求根节点到叶子节点数字之和
- 路径总和 III

</br>

### 二叉树
- 验证二叉搜索树
- 二叉搜索树的最近公共祖先

</br>

### 并查集
> x.parent = x 初始化的时候就是指向自己roots[i] = i;（1）小弟、老大关系；（2）帮派识别、（3）优化方式：降低链的深度rank（将rank小的合并到rank大的）、进行路径压缩
- 岛屿数量

### 位运算
> X&(X-1)：去掉最低位的1；x&-x：返回最低位1所在
- 位1的个数
- 2的幂
- 比特位计数

### 更多
> [更多前端学习笔记](https://github.com/YomiHub/learning-code)

> 来源1：力扣[LeetCode](https://leetcode-cn.com) 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

> 来源2：[github](https://github.com/sl1673495/leetcode-javascript)
