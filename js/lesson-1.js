//1
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt("enter a number"));

// if (number === 10) {
//   alert("right");
// } else {
//   alert("wrong");
// }

//2
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

/* const min = Math.floor(Math.random() * (59 - 0) + 0);

if (min <= 14) {
  alert("in first quarter");
} else if (min <= 29) {
  alert("in second quarter");
} else if (min <= 44) {
  alert("in third quarter");
} else {
  alert("in forth quarter");
} */

//4

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const totalMins = Number(prompt("Enter number")); //variable in global

// //parameter in local area
// function formatTime(totalMins) {
//   const hours = Math.floor(totalMins / 60);
//   const modifyHours = String(hours).padStart(2, 0);
//   const mins = totalMins % 60;
//   const modifyMins = String(mins).padStart(2, 0);

//   return `${modifyHours}:${modifyMins}`;
// }
// console.log(formatTime(totalMins));

//7
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

const max = 50;
const min = 20;

console.log(getNumbers(min, max));

function getNumbers(min, max) {
  let sumEven = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sumEven += i;
    }
  }

  return sumEven;
}
