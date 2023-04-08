//https://school.programmers.co.kr/learn/courses/30/lessons/86051


function solution(numbers) {
  const n = 45;
  return n - numbers.reduce((a, b) => a + b);
}
