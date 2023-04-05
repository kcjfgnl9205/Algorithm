//https://school.programmers.co.kr/learn/courses/30/lessons/120891


function solution(order) {
  const data = "369";
  let count = 0;
  for (let i = 0; i < order.toString().length; i++) {
      if (data.includes(order.toString()[i])) {
          count++;
      }
  }
  return count;
}
