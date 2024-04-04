let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];
  
  let copyArr = [...arr];
  
  // 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
  
  // let res = arr.filter((item)=>item.name.toLocaleLowerCase().startsWith("t"))
  // console.log(res);
  
  // 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
  
  // let count = 0;
  // arr.forEach((item) => {
  //   if (
  //     item.name.toLocaleLowerCase().startsWith("t") &&
  //     item.name.toLocaleLowerCase().endsWith("t")
  //   ) {
  //     count++;
  //   }
  // });
  // console.log(count);
  
  // 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
  
  // let sum = 0;
  // arr.forEach((item) => {
  //   if (
  //     item.name.toLocaleLowerCase().startsWith("t") &&
  //     item.name.toLocaleLowerCase().endsWith("t")
  //   ) {
  //     sum+=item.key;
  //   }
  // });
  // console.log(sum);
  
  // 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
  //  arr.forEach((item)=>{
  //     if (item.name.toLocaleLowerCase().endsWith("e")) {
  //         item.name = "SuperDev"
  //     }
  // })
  // console.log(arr);
  
  // 5) "name"-i en uzun olan obyekti tapin
  
  // let maxName = copyArr[0]
  // copyArr.forEach((item)=>{
  //     if (item.name.length>maxName.name.length) {
  //         maxName=item
  //     }
  // })
  // console.log(maxName);
  
  // 6) "name"-i en uzun olan obyektin key'ni tapin
  
  // console.log(maxName.key);
  
  // 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin
  
  // console.log(copyArr.indexOf(maxName)**2);
  
  // 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
  
  // let res = arr.filter((item)=>item.name.length == 4)
  // console.log(res);
  
  // 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin
  
  // let maxKey = copyArr[0]
  // copyArr.forEach((item)=>{
  //     if (item.key>maxKey.key) {
  //         maxKey=item
  //     }
  // })
  
  // console.log(maxKey.name);
  
  // 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)in index(ler)ini tapin.
  
  // arr.forEach((item, index) => {
  //     let count = 0;
  //     item.name.split("").forEach((char) => {
  //       if (char == "l") {
  //         count++;
  //       }
  //     });
  //     if (count === 2) {
  //       console.log(index);
  //     }
  //   });
  
  // 10) keylərin cəmini tapın
  
  // let res = copyArr.reduce((total, item) => total + item.key, 0);
  // console.log(res);
  
  // 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.
  
  //   let res = arr.filter(
  //     (item) => item.name.indexOf("t") !== item.name.lastIndexOf("t")
  //   );
  
  //   console.log(res);
  
  // 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
  
  // let res = arr.filter((item)=>item.key>10 && item.name.toLocaleLowerCase().startsWith("l"))
  // console.log(res);
  
  //13) countries arrayindəki ölkələrin ilk 3 hərfini (hər bir hərf böyük olmalıdır) yeni arrayda yığın
  // output: ["FIN", "DEN", "SWE", "NOR", "ICE"];
  
  // const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
   
  // console.log(countries.map((item) => item.slice(0, 3).toLocaleUpperCase()));
  
  //CUSTOM METHODS
  // Array.prototype.customForEach=function(callBackFn){
  //     for (let i = 0; i < this.length; i++) {
  //         callBackFn(this[i],i,this)
  //     }
  // }
   
  // let num = [1,2,3,4,5,66]
  // let res = num.customForEach((num,idx,arr)=>console.log(num))
  
  
  // Array.prototype.customFilter=function(cbFN){
  //     let filtered = []
  //     for (let i = 0; i < this.length; i++) {
  //         if (cbFN(this[i])) {
  //           filtered.push(this[i]);
  //         }
  //       }
  //     return filtered
  // }
  
  // let num = [1,2,3,4,5,66]
  // let res = num.customFilter((num)=>num%2==0)
  // console.log(res);
  
  
  // const numbers = [1,2,3]
  
  //     const sumReducer = (initialValue, current) => initialValue + current;
  
  //      const reduce = (reducer, initialValue, array) => {
  //       let value = initialValue;
  
  //       for(let i = 0; i < array.length; i++) {
  //         let currentValue = array[i]
  //         value = reducer(value, currentValue)
  //       }
  
  //       return value;
  //     }
  //     const sumOfNumbersCustom = reduce(sumReducer, 0, numbers)
  
  //     console.log("Custom reduce function, " +sumOfNumbersCustom );







  

//   var a = [10, 21, 13, 56];

// function add(a, b) { return a + b }
// function foo(a, b) { return a.concat(b) }

// Array.prototype.reduce2 = function () {
//   // I do not understand how to handle the function of the inlet
//   // I know that I should use arguments, but I don't know how many arguments there will be
//   var result = 0;
//   for(var i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//  return result;
// };

// console.log(a.reduce(add), a.reduce2(add))         // 100 100
// console.log(a.reduce(add, 10), a.reduce2(add, 10)) // 110 110