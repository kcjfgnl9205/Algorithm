//https://school.programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
  // target이 words에 존재하지 않는경우
  if (words.findIndex((item) => item === target) === -1) {
    return 0;
  }

  return bfs(begin, target, words);
}

function bfs(begin, target, words) {
  const queue = [];
  queue.push([begin, 0]); // 시작 단어와 단계 0으로 초기화

  while (queue.length > 0) {
    const [now, step] = queue.shift();

    if (now === target) {
      return step;
    }

    // 단어를 모두 체크하면서, 해당 단어가 변경될 수 있는지 체크
    for (const word of words) {
      let count = 0;
      for (let i = 0; i < now.length; i++) {
        // 단어의 길이만큼 반복하여 알파벳 한개씩 체크하기
        if (now[i] !== word[i]) {
          count += 1;
        }
      }

      if (count === 1) {
        queue.push([word, step + 1]);
      }
    }
  }
}
