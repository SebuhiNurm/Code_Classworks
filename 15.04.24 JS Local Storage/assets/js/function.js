export function setLocalStorage(arr) {
    localStorage.setItem("users", JSON.stringify(arr))
}
export function getLocalStorage() {
    return JSON.parse(localStorage.getItem("users"))
}
export function createUsers(username, email, password) {
    let user = new User(username, email, password);
    return user;
  }
  