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
const nameStartT = arr.filter((item) =>
  item.name.toLowerCase().startsWith("t")
);
console.log(nameStartT);

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)

let count = 0;

arr.forEach((item) => {
  if (
    item.name.toLowerCase().startsWith("t") &&
    item.name.toLowerCase().endsWith("t")
  ) {
    count++;
  }
});
console.log(count);
// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
let sum = 0;
arr.forEach((item) => {
  if (
    item.name.toLowerCase().startsWith("t") &&
    item.name.toLowerCase().endsWith("t")
  ) {
    sum += item.key;
  }
});
console.log(sum);

// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
arr.forEach((item) => {
  if (item.name.toLowerCase().endsWith("e")) {
    item.name = "DeveLop";
  }
});
console.log(arr);

// 5) "name"-i en uzun olan obyekti tapin
// copyArr.sort((a, b) => a.name.length - b.name.length);
// console.log(copyArr[copyArr.length - 1].name);

// 6) "name"-i en uzun olan obyektin key'ni tapin
copyArr.sort((a, b) => a.name.length - b.name.length);
console.log(copyArr[copyArr.length - 1].key);

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)


// 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)in index(ler)ini tapin.

// 10) keylərin cəmini tapın

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
