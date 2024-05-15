// let cars = [1]
// function g(){
//     const promise = new Promise((resolve, reject)=>{
//         if (cars.length === 0) {
//             return resolve({
//                 data: null,
//                 message:"bos",
//                 code: 404
//             })
//         }
//         else{
//             return reject({
//                 data: cars,
//                 message: "dolu",
//                 code: 200
//             })
//         }
//     })
//     return promise
// }
// function gPromise(cfn){
//     cfn().then((res=>{
//         console.log("PROMISE",res);
//     })).catch((rej)=>{
//         console.log("PROMISE",rej);
//     })
// }
// async function gAsync(asyncFn){
//     try {
//         console.log(await asyncFn());
//     } catch (error) {
//         console.log("ASYNC", error)
//     }
// }
// gPromise(g)
// gAsync(g)

import { BASE_URL } from "./constant.js";
let suppliers = null;
const searchInp = document.querySelector(".search");
const tBody = document.querySelector(".tbody");
const tHead = document.querySelector("thead");
const loaders = document.querySelector(".loaders"); 

async function getData(endpoint) {
  try {
    loaders.classList.add("d-none");
    tHead.classList.add("d-none");
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    suppliers = data;
    drawTable(data);
  } catch (error) {
  } finally {
    tHead.classList.remove("d-none");
  }
  // return data 
}
console.log(getData("suppliers"));

function drawTable(array) {
  tBody.innerHTML = "";
  array.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `         
        <th scope="row">${element.id}</th>
        <td>${element.companyName}</td>
        <td>${element.address.street}</td>
        <td>${element.address.phone}</td>
        <td>${element.address.city}, ${element.address.country}</td>
        <td><button class="btn btn-success">Edit</button></td>
        <td><button class="btn btn-danger">Delete</button></td>
        <td><a class="btn btn-primary" href="details.html?id=${element.id}">Detail</a></td>`;
    tBody.append(trElem);
  });
}

searchInp.addEventListener("keyup", () => {
  
const searchText = searchInp.value.trim().toLowerCase()
  let filterData = [...suppliers];
  console.log(
    filterData.filter((a) =>
      a.companyName.toLowerCase().includes(searchText)
    )
  );
  drawTable(
    filterData.filter((a) =>
      a.companyName.toLowerCase().includes(searchText)
    ) 
  );
});
