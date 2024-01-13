// 年を取得
const today = new Date();
const year = today.getFullYear();
console.log(year);

// 月を取得
const month = today.getMonth() + 1;
console.log(month);

// 日を取得
const day = today.getDate();
console.log(day);

// 年月日を出力
console.log(year + "年" + month + "月" + day + "日");