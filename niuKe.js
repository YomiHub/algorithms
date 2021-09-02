/* process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = "";
var input_array = "";
process.stdin.on('data', function (data) {
  input += data;
});
process.stdin.on('end', function () {
  input_array = input.split("\n");
  var n = parseInt(input_array[0].split(" ")[0]);
  var k = parseInt(input_array[0].split(" ")[1]);
  var phone = input_array[1];
  getNum(n, k, phone);//输出结果
});

getNum(6, 5, "787585")
function getNum(n, k, phone) {
  var minPay;
  if (n < 2 || n > 10000 || k < 2 || k > 10000) {
    return null;
  }
  var sumGap = {};
  for (let i = 0; i < 10; i++) {
    var numGap = [];
    for (let j = 0; j < phone.length; j++) {
      var everyGap = {};
      everyGap.index = j;
      everyGap.val = Math.abs(parseInt(phone[j] - i));
      numGap[j] = everyGap;  //记录每位号码和数字i之间的差
    }
    numGap.sort(function (a, b) { return minToMax(a, b) })
    sumGap[i] = numGap;
  }

  var gapSumArr = [];
  for (var key in sumGap) {
    var sum = 0;
    gapSumArr.push(getSum(sumGap[key], k));
  }

  var minIndex = getMin(gapSumArr);
  minPay = gapSumArr[minIndex];

  console.log(minPay);
  for (let i = 0; i < k; i++) {
    phone = replaceStr(phone, sumGap[minIndex][i].index, minIndex);
  }
  console.log(phone);
}

//按从小到大排序
function minToMax(a, b) {
  if (a.val < b.val) {
    return -1;
  } else if (a.val == b.val) {
    return b.index - a.index;
  } else {
    return 1;
  }
}

//数组前k项和
function getSum(arr, k) {
  var sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i]["val"];
  }
  return sum;
}

//求数组中最小值并返回index
function getMin(arr) {
  var min = arr[0];
  var index = 0;
  var len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  return index;
}


//替换指定位置的字符
function replaceStr(str, index, newstr) {
  let spliceStr = str.substring(0, index) + newstr + str.substring(index + 1);
  return spliceStr;
} */

/* var sourceStr = "@!%12dgsa";
var compareStr = "010111100";

console.log(predict(sourceStr, compareStr));
function predict(sourceStr, compareStr) {
  var reg = /[a-zA-Z0-9]/;
  var result = "";
  var count = 0;

  for (let i = 0; i < sourceStr.length; i++) {
    if (reg.test(sourceStr[i])) {
      result = result + "1";
    } else {
      result = result + "0";
    }
  }

  for (let j = 0; j < result.length; j++) {
    if (result[j] == compareStr[j]) {
      count++;
    }
  }
  return (count / result.length * 100).toFixed(2) + "%";
} */



//?将32位的十进制数转为2进制数
/* var num = parseInt(readline());
var reverse = num;  //余数
var res = [];  //二进制

while (num >= 2) {
  reverse = num % 2;
  res.push(reverse);
  num = Math.floor(num / 2);  //向下取整得到被除数
}

res.push(num);
console.log(res.filter(item => {
  return item === 1
}).length); */


/* //求整数num的数位之和
function getSum (num) {
  let sum = 0;
  if (num < 100) {
    sum = Math.floor(num / 10) + num % 10;
  } else {
    let temp = num % 100;
    sum = Math.floor(num / 100) + Math.floor(temp / 10) + temp % 10;
  }
  return sum;
}


//是否为可达
function isDisabled (x, y, k) {
  console.log(getSum(x) + getSum(y))
  return getSum(x) + getSum(y) <= k;
}


var input = '3 3 4'.trim().split(' ');
var m = parseInt(input[0]);
var n = parseInt(input[1]);
var k = parseInt(input[2]);
var point = [];
var res = 0;

for (let i = 0; i < m; i++) {
  let row = [];
  for (let j = 0; j < n; j++) {
    row.push(0);  //初始为0
  }
  point.push(row);
}

point[0][0] = 1;  //坐标0,0是到达的格子

for (let x = 0; x < m; x++) {
  for (let y = 0; y < n; y++) {
    if (point[x][y] === 1) {
      res++;
      if (0 <= y - 1 && isDisabled(x, y - 1, k)) {  //向左

        point[x][y - 1] = 1;
      }

      if (y + 1 < n && isDisabled(x, y + 1, k)) {  //向右

        point[x][y + 1] = 1;
      }

      if (0 <= x - 1 && isDisabled(x - 1, y, k)) {  //向上
        point[x - 1][y] = 1;
      }

      if (x + 1 < m && isDisabled(x + 1, y, k)) {  //向下
        point[x + 1][y] = 1;
      }
    }
  }
}
console.log(point);
 */
/*
var line;
while (line = readline()) {
  let h = parseInt(line);
  if (1 <= h && h <= 10) {
    for (let i = 0; i < h; i++) {
      print(compare(parseInt(readline())));
    }
  }
}

function compare (num) {
  let sn = 0;
  let n = 0;
  while (sn < num) {
    n++;
    sn = sum(n);
  }
  return n;
}

//根据num求各位数的和
function sum (n) {
  //0<=n  n<10^5
  let m = 1;
  let x = 0;
  while (m < n) {
    m = m * 10;
    x++;
  }
  let sn = 0;
  for (let i = 0; i < x + 1; i++) {
    sn += Math.floor(n / m);
    n = n % m;
    m = parseInt(m / 10);
  }
  sn = sn + n;
  return sn;
}
 */

/* var line;
while (line = readline()) {
  let h = parseInt(line);

  if (1 <= h && h <= 5) {
    for (let i = 0; i < h; i++) {
      let arr = readline().trim().split(' ');
      let a = parseInt(arr[0]), b = parseInt(arr[1]), p = parseInt(arr[2]), q = parseInt(arr[3]);
      print(find(a, b, p, q, 0));
    }
  }
} */

var line = "sdweret"
var len = line.length;
var obj = {}
var arr = [];
for(let i = 0; i<len; i++){
  arr.push(line.slice(i,i+1))
}
 
 function count(str){

 }