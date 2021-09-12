
//查找表类算法

//执行用时 :72 ms, 在所有 javascript 提交中击败了57.01%的用户
//内存消耗 :33.7 MB, 在所有 javascript 提交中击败了93.20%的用户
/* var intersection = function (nums1, nums2) {
  var result = [];
  nums1.forEach(item => {
    if (nums2.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}; */


//执行用时 :56 ms, 在所有 javascript 提交中击败了99.29%的用户
//内存消耗 :34 MB, 在所有 javascript 提交中击败了71.43%的用户
/* var intersection = function (nums1, nums2) {
  const set = new Set();
  nums1.forEach(num1 => {
    if (nums2.includes(num1)) {
      set.add(num1)
    }
  });
  return [...set]
}; */

//执行用时 :56 ms, 在所有 javascript 提交中击败了99.29%的用户
//内存消耗 :34.7 MB, 在所有 javascript 提交中击败了40.82%的用户
/* var intersection = function (nums1, nums2) {
  nums1 = Array.from(new Set(nums1));
  let result = nums1.filter(item => {
    return nums2.includes(item);
  });
  return result;
}; */



//执行用时 :72 ms, 在所有 javascript 提交中击败了57.01%的用户
//内存消耗 :34.4 MB, 在所有 javascript 提交中击败了58.17%的用户
/* var intersection = function (nums1, nums2) {
  return [... new Set(nums1.filter(item => nums2.includes(item)))]
};
 */
//执行用时 :72 ms, 在所有 javascript 提交中击败了57.01%的用户
//内存消耗 :34.1 MB, 在所有 javascript 提交中击败了66.67%的用户
/* var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  return Array.from(new Set(nums2.filter(num => set.has(num))));
};
console.log(intersection(arr1, arr2));
*/

/*
var isHappy = function (n) {
  var sum = 0;
  var resSet = new Set();
  while (sum != 1) {
    sum = getSquare(getRemain(n));
    if (resSet.has(sum)) {
      return false;
    }
    resSet.add(sum);
    n = sum;
  }
  return true;
};

//获取num每个位置的数字
function getRemain(num) {
  var arr = [];
  var last = 0;  //余数
  var divisor = 10; //除数
  if (num < 10) {
    arr.push(num);
    return arr;
  }

  while (last != num) {
    last = num % divisor;
    arr.push(Math.floor(last / (divisor / 10)));
    divisor *= 10;
  }
  return arr;
}

//求平方和
function getSquare(arr) {
  var sum = 0;
  var result = arr.forEach((item) => {
    return sum += item * item;
  })
  return sum;
} */


//判断出现的数之前有没有出现过，出现过就会产生循环，就不是快乐数。可以用集合 set 来记录之前出现的数字。
/*

//执行用时 :76 ms, 在所有 javascript 提交中击败了66.78%的用户
//内存消耗 :34.6 MB, 在所有 javascript 提交中击败了87.73%的用户
var isHappy = function (n) {
  var resSet = new Set();
  while (true) {
    if (n == 1) { return true; }
    var sum = 0;
    while (n !== 0) {
      sum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }

    if (resSet.has(sum)) {
      return false;
    }

    resSet.add(sum);
    n = sum;
  }
}; */


//执行用时 :64 ms, 在所有 javascript 提交中击败了97.09%的用户
//内存消耗 :36.2 MB, 在所有 javascript 提交中击败了25.15%的用户
/* var isHappy = function (n) {
  var loopArr = []
  while (n !== 1) {
    var arr = []
    while (n !== 0) {
      arr.push(n % 10)
      n = Math.floor(n / 10)
    }
    n = arr.reduce((left, right) => left + right * right, 0)
    var isLoop = loopArr.some(item => item == n)
    if (isLoop) {
      return false
    }
    loopArr.push(n)
  }
  return true

};

console.log(isHappy(19)); */

//执行用时 :68 ms, 在所有 javascript 提交中击败了95.59%的用户
//内存消耗 :40.6 MB, 在所有 javascript 提交中击败了41.49%的用户
/* var containsDuplicate = function (nums) {
  var arrSet = new Set();
  var res = false;
  nums.forEach(item => {
    if (arrSet.has(item)) {
      res = true;
    }
    arrSet.add(item);
  });
  return res;
}; */


