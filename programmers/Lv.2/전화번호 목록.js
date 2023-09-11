// https://school.programmers.co.kr/learn/courses/30/lessons/42577

// 해시 관련 문제였는데 해시로 어떻게 풀어야할지 모르겠어서 아래방법으로 풀었음..
function solution(phone_book) {
    phone_book.sort();
    
    let answer = true;
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            answer = false;
            break;
        }
    }

    return answer;
}
