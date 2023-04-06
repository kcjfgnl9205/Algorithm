//https://school.programmers.co.kr/learn/courses/30/lessons/87389


function solution(n) {
  if (n % 2 === 1) {
      return 2;
  } else {
      for (let i = 3; i < n; i++) {
          if (n % i === 1) {
              return i;
          }
      }
  }
}