//执行用时 :76 ms, 在所有 javascript 提交中击败了84.89%的用户
//内存消耗 :42.1 MB, 在所有 javascript 提交中击败了34.27%的用户
/* var containsDuplicate = function (nums) {
  let obj = {}
  for (let i = 0, length = nums.length; i < length; i++) {
    if (obj[nums[i]]) return true
    obj[nums[i]] = true
  }
  return false
};

var containsDuplicate = function (nums) {
  //执行用时 :84 ms, 在所有 javascript 提交中击败了68.49%的用户
  //内存消耗 :40 MB, 在所有 javascript 提交中击败了47.61%的用户
  return nums.length > new Set(nums).size   //return [...new Set(nums)].length!=nums.length;

  //执行用时 :72 ms, 在所有 javascript 提交中击败了90.89%的用户
  //内存消耗 :42 MB, 在所有 javascript 提交中击败了36.72%的用户
  // const map = new Map()
  // nums.forEach((item, key) => map.set(item, key))
  // return map.size !== nums.length
}; */



//先排序再比较相邻元素
/* var containsDuplicate = function (nums) {
  const len = nums.length;
  if (len < 2) {
    return false;
  }

  nums.sort((a, b) => {
    return a - b;
  })

  for (let i = 0; i < len; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4])); */


// 执行用时 :68 ms, 在所有 javascript 提交中击败了82.19%的用户
// 内存消耗 :36 MB, 在所有 javascript 提交中击败了12.23%的用户
/* var intersect = function (nums1, nums2) {
  var obj1 = arrChange(nums1);
  var obj2 = arrChange(nums2);
  var res = [];
  for (var pro in obj1) {
    if (obj2.hasOwnProperty(pro)) {
      obj1[pro].length < obj2[pro].length ? res.push(...obj1[pro]) : res.push(...obj2[pro]);
    }
  }
  return res;
};

function arrChange(arr) {
  var obj = {};
  arr.forEach((item, index) => {
    if (obj.hasOwnProperty(item)) {
      obj[arr[index]].push(item);
    } else {
      obj[arr[index]] = [item];
    }
  })
  return obj;
} */

//执行用时 :76 ms, 在所有 javascript 提交中击败了52.47%的用户
//内存消耗 :34.7 MB, 在所有 javascript 提交中击败了50.79%的用户
/* var intersect = function (nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;
  if (len1 === 0 || len2 === 0) {
    return [];
  }

  var dict1 = {};
  var result = [];
  nums1.forEach((item, index) => {
    if (dict1.hasOwnProperty(item)) {
      dict1[item] += 1;
    } else {
      dict1[item] = 1;
    }
  })

  nums2.forEach((item) => {
    if (dict1.hasOwnProperty(item) && dict1[item] > 0) {
      result.push(item);
      dict1[item] -= 1;
    }
  })

  return result;
} */


//执行用时 :72 ms, 在所有 javascript 提交中击败了66.52%的用户
//内存消耗 :33.9 MB, 在所有 javascript 提交中击败了72.60%的用户
/* var intersect = function (nums1, nums2) {
  return nums1.filter(el => nums2.includes(el) && nums2.splice(nums2.indexOf(el), 1))
};


//执行用时 :64 ms, 在所有 javascript 提交中击败了91.85%的用户
//内存消耗 :33.8 MB, 在所有 javascript 提交中击败了86.17%的用户
var intersect = function(nums1, nums2) {
  var res = [];
  //包含之后再清除
  for(var i=0;i<nums1.length;i++){
      if(nums2.includes(nums1[i])){
          res.push(nums1[i]);
          nums2.splice(nums2.indexOf(nums1[i]), 1);
      }
  }
  return res;
};
console.log(intersect([1, 2, 2, 1], [2, 2])); */

//执行用时 :88 ms, 在所有 javascript 提交中击败了68.61%的用户
//内存消耗 :38.2 MB, 在所有 javascript 提交中击败了39.81%的用户

