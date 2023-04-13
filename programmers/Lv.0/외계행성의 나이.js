//https://school.programmers.co.kr/learn/courses/30/lessons/120834


function solution(age) {
  const alphabet = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97));
  return age.toString().split("").map(el => alphabet[el]).join("");
}
