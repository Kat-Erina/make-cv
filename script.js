// "use strict";
// DOM ELEMETS
import { updateEducationContainerHtml } from "./functions.js";
const nameInput = document.querySelector(".name-input");
const phone = document.querySelector(".phone-input");
const email = document.querySelector(".email-input");
const address = document.querySelector(".address-input");
const aboutMe = document.querySelector(".about-me-input");
const desiredJob = document.querySelector(".desired-job-input");
const addEducationBtn = document.querySelector(".add-education");
let array = [nameInput, phone, email, address, aboutMe, desiredJob];

let educationValue = {
  university: "",
  specialty: "",
  ["start-date"]: "",
  ["finish-date"]: "",
};
const personObj = {
  name: "",
  address: "",
  aboutMe: "",
  phone: "",
  email: "",
  education: [
    {
      university: "",
      specialty: "",
      ["start-date"]: "",
      ["finish-date"]: "",
    },
  ],
  experience: [],
  photo: "",
};
// personal information functionality

function updateLocalStorage(target) {
  let fetchedPersonObject =
    JSON.parse(localStorage.getItem("person")) || personObj;
  let newObj = { ...fetchedPersonObject, [target.id]: target.value };
  localStorage.setItem("person", JSON.stringify(newObj));
}

array.forEach((element) => {
  element.addEventListener("input", (e) => {
    updateLocalStorage(e.target);
  });
});

// educatioon finctionality

let id = 1;
addEducationBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let fetchedPersonObject =
    JSON.parse(localStorage.getItem("person")) || personObj;
  console.log(fetchedPersonObject);
  fetchedPersonObject.education.push(educationValue);
  console.log(fetchedPersonObject);
  updateEducationContainerHtml(id);
  id++;
  console.log(id);
  attachEventListeners();

  localStorage.setItem("person", JSON.stringify(fetchedPersonObject));
});
// function updateUniversityInput(target, index) {
//   let targetId = target.closest(".education").getAttribute("id");
//   console.log(targetId);
// }

function attachEventListeners() {
  let universityInputs = document.querySelectorAll(".university-input");
  let specialtyInput = document.querySelectorAll(".specialty-input");
  let schoolStartDate = document.querySelectorAll(".start-date-input");
  let schoolFinishDate = document.querySelectorAll(".finish-date-input");

  universityInputs.forEach((el) => {
    el.addEventListener("input", (e) => {
      console.log(e.target.value);
      let targetId = e.target.closest(".education").getAttribute("id");
      console.log(targetId);
      let fetchedPersonObject =
        JSON.parse(localStorage.getItem("person")) || personObj;
      console.log(fetchedPersonObject);
      let educationInformation = {
        ...fetchedPersonObject.education[targetId],
        [e.target.id]: e.target.value,
      };
      console.log(educationInformation);
      let updatedObject = {
        ...fetchedPersonObject,
        education: [
          educationInformation,
          ...fetchedPersonObject.education, // Copy the rest of the elements
        ],
      };
      localStorage.setItem("person", JSON.stringify(updatedObject));
    });
  });
  specialtyInput.forEach((el) => {
    el.addEventListener("input", (e) => {
      console.log(e.target.value);
      // Call your function here if needed
      // updateUniversityInput(e.target);
    });
  });
  schoolStartDate.forEach((el) => {
    el.addEventListener("input", (e) => {
      console.log(e.target.value);
      // Call your function here if needed
      // updateUniversityInput(e.target);
    });
  });
  schoolFinishDate.forEach((el) => {
    el.addEventListener("input", (e) => {
      console.log(e.target.value);
      // Call your function here if needed
      // updateUniversityInput(e.target);
    });
  });
}

attachEventListeners();

function UpdateEducation(el) {
  let targetId = el.closest(".education").getAttribute("id");
  console.log(targetId);
  let fetchedPersonObject =
    JSON.parse(localStorage.getItem("person")) || personObj;
  console.log(fetchedPersonObject);

  let { education } = fetchedPersonObject;
  console.log(education[targetId], targetId);
}
//
// localStorage.clear();
