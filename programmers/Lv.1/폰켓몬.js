// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
    const n = nums.length / 2;
    const s = [ ...new Set([...nums])];
    
    return n > s.length ? s.length : n;
}