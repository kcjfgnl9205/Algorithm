//https://school.programmers.co.kr/learn/courses/30/lessons/120835


function solution(emergency) {
  //내림차순정렬
  const arr = [...emergency].sort((a, b) =>  b - a);
  
  //진료순서를 저장
  let dict = {};
  for (let i = 0; i < arr.length; i++) {
      dict[arr[i]] = i + 1;
  }
  
  //진료순서 리턴
  return emergency.map(el => dict[Number(el)]);
}
