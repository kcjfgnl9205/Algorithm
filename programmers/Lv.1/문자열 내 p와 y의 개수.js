//https://school.programmers.co.kr/learn/courses/30/lessons/12916


function solution(s){
  const a = s.toLowerCase().split("");
  
  const p = a.filter(el => el === "p").length;
  const y = a.filter(el => el === "y").length;
  
  return p === y ? true : false;
}
