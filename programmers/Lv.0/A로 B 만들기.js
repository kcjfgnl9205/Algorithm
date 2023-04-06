//https://school.programmers.co.kr/learn/courses/30/lessons/120886


function solution(before, after) {
  let beforeArr = before.split("");
  let answer = 1;
  
  for (let i = 0; i < after.length; i++) {
      if (beforeArr.includes(after[i])) {
          const index = beforeArr.indexOf(after[i]);
          beforeArr = beforeArr.filter((el, i) => i !== index);
      } else {
          answer = 0;
          break;
      }
  }
  
  return answer;
}
