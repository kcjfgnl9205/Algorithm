//https://school.programmers.co.kr/learn/courses/30/lessons/12943#


function solution(num) {
  let n = num;    
  let answer = 0;
  for (let i = 0; i < 500; i++) {
      if (n === 1) break;
      
      answer++;
      
      n = n % 2 === 0 ? n / 2 : (n * 3) + 1;
      if (n === 1) {
          break;
      }
  }
  
  return answer >= 500 ? -1 : answer;
}
