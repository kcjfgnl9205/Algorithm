//https://school.programmers.co.kr/learn/courses/30/lessons/120836


function solution(n) {
    let answer = 0;
    const sqrt = parseInt(Math.sqrt(n));
        
    for (let i = 1; i <= sqrt; i++) {
        if (n % i === 0) {
            answer += 2;
        }
    }
    
    //완전제곱근인경우 한쌍만 존재하므로 -1
    if (sqrt ** 2 === n) {
        answer -= 1;
    }
    
    return answer;
}
