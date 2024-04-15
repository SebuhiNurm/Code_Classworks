const body = document.body;

// const cardElem = document.createElement("div");
// cardElem.classList.add("card");
// cardElem.style.maxWidth = "300px";
// cardElem.style.border = "1px solid black";
// cardElem.style.borderRadius = "10px";
// cardElem.style.overflow = "hidden";
// cardElem.style.margin = "0 auto";

// const img = document.createElement("img");
// img.classList.add("card-img-top");
// img.setAttribute("src", "./download.png");
// img.style.width = "100%";

// const cardBodyElem = document.createElement("div");
// cardBodyElem.classList.add("card-body");
// cardBodyElem.style.padding = "10px";

// const cardTitle = document.createElement("h5");
// cardTitle.classList.add("card-title");
// cardTitle.textContent = "Card title";
// cardTitle.style.paddingBottom = "10px";
// cardTitle.style.fontSize = "20px";

// const cardText = document.createElement("p");
// cardText.classList.add("card-title");
// cardText.textContent =
//   "Some quick example text to build on the card title and make up the bulk of the card's content. ";
// cardText.style.fontSize = "15px";
// cardText.style.paddingBottom = "10px";

// const btn = document.createElement("button");
// btn.classList.add("btn", "btn-primary");
// btn.textContent = "Go Somewhere";
// btn.style.backgroundColor = "skyblue"
// btn.style.padding = "10px"
// btn.style.borderRadius = "10px"
// btn.style.cursor = "pointer"

// cardBodyElem.append(cardTitle, cardText, btn);
// cardElem.append(img, cardBodyElem);
// body.append(cardElem);

// --------------------------------------------------------------------

// Task-2

// const students = [
//   "Sebuhi",
//   "sadiq",
//   "akif",
//   "memmed",
//   "mezi",
//   "elekim",
//   "salam",
// ];

// const wrapperDiv = document.createElement("div");
// wrapperDiv.classList.add("wrapper");

// const studentList = document.createElement("ul");

// students.forEach((item) => {
//   const liElem = document.createElement("li");
//   liElem.textContent = item;
//   studentList.appendChild(liElem);
//   liElem.addEventListener("click", function () {
//     this.remove();
//     // this.style.display = "none"
//     // console.log(this.textContent)
//   });
// });

// wrapperDiv.append(studentList);
// body.append(wrapperDiv);

const btn = document.createElement("button");
btn.textContent = "Change!";
btn.addEventListener("click", function () {
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    
    body.style.backgroundColor = `rgb(${red},${green},  ${blue})`
});

body.append(btn);
