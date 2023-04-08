//https://school.programmers.co.kr/learn/courses/30/lessons/12941


function solution(A,B){
  const a = A.sort((a, b) => b - a);
  const b = B.sort((a, b) => a - b);
  let answer = 0;
  
  for (let i = 0; i < a.length; i++) {
      answer += a[i] * b[i];
  }

  return answer;
}
