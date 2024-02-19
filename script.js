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
  updateContent,
  desiredJob,
  uploadedPicture,
  uploadPictureFnc,
} from "./functions.js";

// DOM Elements for Personal Information
const personObj = JSON.parse(localStorage.getItem("person")) || {
  nameInput: "",
  address: "",
  about: "",
  phone: "",
  email: "",
  photo: "",
  desiredJob: "",
};

// DOM Elements for EducationSection
let universityInputs = document.querySelectorAll(".university-input");
let specialtyInput = document.querySelectorAll(".specialty-input");
let schoolStartDate = document.querySelectorAll(".start-date-input");
let schoolFinishDate = document.querySelectorAll(".finish-date-input");
let eduBtns = document.querySelectorAll(".education-btn");

//Dom Elements for Experience Section

let employerInput = document.querySelectorAll(".employer-name-input");
let occupationInput = document.querySelectorAll(".occupation-input");
let jobDescriptionInput = document.querySelectorAll(".job-description-input");
let jobStartDate = document.querySelectorAll(".job-start-date-input");
let jobFinishDate = document.querySelectorAll(".job-finish-date-input");
let removeExperienceBtn = document.querySelectorAll(".remove-experience");

const addExperienceBtn = document.querySelector(".add-experience");

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
// localStorage.clear();
// EducationFunctionality
let educationContainerHTML =
  JSON.parse(localStorage.getItem("educationHTML")) ||
  document.querySelector(".education-main-container").innerHTML;
document.querySelector(".education-main-container").innerHTML =
  educationContainerHTML;
let educationArray = [educationValue];

// / es satestoa

if (
  localStorage.getItem("education") === null ||
  localStorage.getItem("education") === undefined ||
  localStorage.getItem("education") === ""
) {
  // Set the value for "education" in local storage
  localStorage.setItem("education", JSON.stringify(educationArray));
}
// localStorage.setItem("education", JSON.stringify(educationArray));

// es satestoa
let fetchedEducation =
  JSON.parse(localStorage.getItem("education")) || educationArray;
console.log(fetchedEducation);
let id = fetchedEducation.length;
addEducationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedEducationArray =
    JSON.parse(localStorage.getItem("education")) || educationArray;
  educationValue.id = id;
  fetchedEducationArray.push(educationValue);
  localStorage.setItem("education", JSON.stringify(fetchedEducationArray));
  updateEducationContainerHtml(id);
  id++;
  attachEventListenersEducation();

  updateContent(
    educationContainerHTML,
    "education-main-container",
    "educationHTML"
  );
});
// localStorage.clear();
// localStorage.clear();
function attachEventListenersEducation() {
  universityInputs = document.querySelectorAll(".university-input");
  specialtyInput = document.querySelectorAll(".specialty-input");
  schoolStartDate = document.querySelectorAll(".start-date-input");
  schoolFinishDate = document.querySelectorAll(".finish-date-input");
  eduBtns = document.querySelectorAll(".education-btn");

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

  // eduBtns.forEach((btn) => {
  //   handleRemoveFunction(btn);
  // });
}

// let optionsEducation = {
//   id: "data-edu-id",
//   prop1: "education",
//   prop2: "education",
//   array: fetchedEducation,
//   prop3: ".education-main-container",
//   prop4: "educationHTML",
// };
// console.log(fetchedEducation);

// let allEducationDivs = Array.from(document.querySelectorAll(".education"));
// console.log(allEducationDivs);
// allEducationDivs.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (e.target.classList.contains("education-btn")) {
//       let fetchedEducationArray =
//         JSON.parse(localStorage.getItem("education")) || educationArray;
//       console.log(e.target);
//       let btnId = e.target.getAttribute("data-edu-id");
//       let targetItem = fetchedEducationArray.findIndex((item) => {
//         return item.id == btnId;
//       });
//       console.log(targetItem);
// fetchedEducationArray.splice(targetItem, 1);
// localStorage.setItem("education", JSON.stringify(fetchedEducationArray));
// let container = Array.from(document.querySelectorAll(`.education`));
// let item = container[btnId];
// console.log(item);
// item.remove();
//     }
//   });
// });
// function handleRemoveFunction(el) {
//   el.addEventListener("click", (e) => {
//     fetchedEducation.forEach((item)=>{
//       if()
//     })
//     // e.preventDefault();
//     // removeItem(e.target, optionsEducation);
//   });
// }
// function removeItem(target, obj) {
//   let trgId = target.getAttribute(`${obj.id}`);
//   console.log(trgId);
//   let container = Array.from(document.querySelectorAll(`.${obj.prop1}`));
//   console.log(container);
//   let item = container.filter((el) => {
//     return el.id == trgId;
//   });
//   console.log(item);
//   item[0].remove();
//   let fetchedArray =
//     JSON.parse(localStorage.getItem(`${obj.prop2}`)) || obj.array;
//   console.log(fetchedArray);
//   fetchedArray.splice(trgId, 1);
//   console.log(fetchedArray);
//   localStorage.setItem(`${obj.prop2}`, JSON.stringify(fetchedArray));
//   let html = document.querySelector(`${obj.prop3}`).innerHTML;