//字典对各个字符出现的次数进行统计
/* var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  var calT = cal(t);
  for (var ele of s) {
    if (!t.includes(ele) || calT[ele] == 0) {
      return false;
    }
    calT[ele]--;
  }
  return true;
};

function cal(str) {
  var times = {};
  for (var ele of str) {
    if (times.hasOwnProperty(ele)) {
      times[ele]++;
    } else {
      times[ele] = 1;
    }
  }
  return times;
} */



//转换成数组排序后对比

//执行用时 :116 ms, 在所有 javascript 提交中击败了48.25%的用户
//内存消耗 :38.6 MB, 在所有 javascript 提交中击败了28.30%的用户
var isAnagram = function (s, t) {
  return JSON.stringify(s.split('').sort()) === JSON.stringify(t.split('').sort());
};



//执行用时 :132 ms, 在所有 javascript 提交中击败了26.88%的用户
//内存消耗 :38.1 MB, 在所有 javascript 提交中击败了43.10%的用户
/* var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};

var isAnagram = function (s, t) {
  const sort = str => [...str]
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join('')
  return sort(s) === sort(t)   //如果输入字符串包含 unicode 字符
}; */

/*
var isIsomorphic = function (s, t) {
  var sArr = s.split('');
  var record = {};
  if (s.length != t.length) {
    return false;
  }
  for (let item of t) {
    let oldStr = sArr.shift();
    console.log(oldStr)
    if (item !== oldStr) {
      if (record.hasOwnProperty(oldStr)) {
        return false;
      }
      sArr = repalaceStr(sArr, oldStr, item);
      record[item] = 1;
    }
  }
  return true;
};

function repalaceStr(arr, oldStr, newStr) {
  while (arr.includes(oldStr)) {
    arr.splice(arr.indexOf(oldStr), 1, newStr);
  }
  return arr;
} */

//执行用时 :60 ms, 在所有 javascript 提交中击败了99.19%的用户
//内存消耗 :35.3 MB, 在所有 javascript 提交中击败了66.33%的用户
/* var isIsomorphic = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
      return false;
    }
  }
  return true;
};

//哈希
//执行用时 :72 ms, 在所有 javascript 提交中击败了81.91%的用户
//内存消耗 :35.2 MB, 在所有 javascript 提交中击败了74.49%的用户
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let hashOne = {}, hashTwo = {}, len = s.length;
  for (let i = 0; i < len; i++) {
    let a = s[i], b = t[i];
    if (!hashOne[a] && !hashTwo[b]) {
      hashOne[a] = b;
      hashTwo[b] = a;
    } else if (hashOne[a] !== b || hashTwo[b] !== a) {
      return false;
    }
  }
  return true;
};


//执行用时 :80 ms, 在所有 javascript 提交中击败了54.02%的用户
//内存消耗 :35.8 MB, 在所有 javascript 提交中击败了48.98%的用户
var isIsomorphic = function (s, t) {
  //同构则说明能相互转化
  var map = new Map();
  var map2 = new Map();
  for (var i = 0; i < s.length; i++) {
    map.set(s[i], t[i]);
    map2.set(t[i], s[i])
  }
  for (var j = 0; j < s.length; j++) {
    if (map.get(s[j]) !== t[j]) {
      return false;
    }
    if (map2.get(t[j]) !== s[j]) {
      return false;
    }
  }
  return true;
};


//数组
//执行用时 :68 ms, 在所有 javascript 提交中击败了89.95%的用户
//内存消耗 :35.7 MB, 在所有 javascript 提交中击败了51.02%的用户
var isIsomorphic = function (s, t) {
  var a = [], l = [];
  if (s.length == 0) {
    return true;
  }
  for (var i = 0; i < s.length; i++) {
    if (s[i] in a) {
      if (a[s[i]] !== t[i]) {  //已经替换过的情况下，被替换字符与替换字符唯一对应
        return false;
      }
    } else {
      if (l.indexOf(t[i]) !== -1) {  //替换字符唯一
        return false;
      }
      a[s[i]] = t[i];
      l.push(t[i]);
    }
  }
  return true;
};
console.log(isIsomorphic("paper", "title"))

 */


