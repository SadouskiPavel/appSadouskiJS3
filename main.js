"use strict";

// 1

for (let i = 1; i <= 50; i++) {
    console.log(i);
}

for (let i = 35; i >= 8; i--) {
    console.log(i);
}

// 2

let i = 89;
for (i = 89; i >= 11; i--) {
    document.write(i, "<br/>");
}


// 3

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//4

let m = 0;
let n = 5;
for (let i = 1; i <= n; i++) {
    m = 0;
    for (let j = 1; j <= i; j++) {
        m += j;
    }
    console.log(`Sum ${i} = ${m}`)
}

// 5 


// 6

for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; j++)
        document.write(`<br>${i}*${j}=${i * j}`);
    document.write(`<br>`);
}

// 7 

let num = 0;
for (let r = 1000; r > 50; r /= 2) {
    num++
}
console.log(num);

// 8

let total = 0;
let a = 0;
while (true) {
    let num = +prompt("Введите чило:");
    if (num === 0) break;
    if (isFinite(num)) {
        total += num;
        a++;
    } else {
        alert("не являются числом")
    }
}
console.log(total);
console.log(total / a);


// 9 

let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57"
let cur = '', min, max;

for (let i = 0; i < str.length; i++) {
    cur = cur + str[i];
    if (+str[i] && !+str[i + 1]) {
        if (typeof min !== "number" || cur < +min) { min = +cur; }
        if (typeof max !== "number" || cur > +max) {
            max = +cur;
            cur = "";
        }
    }
}

console.log("мин-число", min)
console.log("макс-число", max)

// 10

let t = prompt(" ");
let y = String(t);
let u = 0;
let reverse = "";
console.log(` Цифры ${y}`);
console.log(`Количество цифр ${y.length}`);
for (let i = 0; i < y.length; i++) {
    let g = Number(y[i]);
    u += g;
    reverse = g + reverse;
}
console.log(`Сумма цифр ${u}`);
console.log(`Обратный порядок цифр ${reverse}`);