const userForm = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

let users = [];
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  generateId() {
    return (this.id = Date.now());
  }
}
function createUser(username, email, password) {
  let user = new User(username, email, password);
  // resetForm
  user.generateId();
  return user;
}

userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let newUser = createUser(username.value, email.value, password.value);
  users.push(newUser);
  console.log(users);
});