//执行用时 :100 ms, 在所有 javascript 提交中击败了40.40%的用户
//内存消耗 :44.6 MB, 在所有 javascript 提交中击败了10.81%的用户
/* var frequencySort = function (s) {
  var calTimes = {};
  for (let str of s) {
    if (!calTimes.hasOwnProperty(str)) {
      calTimes[str] = 1;
    } else {
      calTimes[str]++;
    }
  }

  var sortStr = sortObj(calTimes);
  var res = '';
  sortStr.forEach((key) => {
    while (calTimes[key] > 0) {
      res += key;
      calTimes[key]--;
    }
  })
  return res;
}

function sortObj(obj) {
  return Object.keys(obj).sort((a, b) => {
    return obj[b] - obj[a];
  })
}

console.log(frequencySort('cccaaa'))


//map

//执行用时 :76 ms, 在所有 javascript 提交中击败了96.69%的用户
//内存消耗 :38.4 MB, 在所有 javascript 提交中击败了54.05%的用户
var frequencySort = function (str) {
  let map = new Map()
  let result = ''
  str.split('').forEach(item => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })
  map = [...map]
    .sort((a, b) => b[1] - a[1])
    .map(item => {
      result += item[0].repeat(item[1])
    })
  return result
}

//执行用时 :136 ms, 在所有 javascript 提交中击败了7.28%的用户
//内存消耗 :44 MB, 在所有 javascript 提交中击败了24.32%的用户
var frequencySort = function (s) {
  const sArr = [...s];
  const record = new Map();

  sArr.forEach(value => {
    record.set(value, (record.get(value) || 0) + 1)
  })
  return sArr.sort((a, b) => record.get(b) == record.get(a) ? a.charCodeAt(0) - b.charCodeAt(0) : record.get(b) - record.get(a)).join('');
}; */

/*
var twoSum = function (nums, target) {
  var res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        res.push(i, j);
        return res;
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));


//dict查找表
var twoSum = function (nums, target) {
  let res = {};
  for (let i = 0; i < nums.length; i++) {
    if (res.hasOwnProperty(nums[i])) {
      return [res[nums[i]], i];  //找到i下标对应要找的值，则返回
    } else {
      res[target - nums[i]] = i; //保存对应i下标要找的值
    }
  }
};

//执行用时 :152 ms, 在所有 javascript 提交中击败了33.55%的用户
//内存消耗 :34.3 MB, 在所有 javascript 提交中击败了84.79%的用户
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let result = nums.lastIndexOf(target - nums[i]);
    if (result !== -1 && result !== i) {
      return [i, result]
    }
  }
};

//执行用时 :188 ms, 在所有 javascript 提交中击败了21.58%的用户
//内存消耗 :34.2 MB, 在所有 javascript 提交中击败了86.93%的用户
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    let j = nums.indexOf(difference);
    if (j > -1 && i != j) {
      return [i, j];
    }
  }
}; */

/*

//超时：311 / 313 个通过测试用例
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  let res = [];
  let key = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let index = nums.indexOf(-(nums[i] + nums[j]), j + 1);
      if (index != -1) {
        let temp = [nums[i], nums[j], nums[index]].sort((a, b) => { return a - b })
        let str = temp.join('');
        if (!key.hasOwnProperty(str)) {
          key[str] = 1;
          res.push(temp);
        }
      }
    }
  }
  return res;
}; */

//双指针

//执行用时 :196 ms, 在所有 javascript 提交中击败了68.70%的用户
//内存消耗 :46.8 MB, 在所有 javascript 提交中击败了57.55%的用户
/* var threeSum = function (nums) {
  if (!nums || nums.length < 3) return [];
  nums.sort((a, b) => { return a - b; });

  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    //去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return res;
};


console.log(threeSum([-1, 0, 1, 2, -1, -4])); */

