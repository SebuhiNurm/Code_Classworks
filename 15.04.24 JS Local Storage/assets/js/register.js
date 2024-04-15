import {getLocalStorage, setLocalStorage} from "./function.js"
import { User } from "./class.js";
let form = document.querySelector("form")
let allInputs = document.querySelectorAll(".form-control");

let allUsers = getLocalStorage() || [];
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
})
