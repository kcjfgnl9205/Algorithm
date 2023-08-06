//https://school.programmers.co.kr/learn/courses/30/lessons/132267


function solution(a, b, n) {
  var answer = 0;
  
  // 빈병을 받을 수 없을때까지 loop
  while (n >= a) {
      const x = Math.floor(n / a) * b;
      answer += x;
      n = x + (n % a);
  }
  
  return answer;
}