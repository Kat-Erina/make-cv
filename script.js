// DOM ELEMETS

const nameInput = document.querySelector(".name-input");
const phone = document.querySelector(".phone-input");
const email = document.querySelector(".email-input");
const address = document.querySelector(".address-input");

let array = [nameInput, phone, email, address];

const personObj = {
  name: "",
  address: "",
  phone: "",
  email: "",
  education: [],
  experience: [],
  photo: "",
};
// localStorage.clear();
function updateLocalStorage(target) {
  let fetchedPersonObject =
    JSON.parse(localStorage.getItem("person")) || personObj;
  let newObj = { ...fetchedPersonObject, [target.id]: target.value };
  localStorage.setItem("person", JSON.stringify(newObj));
  console.log(target.id, target.value);
}

array.forEach((element) => {
  element.addEventListener("input", (e) => {
    updateLocalStorage(e.target);
  });
});
