"use strict";
// DOM ELEMENTS
import {
  updateEducationContainerHtml,
  updateInput,
  educationValue,
  addEducationBtn,
  array,
  experienceValue,
  updateExperienceHtml,
} from "./functions.js";

// DOM Elements for EducationSection
let universityInputs = document.querySelectorAll(".university-input");
let specialtyInput = document.querySelectorAll(".specialty-input");
let schoolStartDate = document.querySelectorAll(".start-date-input");
let schoolFinishDate = document.querySelectorAll(".finish-date-input");

//Dom Elements for Experience Section

let employerInput = document.querySelectorAll(".employer-name-input");
let occupationInput = document.querySelectorAll(".occupation-input");
let jobDescriptionInput = document.querySelectorAll(".job-description-input");
let jobStartDate = document.querySelectorAll(".job-start-date-input");
let jobFinishDate = document.querySelectorAll(".job-finish-date-input");
const addExperienceBtn = document.querySelector(".add-experience");

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
  element.value = personObj[element.id] || "";
  element.addEventListener("input", (e) => {
    updateLocalStorage(e.target);
  });
});

// EducationFunctionality
let educationContainerHTML =
  JSON.parse(localStorage.getItem("educationHTML")) ||
  document.querySelector(".education-main-container").innerHTML;
document.querySelector(".education-main-container").innerHTML =
  educationContainerHTML;
let educationArray = [educationValue];
let fetchedEducation =
  JSON.parse(localStorage.getItem("education")) || educationArray;

let id = fetchedEducation.length;
addEducationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedEducationArray =
    JSON.parse(localStorage.getItem("education")) || educationArray;
  fetchedEducationArray.push(educationValue);
  localStorage.setItem("education", JSON.stringify(fetchedEducationArray));
  updateEducationContainerHtml(id);
  id++;
  attachEventListenersEducation();
  educationContainerHTML = document.querySelector(
    ".education-main-container"
  ).innerHTML;
  localStorage.setItem("educationHTML", JSON.stringify(educationContainerHTML));
});

function attachEventListenersEducation() {
  universityInputs = document.querySelectorAll(".university-input");
  specialtyInput = document.querySelectorAll(".specialty-input");
  schoolStartDate = document.querySelectorAll(".start-date-input");
  schoolFinishDate = document.querySelectorAll(".finish-date-input");

  universityInputs.forEach((el) => {
    inputEventHandler(el);
  });
  specialtyInput.forEach((el) => {
    inputEventHandler(el);
  });
  schoolStartDate.forEach((el) => {
    inputEventHandler(el);
  });
  schoolFinishDate.forEach((el) => {
    inputEventHandler(el);
  });
}

attachEventListenersEducation();

// localStorage.clear();

for (let i = 0; i < fetchedEducation.length; i++) {
  universityInputs[i].value = fetchedEducation[i].university;
  specialtyInput[i].value = fetchedEducation[i].specialty;
  schoolStartDate[i].value = fetchedEducation[i]["start-date"];
  schoolFinishDate[i].value = fetchedEducation[i]["finish-date"];
}

function inputEventHandler(el) {
  el.addEventListener("input", (e) => {
    updateInput(e.target, "education", educationArray);
  });
}

// experienceDiv Functionality

// function inputEventHandlerExperience(el) {
//   el.addEventListener("input", (e) => {
//     updateInput(e.target, "education", educationArray);
//   });
// }

let experienceContainerHTML =
  JSON.parse(localStorage.getItem("experienceHTML")) ||
  document.querySelector(".experience-main-container").innerHTML;
document.querySelector(".experience-main-container").innerHTML =
  experienceContainerHTML;
let experienceArray = [experienceValue];
let fetchedExperience =
  JSON.parse(localStorage.getItem("experience")) || experienceArray;

let expId = fetchedExperience.length;
addExperienceBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedExperienceArray =
    JSON.parse(localStorage.getItem("experience")) || experienceArray;
  fetchedExperienceArray.push(experienceValue);
  localStorage.setItem("experience", JSON.stringify(fetchedExperienceArray));
  updateExperienceHtml(expId);
  expId++;
  attachEventListenersExperience();
  experienceContainerHTML = document.querySelector(
    ".experience-main-container"
  ).innerHTML;
  localStorage.setItem(
    "experienceHTML",
    JSON.stringify(experienceContainerHTML)
  );
});

function attachEventListenersExperience() {
  employerInput = document.querySelectorAll(".employer-name-input");
  occupationInput = document.querySelectorAll(".occupation-input");
  jobDescriptionInput = document.querySelectorAll(".job-description-input");
  jobStartDate = document.querySelectorAll(".job-start-date-input");
  jobFinishDate = document.querySelectorAll(".job-finish-date-input");

  employerInput.forEach((el) => {
    // inputEventHandler(el);
  });
  occupationInput.forEach((el) => {
    // inputEventHandler(el);
  });
  jobStartDate.forEach((el) => {
    // inputEventHandler(el);
  });
  jobFinishDate.forEach((el) => {
    // inputEventHandler(el);
  });
  jobDescriptionInput.forEach((el) => {
    // inputEventHandler(el);
  });
}
