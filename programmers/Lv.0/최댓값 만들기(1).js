//https://school.programmers.co.kr/learn/courses/30/lessons/120847


function solution(numbers) {
  const answer = numbers.sort((a, b) => a - b).slice(-2);
  return answer[0] * answer[1];
}
