// let a = +window.prompt("yas daxil et: ");
// if (125>a) {
//     if (a>=65) {
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }
// else{
//     console.log("yasiniz coxdur")
// }

// **************************

// let a = +window.prompt("eded daxil et: ");
// if (a > 0) {
//     if (a % 2 == 0 && a != 0 ) {
//         console.log("cutdur")
//     }
//     else{
//         console.log("tekdir")
//     }
// }
// else{
//     console.log("menfi eded")
// }

// **************************

// let a = window.prompt("ay daxil et: ");
// switch(a) {
//     case "dekabr":
//     case "yanvar":
//     case "fevral":
//         console.log("qis")
//         break
//     case "mart":
//     case "aprel":
//     case "may":
//         console.log("yaz")
//         break
//     case "iyun":
//     case "iyul":
//     case "avqust":
//         console.log("yay")
//         break
//     case "sentyabr":
//     case "oktyabr":
//     case "noyabr":
//         console.log("payiz")
//         break
//     default:
//         console.log("bele ay yoxdur")
//         break
//   }

// **************************

// let a = window.prompt("a ededini daxil et: ");
// if (a > 0) {
//     if (a % 3 == 0 && a % 5 == 0) {
//         console.log("bolundu")
//     }
//     else{
//         console.log("bolunmedi")
//     }
// }
// else{
//     console.log("menfidir")
// }

// **************************

// let a = +window.prompt("a ededini daxil et: ");
// if (a % 2 === 0 ) {
//     console.log("bolundu");
// }
// else{
//     b = a % 2;
//     console.log(b)
// }

// **************************

// let a = +window.prompt("a ededini daxil et: ");
// let b = +window.prompt("b ededini daxil et: ");
// // let c = a * b;
// if (a * b == 0) {
//     console.log("sifir")
// }
// else if(a * b > 0){
//     console.log("musbetdir")
// }
// else{
//     console.log("menfidir")
// }

// **************************

// let a = +window.prompt("a ededini daxil et: ");
// if (1 < a && a < 100) {
//     console.log("daxildir")
// }
// else{
//     console.log("daxil deyil")
// }

// **************************

// let a = +window.prompt("a ededini daxil et: ");
// let b = +window.prompt("b ededini daxil et: ");
// let c = +window.prompt("c ededini daxil et: ");
// if (a > b && a > c) {
//     console.log("a boyukdur")
// }
// else if(b > a && b > c){
//     console.log("b boyukdur")

// }
// else{
//     console.log("c boyukdur")
// }

// **************************

// let a = +window.prompt("bal  daxil et: ");
// if (a > 90 && a <= 100) {
//     console.log("A")
// }
// else if (a > 80 && a <= 90) {
//     console.log("B")
// }
// else if (a > 70 && a <= 80) {
//     console.log("C")
// }
// else if (a > 60 && a <= 70) {
//     console.log("D")
// }
// else if (a > 50 && a <= 60) {
//     console.log("E")
// }
// else if (a > 1 && a <= 50) {
//     console.log("F")
// }
// else{
//     console.log("dugun daxil et")
// }

// **************************

// let a = +window.prompt("a ededini daxil et: ");
// let b = +window.prompt("b ededini daxil et: ");
// let c = window.prompt("simvol daxil et: ");
// switch (c) {
//     case "+":
//         console.log(a + b)
//         break;
//     case "-":
//         console.log(a - b)
//         break;
//     case "/":
//         console.log(a / b)
//         break;
//     case "*":
//         console.log(a * b)
//         break;

//     default:
//         console.log("zehmet olmasa duzgun emel ddaxil edin")
//         break;
// }

// task1
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum = sum +i
// }

// console.log(sum)

// task2
// let num = 15;
// if (num%2==0) {
//     console.log("15 cut rəqəmdir")
// }else {
//     console.log("15 tək rəqəmdir")
// }

// task3
// let number = 10

// for (let i = 0; i <= number; i++) {
//     if (number%i==0) {
//         console.log(i)
//     }
// }

// task4
// let a = 3;
// let b = 5;
// let c = 4;
// if ((Math.sqrt(a**2 + b**2) ==c) || (Math.sqrt(c**2 + b**2) == a) || (Math.sqrt(a**2 + c**2) == b)) {
//     console.log("duzbucaqlidi")
// }

// task5
// let number = 345
// a= number%10
// b= parseInt(number/10)%10
// c= parseInt(number/100)
// console.log(c,b,a);

// task6

// let a = 3
// let b = 3
// let c = 3

// if (a==b && a==c && b==c) {
//     console.log("beraberdir")
// }

// task7
// let a = 3
// let b = 4
// let c = 4

// if (a==b || a==c || b==c) {
//     console.log("beraberdir")
// }

// task8
// let a = 3
// let b = 4
// let c = 4

// if ((a+b)>c || (a+c)>b || (c+b)>a) {
//     console.log("ucbucaqdir")
// }

// task9

// let a = window.prompt("ay daxil et: ");
// switch (a) {
//   case "dekabr":
//     console.log("dekabr has 31 days");
//     break;
//   case "yanvar":
//     console.log("yanvar has 31 days");
//     break;
//   case "fevral":
//     console.log("fevral has 28 and 29 days");
//     break;
//   case "mart":
//     console.log("mart has 31 days");
//     break;
//   case "aprel":
//     console.log("aprel has 30 days");
//     break;
//   case "may":
//     console.log("may has 31 days");
//     break;
//   case "iyun":
//     console.log("iyun has 30 days");
//     break;
//   case "iyul":
//     console.log("iyul has 31 days");
//     break;
//   case "avqust":
//     console.log("avqust has 30 days");
//     break;
//   case "sentyabr":
//     console.log("sentyabr has 30 days");
//     break;
//   case "oktyabr":
//     console.log("oktyabr has 31 days");
//     break;
//   case "noyabr":
//     console.log("noyabr has 30 days");
//     break;
//   default:
//     console.log("bele ay yoxdur");
//     break;
// }

    
// task10
// let number = 345
// a= number%10
// b= parseInt(number/10)%10
// c= parseInt(number/100) 

// if (a>b &) {
    
// }
// console.log(c,b,a);