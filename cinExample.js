//单行
var line;
while (line = read_line()) {
  line = line.split(' ');
  print(parseInt(line[0]) + parseInt(line[1]));
}


//两行输入
var first_line = read_line();
var arr = [];
var line;
while (line = read_line()) {
  arr.push(line);
  //把后边的每一行都当作一个字符串，作为数组的元素填入数组中，这样就可以操作了
}
print(arr);


// 赛码网 Javascript------------------------------------
var N, M;
// 每组第一行是2个整数，N和M，至于为啥用while，因为是多组。
while ((N = readInt()) != null && (M = readInt()) != null) {
  print(N + ' ' + M);
  // 循环读取“接下来的M行”
  for (let i=0; i < M; i++) {
    let a = readInt();
    let b = readInt();
    let c = readInt();
    // 每行是3个整数，a，b，c。
    print(a + ' ' + b + ' ' + c);
  }
  // M行读取完了，就又要开始下一组了，去while那里。
}


//多行
var N, M;
// 每组第一行是2个整数，N和M，至于为啥用while，因为是多组。
while ((N = readInt()) != null && (M = readInt()) != null) {
  if (1 <= N && N <= 10 && 1 <= M && M <= 10) {
    // 循环读取“接下来的M行”
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        let a = readInt();
        let b = readInt();
        let c = readInt();
        // 每行是N个整数，a，b，c。
      }

      print(a + ' ' + b + ' ' + c);
    }
  }

}

//牛客网node-----------------------------------------------------

//单行
//参考判题系统，但是只能读取单行的输入
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (line) {
  var tokens = line.split(' ');
  console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
});


//单行多行
//单行就只取input_array[0];
process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = "";
var input_array = "";
process.stdin.on('data', function (data) {
  input += data;
});
process.stdin.on('end', function () {
  input_array = input.split("\n");
  var line_1 = input_array[0];
  var line_2 = input_array[1];
  var line_3 = input_array[2];
  //这里分析出填入的参数
  console.log(func(p1, p2));//输出结果
});

//这里是处理函数
function func (p1, p2) {

}


//多行
//多行的输入
process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = "";
var input_array = "";
process.stdin.on('data', function (data) {
  input += data;//这里的data保存的是以换行\n所有的加起来的一个字符串
});
//如下表示每个用例有三行的时候的结果

//注：如有数组的时候，数组内保存的是字符串形式，需要添加 + 来转化成真正的数字。

//以回车来分割 
//到这个地方会把每行当成一个字符串保存到一个数组中去，数组最后一项是一个空字符""

//所以按照题目给定，依次把数组的元素赋值给变量就行了
//这里就要观察所给用例的特征了，依次来进行输出 
process.stdin.on('end', function () {
  input_array = input.split("\n"); //以回车来分割的
  var line_1 = input_array[0];
  var line_2 = input_array[1];
  var line_3 = input_array[2];
  console.log(line_1);
});


