"use strict";
// DOM ELEMETS
import {
  updateEducationContainerHtml,
  updateEducationInput,
} from "./functions.js";
const nameInput = document.querySelector(".name-input");
const phone = document.querySelector(".phone-input");
const email = document.querySelector(".email-input");
const address = document.querySelector(".address-input");
const aboutMe = document.querySelector(".about-me-input");
const desiredJob = document.querySelector(".desired-job-input");
const addEducationBtn = document.querySelector(".add-education");
let array = [nameInput, phone, email, address, aboutMe, desiredJob];

const personObj = JSON.parse(localStorage.getItem("person")) || {
  nameInput: "",
  address: "",
  about: "",
  phone: "",
  email: "",
  photo: "",
  desiredJob: "",
};

// personal information functionality

function updateLocalStorage(target) {
  let fetchedPersonObject =
    JSON.parse(localStorage.getItem("person")) || personObj;
  let newObj = { ...fetchedPersonObject, [target.id]: target.value };
  localStorage.setItem("person", JSON.stringify(newObj));
}

array.forEach((element) => {
  element.value = personObj[element.id];
  element.addEventListener("input", (e) => {
    updateLocalStorage(e.target);
  });
});

// educatioon finctionality
let educationId = 0;
let educationValue = {
  educationId,
  university: "",
  specialty: "",
  ["start-date"]: "",
  ["finish-date"]: "",
};
let educationArray = [educationValue];
let fetchedEducation =
  JSON.parse(localStorage.getItem("education")) || educationArray;

let id = 1;
addEducationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedEducationArray =
    JSON.parse(localStorage.getItem("education")) || educationArray;
  fetchedEducationArray.push(educationValue);
  updateEducationContainerHtml(id);
  id++;
  attachEventListenersEducation();
  localStorage.setItem("education", JSON.stringify(fetchedEducationArray));
});

function attachEventListenersEducation() {
  let universityInputs = document.querySelectorAll(".university-input");
  let specialtyInput = document.querySelectorAll(".specialty-input");
  let schoolStartDate = document.querySelectorAll(".start-date-input");
  let schoolFinishDate = document.querySelectorAll(".finish-date-input");

  universityInputs.forEach((el) => {
    test(el);
  });
  specialtyInput.forEach((el) => {
    test(el);
  });
  schoolStartDate.forEach((el) => {
    test(el);
  });
  schoolFinishDate.forEach((el) => {
    test(el);
  });
}

attachEventListenersEducation();

// localStorage.clear();

function test(el) {
  el.addEventListener("input", (e) => {
    console.log(e.target.value);
    updateEducationInput(e.target, "education", educationArray);
  });
}
