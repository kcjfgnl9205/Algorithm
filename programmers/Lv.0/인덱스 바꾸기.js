//https://school.programmers.co.kr/learn/courses/30/lessons/120895


function solution(my_string, num1, num2) {
  return my_string.split("").map((el, i, arr) => {
      if (i === num1) {
          return arr[num2];
      } else if (i === num2) {
          return arr[num1];
      } else {
          return el;
      }
  }).join("")
}
