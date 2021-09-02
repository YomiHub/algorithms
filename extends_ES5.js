//ES5实现继承--------------------------------
function People(name, sex) {
  this.name = name;
  this.sex = sex;
}

People.prototype.sayName = function () {
  console.log(this.name);
}

function Student(name, grade) {
  People.call(this, name); //继承父级属性
  this.grade = grade;   //添加新属性
}

Student.prototype = new People();  //继承父级的方法
Student.prototype.sayGrade = function () {    //添加新的方法
  console.log(this.grade);
}


var student = new Student("hym", "201611671200");
student.sayName();
student.sayGrade();

//-------------------------------------------------------
function checkInstance(L, R) {
  var O = R.prototype;
  L = L._proto_;

  while (true) {
    if (L === null) {
      return false;
    }
    if (L === O) {
      return true;
    }
    L = L._proto_;
  }
}

var obj = {
  name: "hym"
}

var arr = [1, 2, 3];

console.log(checkInstance(arr, Array));   //true

console.log(typeof null);


//每个构造函数都有一个prototype对象，这个对象指向该构造函数的原型。
function createFactor() {
  var obj = new Object();
  var Constructor = [].shift.apply(arguments);   //删除并返回第一个参数（第一个参数是构造函数）
  obj._proto_ = Constructor.prototype;    //将新对象的内部属性_pro_指向构造函数的原型
  var ret = Constructor.apply(obj, arguments);  //让构造函数的this指向新对象，使新对象可以访问构造函数的方法和属性
  return typeof ret == "object" ? ret : obj;    //处理构造函数返回的是对象的情况
}


function People(name, sex) {
  this.name = name;
  this.sex = sex;
  this.sayName = function () {
    console.log(this.name);
  }
}

var obj = createFactor(People, 'hym', 'women');
obj.sayName();

function createJsonp({ url, parames, callbackFn }) {
  return new Promise((resolve, reject) => {
    var script = document.createElement("script");
    window[callbackFn] = (data) => {
      resolve(data);
      document.body.removeChild(script);
    }

    parames = { ...parames, callbackFn };
    let arr = [];
    for (var key in parames) {
      arr.push(`${key}=${parames[key]}`);
    }

    script.src = `${url}?${arr.join("&")}`;
    script.type = "type/javascript";
    document.body.appendChild(script);

    script.onerror = () => {
      reject(new Error(`fetch${url}failed`));
      document.body.removeChild(script);
    }
  })
}

createJsonp({
  url: "http://localhost",
  parames: { name: "hym" },
  callbackFn: "show"
}).then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e);
})
