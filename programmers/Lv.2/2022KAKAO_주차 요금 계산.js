//https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  const [basicTime, basicPrice, perTime, perPrice] = fees;
  const obj = {};
  for (let i = 0; i < records.length; i++) {
    const [t, n, flg] = records[i].split(' ');
    const m = TimeToMinute(t);
    if (obj[n]) {
      obj[n].push([m, flg]);
    } else {
      obj[n] = [[m, flg]];
    }
  }

  const newObj = {};
  for (const key in obj) {
    let sum = 0;
    if (obj.hasOwnProperty(key)) {
      const values = obj[key];
      for (let i = 0; i < values.length; i += 2) {
        if (values[i + 1]) {
          sum += values[i + 1][0] - values[i][0];
        } else {
          sum += TimeToMinute('23:59') - values[i][0];
        }
      }
    }
    newObj[key] = sum;
  }

  const sortArr = Object.entries(newObj).sort();
  return sortArr.map((item) => {
    if (item[1] <= basicTime) {
      return basicPrice;
    }
    return basicPrice + Math.ceil((item[1] - basicTime) / perTime) * perPrice;
  });
}

function TimeToMinute(str) {
  const [h, m] = str.split(':');
  return Number(h) * 60 + Number(m);
}
