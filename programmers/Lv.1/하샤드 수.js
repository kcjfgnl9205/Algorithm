//https://school.programmers.co.kr/learn/courses/30/lessons/12947


function solution(x) {
  const n = x.toString().split("").reduce((a, b) => {return Number(a) + Number(b) }, 0);
  return x % n === 0 ? true : false;
}