//执行用时 :96 ms, 在所有 javascript 提交中击败了95.30%的用户
//内存消耗 :37.1 MB, 在所有 javascript 提交中击败了42.64%的用户
/*
var fourSum = function (nums, target) {
  if (!nums || nums.length < 4) return [];
  nums.sort((a, b) => { return a - b; });

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let threeSum = target - nums[i];
    if (i > 0 && nums[i] == nums[i - 1]) { continue; }

    for (let j = i + 1; j < nums.length - 2; j++) {
      let l = j + 1;
      let r = nums.length - 1;

      if (j > i + 1 && nums[j] == nums[j - 1]) { continue; }
      while (l < r) {
        let sum = nums[j] + nums[l] + nums[r];
        if (sum < threeSum) {
          l++;
        } else if (sum > threeSum) {
          r--;
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (nums[l] === nums[l + 1]) l++;
          while (nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        }
      }
    }
  }
  return res;
};

//固定中间两个数然后不断逼近
//执行用时 :124 ms, 在所有 javascript 提交中击败了48.90%的用户
//内存消耗 :37.7 MB, 在所有 javascript 提交中击败了31.01%的用户
var fourSum = function (nums, target) {
  if (nums.length < 4)
    return [];
  nums.sort((a, b) => a - b);
  var hash = new Map();
  for (var midF = 1; midF < nums.length - 2; midF++) {
    for (var mid = midF + 1; mid < nums.length - 1; mid++) {
      if (mid - 1 !== midF && nums[mid] === nums[mid - 1])
        continue;
      var start = 0,
        end = nums.length - 1;
      while (start < midF && end > mid) {
        if (nums[start] + nums[midF] + nums[mid] + nums[end] === target) {
          var arr = [nums[start], nums[midF], nums[mid], nums[end]],
            str = arr.join('-');
          if (hash.has(str) === false) {
            hash.set(str, arr);
          }
        }
        if (nums[start] + nums[midF] + nums[mid] + nums[end] > target)
          end -= 1;
        else
          start += 1;
      }
    }
  }
  return [...hash].map((a) => a[1]);
};


//双指针+Set去重
//执行用时 :124 ms, 在所有 javascript 提交中击败了48.90%的用户
//内存消耗 :38 MB, 在所有 javascript 提交中击败了24.81%的用户

var fourSum = function (nums, target) {
  let set = new Set()
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let start = j + 1, end = nums.length - 1
      while (start < end) {
        let sum = nums[i] + nums[j] + nums[start] + nums[end]
        if (sum < target) {
          start++
        } else if (sum > target) {
          end--
        } else {
          set.add([nums[i], nums[j], nums[start], nums[end]].join(','))
          start++
          end--
        }
      }
    }
  }
  return [...set].map(v => v.split(',').map(v => +v))
};


console.log(fourSum([0, 0, 0, 0], 0)); */

//执行用时 :144 ms, 在所有 javascript 提交中击败了81.95%的用户
//内存消耗 :51.3 MB, 在所有 javascript 提交中击败了69.23%的用户
/* var fourSumCount = function (A, B, C, D) {
  let sumMap = new Map();
  let count = 0;

  for (let a of A) {
    for (let b of B) {
      sumMap.set(a + b, sumMap.get(a + b) ? sumMap.get(a + b) + 1 : 1);
    }
  }

  for (let c of C) {
    for (let d of D) {
      let target = 0 - c - d;
      if (sumMap.has(target)) {
        count += sumMap.get(target);
      }
    }
  }
  return count;
};

//执行用时 :364 ms, 在所有 javascript 提交中击败了45.11%的用户
//内存消耗 :78.7 MB, 在所有 javascript 提交中击败了7.69%的用户

var fourSumCount = function (A, B, C, D) {
  const record = {};
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      if (record[C[i] + D[j]]) {
        record[C[i] + D[j]]++
      } else {
        record[C[i] + D[j]] = 1
      }
    }
  }
  let res = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (record[0 - A[i] - B[j]]) {
        res += record[0 - A[i] - B[j]]
      }
    }
  }
  return res;
}; */


