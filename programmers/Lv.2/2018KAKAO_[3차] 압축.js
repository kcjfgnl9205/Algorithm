//https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
  // 초기 배열
  const arr = Array(26)
    .fill()
    .map((v, i) => String.fromCharCode(i + 65));
  // 정답
  const answer = [];

  let i = 0;
  let j = i;
  while (i <= msg.length - 1) {
    const word = msg.substring(i, j + 1);
    const wordIndex = arr.findIndex((item) => item === word);

    const nextWord = msg.substring(j + 1, j + 2);
    const nextWordIndex = arr.findIndex((item) => item === nextWord);

    const newWord = word + nextWord;
    const index = arr.findIndex((item) => item === newWord);
    // 마지막 다음글자 없으면 끝
    if (!nextWord) {
      answer.push(wordIndex + 1);
      break;
    }

    // 사전에 추가
    if (index === -1) {
      i = i + word.length;
      j = i;
      arr.push(newWord);
      answer.push(wordIndex + 1);
      continue;
    }

    if (wordIndex !== -1 && nextWordIndex !== -1) {
      j++;
      continue;
    }
    i++;
  }

  return answer;
}
