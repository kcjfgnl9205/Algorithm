//https://school.programmers.co.kr/learn/courses/30/lessons/120863


function solution(polynomial) {
  const arr = polynomial.split(" ");
  let variable = 0;
  let constant = 0;
  
  arr.forEach(el => {
      if (el === "+") return;
      
      if (el.includes("x")) {
          variable += el.length === 1 ? 1 : Number(el[0])
      } else {
          constant += Number(el);
      }
  })
  
  
  if (variable === 0) {
      return `${constant}`;
  } else if (constant === 0) {
      return `${variable}x`;
  } else {
      return `${variable}x + ${constant}`;
  }
}