/* //执行用时 :156 ms, 在所有 javascript 提交中击败了62.75%的用户
//内存消耗 :45.7 MB, 在所有 javascript 提交中击败了55.43%的用户
var groupAnagrams = function (strs) {
  var tag = {};
  var res = [];
  strs.forEach((item) => {
    let oderStr = item.split('').sort().join('');
    if (tag.hasOwnProperty(oderStr)) {
      tag[oderStr].push(item);
    } else {
      tag[oderStr] = [item];
    }
  })

  for (var key in tag) {
    res.push(tag[key]);
  }

  return res;
};

//map,排序后的字符串作为key
//执行用时 :144 ms, 在所有 javascript 提交中击败了83.75%的用户
//内存消耗 :47.1 MB, 在所有 javascript 提交中击败了29.34%的用户
const groupAnagrams = function (strs) {
  let sMap = new Map();
  for (let ss of strs) {
    let curr = ss.split('').sort(function (a, b) {
      return a.charCodeAt(0) - b.charCodeAt(0);
    }).join('');
    let tmp = (sMap.get(curr) || []);
    tmp.push(ss);
    sMap.set(curr, tmp);
  }
  return Array.from(sMap.values());  //return [... sMap.values()];
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
 */

//执行用时 :180 ms, 在所有 javascript 提交中击败了89.47%的用户
//内存消耗 :41.7 MB, 在所有 javascript 提交中击败了59.38%的用户
/* var numberOfBoomerangs = function (points) {
  var len = points.length;

  var count = 0;
  for (let i = 0; i < len; i++) {
    let sumMap = new Map();
    for (let j = 0; j < len; j++) {
      if (i === j) continue;
      let sum = getDis(points[i], points[j]);  //节省内存可以直接计算d = dx * dx + dy * dy
      if (sumMap.has(sum)) {
        let num = sumMap.get(sum);
        count += num;
        sumMap.set(sum, num + 1);
      } else {
        sumMap.set(sum, 1);
      }
      //上述map条件判断可以简写为 let count = ~~map.get(dis);
    }
  }
  return count * 2;
};

function getDis(point1, point2) {
  return (point1[0] - point2[0]) * (point1[0] - point2[0]) + (point1[1] - point2[1]) * (point1[1] - point2[1]);
}

console.log(numberOfBoomerangs([[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]))

 */

