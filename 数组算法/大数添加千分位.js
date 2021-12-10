// 给大数添加千分位符  num.toLocaleString();

//转为数组处理
function toThousandsStr(num) {
  num = (num || 0).toString()
  let res = []
  let count = 0
  let arr = num.split("")
  for (let i = arr.length - 1; i >= 0; --i) {
    //从后往前每三位加一个符号
    ++count
    res.unshift(arr[i])
    if (count % 3 == 0 && i != 0) {
      res.unshift(",")
    }
  }
  return res.join("")
}

//直接处理字符串
function toThousands(num) {
  num = (num || 0).toString()
  let res = ""
  let count = 0
  for (let i = num.length - 1; i >= 0; --i) {
    ++count
    res = num[i] + res
    if (count % 3 == 0 && i != 0) {
      res = "," + res
    }
  }
  return res
}

console.log(toThousands(123567884))