//https://school.programmers.co.kr/learn/courses/30/lessons/120841


function solution(dot) {
  const [x, y] = dot;
  let result = -1;
  
  if (x > 0) {
      result = y > 0 ? 1 : 4;
  } else {
      result = y > 0 ? 2 : 3;
  }
  
  return result;
}