//执行用时 :1816 ms, 在所有 javascript 提交中击败了7.32%的用户
//内存消耗 :85.7 MB, 在所有 javascript 提交中击败了10.00%的用户
/* var maxPoints = function (points) {
  var len = points.length;
  var res = 0;
  if (len < 3) {
    return len;
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i == j) continue;

      let count = 2;
      //p1与p2为同一个坐标
      if (points[j][0] == points[i][0] && points[j][1] == points[i][1]) {
        count = 3;
        res = res < count ? count : res;
        continue;
      }
      for (let k = i + 1; k < len; k++) {
        if (k == i || k == j) continue;

        let ifSameLine = ifOnline(points[i], points[j], points[k]);
        if (ifSameLine) {
          count++;
        }
      }
      res = res < count ? count : res   //if (res < count) {res = count;  }
    }
  }
  return res;
};

function ifOnline(p1, p2, p3) {
  if ((p2[0] == p1[0] && p3[0] == p1[0]) || (p2[1] == p1[1] && p3[1] == p1[1])) {
    return true;
  } else if ((p2[0] == p1[0] && p3[0] !== p1[0]) || (p2[1] == p1[1] && p3[1] !== p1[1])) {
    return false;
  } else {
    //BigInt是JavaScript中的一个新的原始类型，可以用任意精度表示整数。使用BigInt，即使超出JavaScript Number 的安全整数限制，也可以安全地存储和操作大整数(chrome 67+开始支持BigInt)
    return BigInt(p3[0] - p1[0]) * BigInt(p2[1] - p1[1]) == BigInt(p3[1] - p1[1]) * BigInt(p2[0] - p1[0]);  //超出安全数的情况9008126584144800n 9008126584144801n
    //(x-x1)/(x2-x1) = (y-y1)/(y2-y1)
  }
}


//执行用时 :88 ms, 在所有 javascript 提交中击败了78.05%的用户
//内存消耗 :38 MB, 在所有 javascript 提交中击败了60.00%的用户
var maxPoints = function (points) {
  //求最大公约数
  function gcd(x, y) {
    if (y === 0) {
      return x;
    }
    return gcd(y, x % y);
  }

  if (points.length <= 2) {
    return points.length;
  }

  let result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < points.length - 1; ++i) {
    let max = 0;
    let repeat = 0;
    let slope = new Map();

    for (let j = i + 1; j < points.length; ++j) {
      let dx = points[i][0] - points[j][0];
      let dy = points[i][1] - points[j][1];

      if (dy === 0 && dx === 0) {
        ++repeat;
        continue;
      }

      const g = gcd(dy, dx);
      if (g !== 0) {
        dx /= g;
        dy /= g;
      }

      const key = `${dx}/${dy}`;  //分数表示
      let count = (slope.get(key) || 0) + 1;

      slope.set(key, count);
      max = Math.max(max, count);
    }
    result = Math.max(result, repeat + max + 1);
  }

  return result;
};


//执行用时 :112 ms, 在所有 javascript 提交中击败了48.78%的用户
//内存消耗 :38.5 MB, 在所有 javascript 提交中击败了60.00%的用户
var maxPoints = function (points) {
  if (points.length == 0)
    return 0;
  var result = 0,
    pointsMap = new Map();
  for (var i = 0; i < points.length; i++) {
    if (pointsMap.has(points[i].toString())) {
      pointsMap.set(points[i].toString(), pointsMap.get(points[i].toString()) + 1);  //统计相同坐标数
    } else {
      pointsMap.set(points[i].toString(), 1);
    }
  }
  var pointsArr = [...pointsMap];  //解构赋值，包含key和value的二维数组
  console.log(pointsArr);
  if (pointsArr.length == 1)
    return pointsArr[0][1];
  for (var i = 0; i < pointsArr.length; i++) {
    var map = new Map();
    for (var ii = i + 1; ii < pointsArr.length; ii++) {
      var res = 0;
      if (pointsArr[i][0].split(",")[0] - pointsArr[ii][0].split(",")[0] === 0)  //x轴坐标相同
        res = "y";
      if (pointsArr[i][0].split(",")[1] - pointsArr[ii][0].split(",")[1] === 0)  //y轴坐标相同
        res = "x";
      res = res == 0 ? (pointsArr[i][0].split(",")[0] - pointsArr[ii][0].split(",")[0]) / (pointsArr[i][0].split(",")[1] - pointsArr[ii][0].split(",")[1]) : res;   //
      if (map.has(res)) {
        map.set(res, map.get(res) + pointsArr[ii][1]);   //相同斜率下，相同y坐标的数量
      } else {
        map.set(res, pointsArr[ii][1] + pointsArr[i][1]);  //重复坐标数
      }
    }
    map.forEach((value, key) => {
      result = result > value ? result : value;
    });
  }
  return result;
};

console.log(maxPoints([[0, 0], [94911151, 94911150], [94911152, 94911151]])) */

/* //执行用时 :1840 ms, 在所有 javascript 提交中击败了13.58%的用户
//内存消耗 :36.2 MB, 在所有 javascript 提交中击败了61.16%的用户
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let first = nums.indexOf(nums[i], i);
    let last = nums.indexOf(nums[i], first + 1);

    if (last != -1) {
      // console.log(first, last)
      let abs = Math.abs(last - first)
      if (abs <= k) {
        return true
      }
    }
  }

  return false;
};


//执行用时 :68 ms, 在所有 javascript 提交中击败了92.48%的用户
//内存消耗 :39 MB, 在所有 javascript 提交中击败了50.42%的用户
var containsNearbyDuplicate = function (nums, k) {
  let len = nums.length;

  if (len <= 1) return false;
  let count = new Set();
  for (let i = 0; i < len; i++) {
    if (count.has(nums[i])) {
      return true;
    }

    count.add(nums[i]);
    if (count.size > k) {
      count.delete(nums[i - k]);
    }
  }
  return false;
};

//执行用时 :1604 ms, 在所有 javascript 提交中击败了20.00%的用户
//内存消耗 :38.6 MB, 在所有 javascript 提交中击败了53.72%的用户
var containsNearbyDuplicate = function (nums, k) {
  let len = nums.length;

  if (len <= 1) return false;
  let count = [];
  for (let i = 0; i < len; i++) {
    if (count.includes(nums[i])) {
      return true;
    }

    count.push(nums[i]);
    if (count.length > k) {
      count.shift();
    }
  }
  return false;
};

//执行用时 :96 ms, 在所有 javascript 提交中击败了47.52%的用户
//内存消耗 :42.6 MB, 在所有 javascript 提交中击败了14.05%的用户
var containsNearbyDuplicate = function (nums, k) {
  let hash = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = i;
    } else {
      if ((i - hash[nums[i]]) <= k) return true;
      hash[nums[i]] = i;
    }
  }
  return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)) */

