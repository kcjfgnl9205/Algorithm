//https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
  const obj = name.reduce((acc, cur, idx) => {
    acc[cur] = yearning[idx];
    return acc;
  }, new Object());

  return photo.map((data) => {
    return data.reduce((acc, cur, idx) => {
      return obj[cur] ? obj[cur] + acc : acc;
    }, 0);
  });
}
