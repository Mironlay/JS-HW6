// Вивести в консоль всі числа від 1 до 10 за допомогою циклу while.

let i = 0;
while (i <= 10) {
    console.log(i);
    i += 1;
}

// Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue.

for (let i = 0; i <= 20; i += 1) {
    if (i % 2 === 0 && i !== 0) {
        console.log(i);
        continue;   
    }
}

// Вивести в консоль таблицю множення числа 7 за допомогою циклу for.

for (let i = 0; i <= 10; i += 1) {
    console.log(`7 x ${i} = ${7 * i}`);
}


// Створити скрипт, який виводить в консоль всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.

const n = 30;
let num = Number(prompt("Введіть число менше 30"))
for (let i = 0; num < n; i += 1) {
    console.log(i);
    if (i === 30) {
        break;
    }
}
if (num >= n) {
    console.log("Число більше або дорівнює 30");
}

// За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.


let o = 0
while (o <= 20) {
    o += 1;
    if (o % 3 === 0) {
        continue;
    }
    console.log(o);
}







