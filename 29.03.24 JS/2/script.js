// task1
// function printFullName(firstName, lastName) {
//     return `I am ${firstName} ${lastName}`;
// }
// console.log(printFullName("sebuhi", "nurm"));

// task2
// function square(number) {
//     return number ** 2;
// }
// console.log(square(5));

// task3
// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(1, 3))

// function multiply(num1, num2) {
//     return num1 * num2;
// }
// console.log(multiply(2, 5));

// function subtract(num1, num2) {
//     return num1 - num2;
// }
// console.log(subtract(4, 7));

// function divide(num1, num2){
//     return num1 / num2;
// }
// console.log(divide(5, 2));

// task4
// function calculator(num1, num2, c) {
//   switch (c) {
//     case "+":
//       return `${num1} ${c} ${num2} = ${num1 + num2}`;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;

//     default:
//       break;
//   }
// }
// console.log(calculator(5, 6, "+"));


// task 5
// function getSum(array){
//     return array[0] + array[array.length - 1]
// }
// console.log(getSum([21, 32, 5, 1,3]));

// task6

// function sum(array) {
//     let sum1 = 0
//     for (let i = 0; i < array.length; i++) {
//         sum1 += array[i];
//     }
//     return sum1
// }
// console.log(sum([1, 2, 3]));

// 7) arrayin daxilindəki max elementi return edən funksiya yazın

// function findMax(array) {
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i]>max) {
//             max = array[i];
//         }
//     }
//     return max;
// }
// console.log(findMax([1, 22, 3]));

// task8

// 8) filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin
// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];


// function filterEmployees(arr) {
//     let filtered = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].salary > 60000) {
//             filtered.push(arr[i])
//         }
//     }
//     return filtered;
// }
// console.log(filterEmployees(employees))

// 9) verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın

// ex: function findElement(arr, number) {
//   ...
// }
 // 45 array elemenlərindən biridir


// function findElement(array, item) {
//     let bool = false;
//     for (let i = 0; i < array.length; i++) {
//         if (item === array[i]) {
//             bool = true;
//             break;
//         }
//     }
//     return bool ? `${item} arrayde var` : `${item} arrayde yoxdur`
// }
// console.log(findElement([33, 28, 45, 17], 45)); // 45 array elemenlərindən biridir
// console.log(findElement([33, 28, 45, 17], 38)); // 38 array elementləri arasında yoxdur
// console.log(findElement(["a", "g", "y", "d"], "d")); // d array elementərindən biridir




// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// function sampleText(array) {
//     count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === " "){
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(sampleText(sampleNews));

// 11. Daxil edilən iki arrayi birləşdirən funksiya yazın.
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))
// Expected Output:
// [1,2,3,4,5,6,7,8,9]

// function concatArray(array1, array2) {
//     for (let i = 0; i < array2.length; i++) {
//         array1.push(array2[i])
//     }
//     return array1;
// }
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))

// 12. Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
// console.log(array_filled(6, 0));
// Expected Output:
// [0, 0, 0, 0, 0, 0]


// function array_filled(num, syb) {
//     let array = []
//     for (let i = 1; i <= num; i++) {
//         array.push(syb)
//     }
//     return array;
// }
// console.log(array_filled(6, "t"));

// 13. Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni,
// 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.

// Məsələn:
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// Expected Output:
// [20, 30, 10, 40, 50]
function move(array, syb, num) {
    for (let i = 0; i < array.length; i++) {
        array[syb] = a;
        array[num]
        return array;
    }
}
console.log(move([10, 20, 30, 40, 50], 0, 2))