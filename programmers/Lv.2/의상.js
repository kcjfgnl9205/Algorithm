// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
    // 가지고있는 옷종류
    const obj = {};
    for (const [value, key] of clothes) {
        if (obj[key]) {
            obj[key].push(value);
        } else {
            obj[key] = [value];
        }
    }
    
    // 타입별 옷의 갯수 + 1(안입는경우)
    let answer = 1;
    for (const [key, value] of Object.entries(obj)) {
        answer *= (value.length + 1)
    }

    // 전체 경우의 수에서 하나도 안입는경우의 수를 뺸다.
    return (answer - 1);
}