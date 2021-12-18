//有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你不能重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
 /**
 * @param {string} s
 * @return {string[]}
 */
// 不愧是我，向来暴解（分成4段即插入三个"."）
var restoreIpAddresses = function(s) {
  let len = s.length;
  if(len<4) return [];

  let res = [];
  let dfs = (str,count,i)=>{
    if(i>=len||count==3){
      //最后一位不能空，且最后一位不能有前导0，且必须满足小于等于255
      let last = s.substr(i);
      //已经插入3个点
      if(count==3&&last.length>0&&last.length<=3&&last<=255){
        if((last.length>1&&last[0]!=0)||last.length==1){
          res.push(str+last);
        }
      }
      return;
    }

    if(s[i]==0){
      dfs(str+s.substr(i,1)+".",count+1,i+1); //不能包含前导0所以只有一种方式
    }else{
      dfs(str+s.substr(i,1)+".",count+1,i+1); 

      if(i+2<=len){
        dfs(str+s.substr(i,2)+".",count+1,i+2); 
      }
      //检查三位数的合法性
      if(i+3<=len&&s.substr(i,3)<=255){
        dfs(str+s.substr(i,3)+".",count+1,i+3); 
      }
    }
  }
  dfs("",0,0)
  return res;
};

// 官解：回溯
var restoreIpAddresses = function(s) {
  const SEG_COUNT = 4;
  const segments = new Array(SEG_COUNT);
  const ans = [];

  const dfs = (s, segId, segStart) => {
      // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
      if (segId === SEG_COUNT) {
          if (segStart === s.length) {
              ans.push(segments.join('.'));
          }
          return;
      }

      // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
      if (segStart === s.length) {
          return;
      }

      // 由于不能有前导零，如果当前数字为 0，那么这一段 IP 地址只能为 0
      if (s.charAt(segStart) === '0') {
          segments[segId] = 0;
          dfs(s, segId + 1, segStart + 1);
      }

      // 一般情况，枚举每一种可能性并递归
      let addr = 0;
      for (let segEnd = segStart; segEnd < s.length; ++segEnd) {
          addr = addr * 10 + (s.charAt(segEnd) - '0');
          if (addr > 0 && addr <= 0xFF) {
              segments[segId] = addr;
              dfs(s, segId + 1, segEnd + 1);
          } else {
              break;
          }
      }
  }

  dfs(s, 0, 0);
  return ans;
};
console.log(restoreIpAddresses("25525511135"))
/* 示例 4：

输入：s = "010010"
输出：["0.10.0.10","0.100.1.0"]
示例 5：

输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 

提示：

0 <= s.length <= 20
s 仅由数字组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/restore-ip-addresses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */