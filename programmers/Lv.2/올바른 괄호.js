//https://school.programmers.co.kr/learn/courses/30/lessons/12909


function solution(s) {
  const stack = [];
  let answer = true;
      
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        answer = false;
        break;
      }
  
      if (stack.length !== 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      }
    }
  }

  return stack.length === 0 && answer;
}