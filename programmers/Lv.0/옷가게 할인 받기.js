//https://school.programmers.co.kr/learn/courses/30/lessons/120818


function solution(price) {
  let answer = price;
  if (price >= 500000) {
      answer = Math.floor(price * 0.8);
  } else if (price >= 300000) {
      answer = Math.floor(price * 0.9);
  } else if (price >= 100000) {
      answer = Math.floor(price * 0.95);
  }
  
  return answer;
}
