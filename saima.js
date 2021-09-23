//逆序处理字符串奇数位和偶数位数字
var line;
while (line = read_line()) {
  var len = line.length;
  if (!/^\d{16}$/.test(line)) {
    console.log('error');
  } else {
    console.log(cul(line, len));
  }
}

function cul (line, len) {
  var count = 0;
  for (let i = 1; i < len + 1; i++) {
    let index = len - i;  //逆序数位对应的字符串下标
    let num = parseInt(line[index]);
    if (i % 2 == 0) {
      let x = num * 2 > 9 ? (num * 2 - 9) : num * 2;  //?偶数位下标乘以2为两位数时需要减9
      count += x;
    } else {
      count += num;
    }
  }
  // console.log(count);
  return count % 10 == 0 ? 'ok' : 'error';
}



//合并集合
//输入
// 多组（不超过 5 组）数据。

// 每组输入数据分为三行，第一行有两个数字 n,m($0＜n,m\leq10000$)，分别表示集合 A 和集合 B 的元素个数。
// 后两行分别表示集合 A 和集合 B。每个元素为不超出 int 范围的整数，每个元素之间有一个空格隔开。

// 输出
// 针对每组数据输出一行数据，表示合并后的集合，要求从小到大输出，每个元素之间有一个空格隔开。
var input;
while (input = read_line()) {
  var n = + input.split(' ')[0];
  var m = + input.split(' ')[1];
  if (n > 0 && m > 0) {
    var aArr = [];
    var bArr = [];
    var a = '';
    var b = '';
    //?测试数据中可能包含一行元素不够n m定义长度，需要读取多行满足集合个数的情况
    while (aArr.length !== n) {
      a += read_line();
      aArr = a.split(' ');
    }
    while (bArr.length !== m) {
      b += read_line();
      bArr = b.split(' ');
    }
    console.log(getAll(aArr, bArr));
  }
}

function getAll (aArr, bArr) {
  var result = aArr.concat(bArr).filter((item, index, arr) => {
    if (index == arr.indexOf(item)) {
      return true;
    }
  }).sort((a, b) => {
    return a - b;
  });

  return result.join(' ');
} 


//预测购买商品总花费的最小和最大值
var input;
while (input = read_line()) {
  var n = +input.split(' ')[0];  //商品价格标签数
  var m = +input.split(' ')[1]; //购买商品标签总数
  var nArr = []; //n个标签价格
  var mObj = {}; //m个物品标签，以及购买的数量

  while (nArr.length !== n) {
    nArr.push(read_line().split(' '));
  }

  for (let i = 0; i < m; i++) {
    var shop = read_line().trim();  //物品标签
    if (mObj.hasOwnProperty(shop)) {
      mObj[shop] += 1;
    } else {
      mObj[shop] = 1;
    }
  }
}
