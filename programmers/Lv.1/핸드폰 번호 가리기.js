//https://school.programmers.co.kr/learn/courses/30/lessons/12948


function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(phone_number.length - 4);
}
