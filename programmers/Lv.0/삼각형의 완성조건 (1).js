//https://school.programmers.co.kr/learn/courses/30/lessons/120889


function solution(sides) {
  const [a, b, c] = sides.sort((a, b) => a - b);
  return c < a + b ? 1 : 2;
}
