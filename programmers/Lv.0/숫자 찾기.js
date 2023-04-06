//https://school.programmers.co.kr/learn/courses/30/lessons/120904


function solution(num, k) {
  let n = num.toString();
  let index = n.indexOf(k.toString());
  
  return index === -1 ? -1 : index + 1;
}
