class Human {
  name;
  surname;
  age = 0;
  gender;
  nationality;
  constructor(name, surname, gender, nationality, age = 9) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }
  getFullName() {
    console.log(`${this.name} ${this.surname}`);
  }
  getBirthYear() {
    return new Date() - currentYear;
  }
}
class User extends Human {
  username;
  email;
  isAdmin;
  isLogged = false;
  password;
  bio;
  constructor(
    name,
    surname,
    gender,
    nationality,
    age,
    username,
    email,
    isAdmin,
    isLogged,
    password,
    bio
  ) {
    super(name, surname, gender, nationality, age);
    this.username = username;
    this.email = email;
    this.isAdmin = isAdmin;
    this.isLogged = isLogged;
    if (password.length >= 5) {
      this.password = password;
    }
    if (bio.length <= 30) {
      this.bio = bio;
    }
  }
  chagePassword(currentPassword, newPassword) {
    if (currentPassword === this.password) {
      newPassword = window.prompt("enter password :");
      newPassword = this.password;
      console.log(newPassword);
    } else {
      newPassword = this.password;
      console.log(newPassword);
    }
  }
  //   chageEmail(usersArray, newEmail){
  //     if () {

  //     }
  //   }
}
let users = [
  new User(
    "John",
    "Doe",
    "Male",
    "American",
    "johndoe",
    "john.doe@example.com",
    false,
    "password123",
    "A bit about John.",
    30
  ),
  new User(
    "Jane",
    "Doe",
    "Female",
    "British",
    "janedoe",
    "jane.doe@example.com",
    true,
    "securepassword",
    "Jane's bio goes here.",
    28
  ),
  new User(
    "Alex",
    "Smith",
    "Non-binary",
    "Canadian",
    "alexsmith",
    "alex.smith@example.com",
    false,
    "alexspassword",
    "All about Alex.",
    35
  ),
  new User(
    "Emily",
    "Clark",
    "Female",
    "Australian",
    "emilyclark",
    "emily.clark@example.com",
    false,
    "emilyspassword",
    "Explorer and photographer.",
    26
  ),
  new User(
    "Michael",
    "Brown",
    "Male",
    "German",
    "michaelbrown",
    "michael.brown@example.com",
    true,
    "michaelspass",
    "Coffee enthusiast. Avid reader.",
    32
  ),
  new User(
    "Luis",
    "Gomez",
    "Male",
    "Spanish",
    "luisgomez",
    "luis.gomez@example.com",
    false,
    "luispassword",
    "Music lover, Guitar player.",
    29
  ),
  new User(
    "Sophia",
    "Lopez",
    "Female",
    "Mexican",
    "sophialopez",
    "sophia.lopez@example.com",
    true,
    "sophiaspassword",
    "Digital marketer and content creator.",
    31
  ),
];
console.log(users)

//   1. sortUsersByUsername() - parameter array qəbul edir və geriyə username-ə görə A-Z sort edir.
// function sortUsersByUsername(array) {
//     array.sort((a, b) =>a.username.localeCompare - b.username.localeCompare);
//     return array;
// }
// console.log(sortUsersByUsername(users));

// 2. filterByBirthYear() - parameter olaraq users array-i, bir year qəbul edir və həmin ildən böyük olan user-ləri filter edir.
function filterByBirthYear(array, age) {
  let res = array.filter((array) => array.getBirthYear() > age);
  return res;
}
console.log(filterByBirthYear(users, 10));

//-------------------------------------------------------------------

const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const filterSelect = document.querySelector("#filterSelect");


//search //function
function searchTodo() {
  const searchText = searchInput.value.toLowerCase();
  const filteredTodos = todos.filter((item) =>
    item.todoItem.toLowerCase().startsWith(searchText)
  );
  drawTable(filteredTodos);
}
searchInput.addEventListener("input", searchTodo);

sortSelect.addEventListener("change", function () {
  const selectedValue = sortSelect.value;
  if (selectedValue === "date") {
    sortByDate(); // Tarihe göre sırala
  } else if (selectedValue === "name") {
    sortByName(); // Ada göre sırala
  }
  drawTable(todos); // Tabloyu güncelle
});

function sortByDate() {
  todos.sort((a, b) => new Date(a.date) - new Date(b.date));
}

function sortByName() {
  todos.sort((a, b) => a.todoItem.localeCompare(b.todoItem));
}

function filterDone() {
  const undoneTodos = todos.filter((todo) => !todo.completed);
  drawTable(undoneTodos);
}

filterSelect.addEventListener("change", function () {
  const selectedValue = filterSelect.value;
  if (selectedValue === "undone") {
    filterDone();
  } else {
    drawTable(todos);
  }
});


// <div class="search-sort-filter">
//                 <input type="text" id="search-input" placeholder="Search...">
//                 <select id="sort-select">
//                     <option disabled selected hidden value="">Sort</option>
//                     <option value="date">Date</option>
//                     <option value="name">Name</option>
//                 </select>
//                 <select id="filterSelect">
//                     <option value="all">All</option>
//                     <option value="undone">Undone</option>
//                   </select>
//             </div>