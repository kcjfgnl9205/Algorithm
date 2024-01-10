//https://school.programmers.co.kr/learn/courses/30/lessons/17677#

function solution(str1, str2) {
  const arr1 = strToArr(str1);
  const arr2 = strToArr(str2);

  const maxArr = arr1.length > arr2.length ? arr1 : arr2;
  const minArr = arr1.length > arr2.length ? arr2 : arr1;

  const intersectionArr = createIntersectionArr(maxArr, minArr);
  const unionArr = createUnionArr(maxArr, minArr);

  let n = 0;
  if (intersectionArr.length === 0 && unionArr.length === 0) {
    n = 1;
  } else {
    n = intersectionArr.length / unionArr.length;
  }

  return Math.floor(n * 65536);
}

// 합집합
function createUnionArr(arr1, arr2) {
  const a = [...arr1];
  const b = [...arr2];

  const arr = [];
  for (let i = 0; i < a.length; i++) {
    const index = b.findIndex((item) => item === a[i]);
    if (index !== -1) {
      b.splice(index, 1);
    }
    arr.push(a[i]);
  }

  return arr.concat(b);
}

// 교집합
function createIntersectionArr(arr1, arr2) {
  const a = [...arr1];
  const b = [...arr2];

  const arr = [];
  for (let i = 0; i < a.length; i++) {
    const index = b.findIndex((item) => item === a[i]);
    if (index !== -1) {
      b.splice(index, 1);
      arr.push(a[i]);
    }
  }

  return arr;
}

// 문자열을 다중집합으로 만듬
function strToArr(str) {
  const arr = [];

  for (let i = 0; i < str.length - 1; i++) {
    const a = str.slice(i, i + 2);
    // 특수문자 제외
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s\d]+/.test(a)) {
      continue;
    }

    arr.push(a.toUpperCase());
  }

  return arr;
}
