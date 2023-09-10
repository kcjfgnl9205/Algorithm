// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    const x = countDivisor(i);
    if (x % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

function countDivisor(n) {
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      cnt++;
    }
  }

  return cnt;
}
