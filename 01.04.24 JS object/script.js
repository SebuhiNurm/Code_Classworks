// // #Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys)
//  and returns the multiplication sizes of the box.
// Don't forget to return the result.

// volumeOfBox({ width: 4, length: 2, height: 2 }) // 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) // 30
// Task1

// volumeOfBox({ width: 2, length: 5, height: 1 }) // 10
// function volumeOfBox(size) {
//     return size.height*size.width*size.length;
// }
// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));

// Task2
// # write a function that takes sentence (str) as a parameter. Returns a sentence capitalize each word
// function capital_letter(str) {
//   str = str.split(" ");

//   for (var i = 0, x = str.length; i < x; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i](1);
//   }

//   return str.join(" ");
// }

// console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));

// Task3
// # string daxilində olan saitlərin sayi
// function countVowel(str) {
//   let count = 0;
//   let vowel = ["a", "e", "i", "o", "u"];
//   let arr = [];

//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowel.length; j++) {
//       if (str[i] === vowel[j]) {
//         arr.push(str[i]);
//         // count++;
//       }
//     }
//   }

//   return [...new Set(arr)];
// }
// console.log(countVowel("raaaeslaome"));

// Task4
// #cumle daxilində ən uzun sozu tapan function

// function maxLengthWord(str) {
//     let arr = str.split(" ");
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > max.length) {
//             max = arr[i]
//         }
//     }
//     return max;
// }
// console.log(maxLengthWord("afasf, asssssssg, AFAFaaasdasdasdFF"))


// Task Number
// # array daxilində sadecə number olanlari yeni bir arraya yigin
 function arrNumber(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i])) {
            arr += array[i]
        }
    }
    return arr.split("");
 }
 console.log(arrNumber([1, "salam",3, "hsaoif" , NaN]));