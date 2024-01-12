const num = 11;

// 変数(num)が3と5の倍数の場合“3と5の倍数です"を出力する
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です')
}

// 変数(num)が3と5の倍数の場合“3の倍数です"を出力する
else if (num % 3 === 0) {
    console.log('3の倍数です')
}

// 変数(num)が3と5の倍数の場合“5の倍数です"を出力する
else if (num % 5 === 0) {
    console.log('5の倍数です')
}

// それ以外の時は"変数(num)"を出力する
else {
    console.log(num)
}