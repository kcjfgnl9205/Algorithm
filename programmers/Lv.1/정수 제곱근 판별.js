//https://school.programmers.co.kr/learn/courses/30/lessons/12934


function solution(n) {
  let answer = 1;
  while(answer <= n) {
      if (answer ** 2 > n) {
          answer = -1;
          break;
      }
      
      if (answer ** 2 === n) {
          answer = answer + 1;
          break;
      }
      
      answer++;
  }
  return answer === -1 ? -1 : answer ** 2;
}
