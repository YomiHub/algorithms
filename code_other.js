// 递归调用----------------------------------
function permutations(targets, num) {
  var origin = [];
  var arr = [];

  function arranges(targets, num, cur) {
    if (num === 1) {
      for (var i = 0; i < targets.length; i++) {
        var insert = cur.slice();
        insert.push(targets[i]);
        arr.push(insert);
      }
    } else {
      num -= 1;
      for (var i = 0; i < targets.length; i++) {
        var insert = cur.slice();
        var newTargets = targets.slice();
        insert.push(targets[i]);
        newTargets.splice(i, 1);
        arranges(newTargets, num, insert);
      }
    }
  }

  arranges(targets, num, origin);
  return arr;
}
// console.log(JSON.stringify(permutations([1, 2, 3], 2)));

