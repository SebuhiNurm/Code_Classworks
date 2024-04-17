const url = new URLSearchParams(window.location.search);
import { BASE_URL } from "./constant.js";
const id = url.get("id");

const wrapper = document.querySelector(".wrapper");
async function getData(endpoint, id) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}/${id}`);
    const data = await response.json();
    drawDetail(data);
  } catch (error) {
    console.log(error);
  } finally {
  }
}
getData("suppliers", id);

function drawDetail(data) {
  wrapper.innerHTML = "";
  wrapper.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${data.companyName}</h5>
                  <p class="card-text">${data.address.street}</p>
                  <p class="card-text">${data.address.city}, ${data.address.country}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
`;
}
