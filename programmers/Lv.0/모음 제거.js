//https://school.programmers.co.kr/learn/courses/30/lessons/120849


function solution(my_string) {
  const 모음 = ["a", "e", "i", "o", "u"];
  return my_string.split("").map(el => 모음.includes(el) ? "" : el).join("");
}
