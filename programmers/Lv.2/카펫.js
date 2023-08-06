//https://school.programmers.co.kr/learn/courses/30/lessons/42842


function solution(brown, yellow) {
    var answer = [];

    // yellow의 약수를 구함
    const arr = getDivisor(yellow)    
    for (let i = 0; i < arr.length; i++) {
        // 노란색가로길이
        const row = arr[i]
        // 노란색세로길이
        const col = arr[arr.length - 1 - i];
        
        // 갈색길이가 일치하는경우
        const brownCnt = 2 * (row + 2) + (col * 2);
    
        if (brown === brownCnt) {
            answer = [row + 2, col + 2]
            break;
        }
        
    }
    return answer;
}


function getDivisor (yellow) {
    const arr = [];
    
    for (let i = 1; i <= yellow; i++) {
        if (Number.isInteger(yellow / i)) {
            arr.push(i);
        }
    }
    
    return arr.sort((a, b) => b - a);
}