//执行用时 :260 ms, 在所有 javascript 提交中击败了64.52%的用户
//内存消耗 :35.4 MB, 在所有 javascript 提交中击败了29.63%的用户
/* var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let len = nums.length;
  if (len <= 1) return false;
  var res = [];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < res.length; j++) {
      if (Math.abs(res[j] - nums[i]) <= t) { //&& j - i <= k
        return true;
      }
    }

    res.push(nums[i]);
    if (res.length > k) {
      res.shift();
    }
  }
  return false;
};
//执行用时 :64 ms, 在所有 javascript 提交中击败了94.19%的用户
//内存消耗 :36.2 MB, 在所有 javascript 提交中击败了22.22%的用户
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let len = nums.length;

  if (len <= 1) return false;
  let count = new Set();
  for (let i = 0; i < len; i++) {
    if (t == 0) {
      if (count.has(nums[i])) {
        return true;
      }
    } else {
      for (let x of count) {
        if (Math.abs(nums[i] - x) <= t) {
          return true;
        }
      }
    }
    count.add(nums[i]);
    if (count.size > k) {
      count.delete(nums[i - k]);
    }
  }
  return false;
};

//执行用时 :300 ms, 在所有 javascript 提交中击败了53.55%的用户
//内存消耗 :35.4 MB, 在所有 javascript 提交中击败了25.93%的用户
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      var temp = Math.abs(nums[j] - nums[i]);
      if (temp <= t && j - i <= k) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate(nums = [1, 5, 9, 1, 5, 9], k = 2, t = 3))
 */

//!无重复字符的最长子串:给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度
//维护数组：使用一个数组来维护滑动窗口 时间复杂度：O(n<sup>2</sup>)
//循环字符，将唯一的字符放入数组，非唯一时，移除包括重复字符之前的所有字符，接着比较数组长度与最长的长度
/* var lengthOfLongestSubstring = function(s) {
  let arr = [], max=0;  //需要比较大小，先设置max默认为0
  for(let i = 0; i<s.length; i++){
    let index = arr.indexOf(s[i]); //前面是否已经出现过该字符
    if(index!==-1){
      arr.splice(0,index+1);  //已经出现重复字符，移除前面的元素
    }
    arr.push(s.charAt(i)); //将遍历的字符放入数组
    max = Math.max(arr.length,max);
  }
  return max;
}; */

//维护下标： 使用下标来维护滑动窗口（将上述的数组长度变为两个下标变量的差值） 时间复杂度：O(n<sup>2</sup>)
/* var lengthOfLongestSubstring = function(s) {
  let index = 0, max = 0;
  for(let i = 0,j = 0; j<s.length; j++){
    index = s.substring(i,j).indexOf(s[j]);

    if(index!==-1){
      i = i+index+1;  //移到重复元素的下一个元素
    }
    max = Math.max(max,j-i+1)
  }
  return max;
} */

//结合Map优化时间复杂度：O(n)
var lengthOfLongestSubstring = function(s){
  let map = new Map(),max = 0;
  for(let i = 0,j = 0; j<s.length; j++){
    if(map.has(s[j])){
      //已经存在元素，则将无重复子串开始下标重置为相同字符的下一个位置
       i = Math.max(map.get(s[j])+1,i);  //注意该重复下标是比当前i大的情况
    }
    max = Math.max(j-i+1,max);
    map.set(s[j],j);
  }
  return max;
}

var testStr = 'pwwkew';
console.log(lengthOfLongestSubstring(testStr))  //3
