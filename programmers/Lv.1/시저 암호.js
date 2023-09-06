// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const lowercase = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );
  const uppercase = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );

  return s
    .split("")
    .map((el) => {
      if (lowercase.includes(el)) {
        let index = lowercase.indexOf(el) + n;
        index = index >= lowercase.length ? index - lowercase.length : index;
        return lowercase[index];
      } else if (uppercase.includes(el)) {
        let index = uppercase.indexOf(el) + n;
        index = index >= uppercase.length ? index - uppercase.length : index;
        return uppercase[index];
      } else {
        return el;
      }
    })
    .join("");
}