//   localStorage.setItem(`${obj.prop4}`, JSON.stringify(html));
// }

// function removeItem(target, obj) {
//   let trgId = target.getAttribute(`${obj.id}`);
//   console.log(trgId);
//   let container = Array.from(document.querySelectorAll(`.${obj.prop1}`));
//   console.log(container);
//   let item = container.filter((el) => {
//     return el.id == trgId;
//   });
//   console.log(item);
//   item[0].remove();
//   let fetchedArray =
//     JSON.parse(localStorage.getItem(`${obj.prop2}`)) || obj.array;
//   console.log(fetchedArray);
//   fetchedArray.splice(trgId, 1);
//   console.log(fetchedArray);
//   localStorage.setItem(`${obj.prop2}`, JSON.stringify(fetchedArray));
//   let html = document.querySelector(`${obj.prop3}`).innerHTML;

//   localStorage.setItem(`${obj.prop4}`, JSON.stringify(html));
// }

attachEventListenersEducation();

if (fetchedEducation.length > 0) {
  for (let i = 0; i < fetchedEducation.length; i++) {
    universityInputs[i].value = fetchedEducation[i].university;
    specialtyInput[i].value = fetchedEducation[i].specialty;
    schoolStartDate[i].value = fetchedEducation[i]["start-date"];
    schoolFinishDate[i].value = fetchedEducation[i]["finish-date"];
  }
}

function inputEventHandler(el) {
  el.addEventListener("input", (e) => {
    updateInput(e.target, "education", educationArray, "id");
  });
}

// experienceDiv Functionality

let experienceContainerHTML =
  JSON.parse(localStorage.getItem("experienceHTML")) ||
  document.querySelector(".experience-main-container").innerHTML;
document.querySelector(".experience-main-container").innerHTML =
  experienceContainerHTML;
let experienceArray = [experienceValue];
let fetchedExperience =
  JSON.parse(localStorage.getItem("experience-details")) || experienceArray;
let expId = fetchedExperience.length;
addExperienceBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedExperienceArray =
    JSON.parse(localStorage.getItem("experience-details")) || experienceArray;
  fetchedExperienceArray.push(experienceValue);
  localStorage.setItem(
    "experience-details",
    JSON.stringify(fetchedExperienceArray)
  );
  updateExperienceHtml(expId);
  expId++;
  attachEventListenersExperience();

  updateContent(
    experienceContainerHTML,
    "experience-main-container",
    "experienceHTML"
  );
});

function attachEventListenersExperience() {
  employerInput = document.querySelectorAll(".employer-name-input");
  occupationInput = document.querySelectorAll(".occupation-input");
  jobDescriptionInput = document.querySelectorAll(".job-description-input");
  jobStartDate = document.querySelectorAll(".job-start-date-input");
  jobFinishDate = document.querySelectorAll(".job-finish-date-input");
  removeExperienceBtn = document.querySelectorAll(".remove-experience");

  employerInput.forEach((el) => {
    inputEventHandler2(el);
  });
  occupationInput.forEach((el) => {
    inputEventHandler2(el);
  });
  jobStartDate.forEach((el) => {
    inputEventHandler2(el);
  });
  jobFinishDate.forEach((el) => {
    inputEventHandler2(el);
  });
  jobDescriptionInput.forEach((el) => {
    inputEventHandler2(el);
  });
}

attachEventListenersExperience();

function inputEventHandler2(el) {
  el.addEventListener("input", (e) => {
    updateInput(e.target, "experience-details", experienceArray, "data-id");
  });
}

for (let i = 0; i < fetchedExperience.length; i++) {
  employerInput[i].value = fetchedExperience[i]["employer-name"];
  occupationInput[i].value = fetchedExperience[i].occupation;
  jobDescriptionInput[i].value = fetchedExperience[i]["job-description"];
  jobStartDate[i].value = fetchedExperience[i]["job-start-date"];
  jobFinishDate[i].value = fetchedExperience[i]["job-finish-date"];
}

// localStorage.clear();

//  photo upload functionality

let photo = document.querySelector("#photo");
uploadedPicture.src = JSON.parse(localStorage.getItem("image")) || " ";
photo.addEventListener("change", (e) => {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    const files = e.target.files;
    const picReader = new FileReader();
    picReader.addEventListener("load", (e) => {
      uploadPictureFnc(e);
    });
    picReader.readAsDataURL(files[0]);
  }
});
