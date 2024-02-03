// https://school.programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

function solution(numbers) {
  const s = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      s.add(numbers[i] + numbers[j]);
    }
  }

  return [...s].sort((a, b) => a - b);
}
