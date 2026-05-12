// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class PriorityStack {
  constructor(compareFn) {
    this.compareFn = compareFn
    this.queue = []
  }

  size() {
    return this.queue.length
  }

  compare(parent, index) {
    if (this.queue[parent] === undefined) {
      return 1 // 交换
    }
    if (this.queue[index] === undefined) {
      return -1
    }
    return this.compareFn(this.queue[parent], this.queue[index])
  }

  // 给堆添加元素
  push(item) {
    this.queue.push(item)
    let index = this.queue.length - 1
    let parent = Math.floor((index - 1) / 2)

    // 上浮
    while (parent >= 0 && this.compare(parent, index) > 0) {
      ;[this.queue[parent], this.queue[index]] = [
        this.queue[index],
        this.queue[parent],
      ]
      index = parent
      parent = Math.floor((index - 1) / 2) // 顶点
    }
  }

  // 获取堆顶元素并移除
  pop() {
    const ret = this.queue[0]

    // 把最后一个元素移动到堆顶
    this.queue[0] = this.queue.pop()

    let index = 0
    let left = 1 // left +1 是右子节点下标
    let selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left

    while (
      selectedChild !== undefined &&
      this.compare(index, selectedChild) > 0
    ) {
      ;[this.queue[index], this.queue[selectedChild]] = [
        this.queue[selectedChild],
        this.queue[index],
      ]
      index = selectedChild
      left = 2 * index + 1
      selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left
    }
    return ret
  }
}

var topKFrequent = function (nums, k) {
  const timesMap = new Map()

  // 统计出现次数
  for (const num of nums) {
    timesMap.set(num, (timesMap.get(num) || 0) + 1)
  }

  // 创建小顶堆
  const priorityStack = new PriorityStack((a, b) => a[1] - b[1])

  // entry 是一个长度为2的数组，0位置存储key，1位置存储value
  for (entry of timesMap.entries()) {
    priorityStack.push(entry)
    if (priorityStack.size() > k) {
      priorityStack.pop() // 只保留最大的K个
    }
  }

  const result = []
  for (let i = priorityStack.size() - 1; i >= 0; i--) {
    result[i] = priorityStack.pop()[0]
  }
  return result
}

/* 
示例 1:
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]

示例 2:
输入: nums = [1], k = 1
输出: [1]
 

提示：
1 <= nums.length <= 105
k 的取值范围是 [1, 数组中不相同的元素的个数]
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的 
*/
