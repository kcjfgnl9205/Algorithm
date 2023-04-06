//https://school.programmers.co.kr/learn/courses/30/lessons/120844


function solution(numbers, direction) {
  if (direction === "right") {
      return [ numbers.pop(), ...numbers ] 
  } else {
      const first = numbers.shift();
      return [ ...numbers, first ] 
  }
}
