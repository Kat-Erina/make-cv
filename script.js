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
  refValue,
  updateRefHTML,
  skillValue,
  updateSkillsHtml,
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
let eduBtns = Array.from(document.querySelectorAll(".education-btn"));
let allEducationDivs = document.querySelectorAll(".education");
let allDivs = Array.from(allEducationDivs);
console.log(allDivs.length);
//Dom Elements for Experience Section

let employerInput = document.querySelectorAll(".employer-name-input");
let occupationInput = document.querySelectorAll(".occupation-input");
let jobDescriptionInput = document.querySelectorAll(".job-description-input");
let jobStartDate = document.querySelectorAll(".job-start-date-input");
let jobFinishDate = document.querySelectorAll(".job-finish-date-input");
let removeExperienceBtn = document.querySelectorAll(".remove-experience");

const addExperienceBtn = document.querySelector(".add-experience");

// Dom Elements for Reference Container
let refMainContainer = document.querySelector(".references-main-container");
let allReferenceContainer = document.querySelectorAll(".reference");
let refName = document.querySelectorAll("#reference-name");
let refEmail = document.querySelectorAll("#reference-email");
let addRefBtn = document.querySelector(".add-reference");
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

let educationArray = [educationValue];

// / es satestoa
if (
  localStorage.getItem("education") === null ||
  (localStorage.getItem("education") === undefined && allDivs.length != 0)
) {
  localStorage.setItem("education", JSON.stringify(educationArray));
}

let educationContainerHTML =
  JSON.parse(localStorage.getItem("educationHTML")) ||
  document.querySelector(".education-main-container").innerHTML;

document.querySelector(".education-main-container").innerHTML =
  educationContainerHTML;
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
  eduBtns = Array.from(document.querySelectorAll(".education-btn"));
  allEducationDivs = Array.from(document.querySelectorAll(".education"));
  console.log(allEducationDivs, eduBtns);
});
// localStorage.clear();
// localStorage.clear();
function attachEventListenersEducation() {
  universityInputs = document.querySelectorAll(".university-input");
  specialtyInput = document.querySelectorAll(".specialty-input");
  schoolStartDate = document.querySelectorAll(".start-date-input");
  schoolFinishDate = document.querySelectorAll(".finish-date-input");
  eduBtns = Array.from(document.querySelectorAll(".education-btn"));
  allEducationDivs = Array.from(document.querySelectorAll(".education"));
  console.log(eduBtns, allEducationDivs);

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

  // es aris washlis kodis//
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

// localStorage.clear();
//
// eduBtns = Array.from(document.querySelectorAll(".education-btn"));
// allEducationDivs = Array.from(document.querySelectorAll(".education"));
// // console.log(allEducationDivs);
// allEducationDivs.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(eduBtns);
//     if (e.target.classList.contains("education-btn")) {
//       let fetchedEducationArray =
//         JSON.parse(localStorage.getItem("education")) || educationArray;
//       console.log(e.target);
//       console.log(fetchedEducationArray);
//       let btnId = e.target.getAttribute("data-edu-id");
//       console.log(btnId);
//       let targetItem = fetchedEducationArray.findIndex((item) => {
//         return item.id == btnId;
//       });
//       console.log(targetItem);
//       fetchedEducationArray.splice(targetItem, 1);
//       console.log(fetchedEducationArray);
//       localStorage.setItem("education", JSON.stringify(fetchedEducationArray));

//       //esaa problemuri
//       let container = Array.from(document.querySelectorAll(`.education`));
//       let item = container[targetItem];
//       console.log(item);
//       item.remove();
//       localStorage.setItem(
//         "educationHTML",
//         JSON.stringify(
//           document.querySelector(".education-main-container").innerHTML
//         )
//       );
//       eduBtns = Array.from(document.querySelectorAll(".education-btn"));
//       allEducationDivs = Array.from(document.querySelectorAll(".education"));
//       allEducationDivs = Array.from(document.querySelectorAll(".education"));
//       console.log(eduBtns, allEducationDivs, allEducationDivs);
//     }
//   });
//   //
// });
// function handleRemoveFunction(el) {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();
//     fetchedEducation.forEach((item) => {
//       if (0 < 2) {
//       }
//     });
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
// localStorage.clear();
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

// Reference functionality

let refContainerHTML =
  JSON.parse(localStorage.getItem("refHtml")) ||
  document.querySelector(".references-main-container").innerHTML;
document.querySelector(".references-main-container").innerHTML =
  refContainerHTML;
let refArray = [refValue];
let fetchedReferences =
  JSON.parse(localStorage.getItem("reference")) || refArray;
let refId = fetchedReferences.length;
console.log(refId);

addRefBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedRefAArray =
    JSON.parse(localStorage.getItem("reference")) || refArray;
  fetchedRefAArray.push(refValue);
  localStorage.setItem("reference", JSON.stringify(fetchedRefAArray));
  updateRefHTML(refId);
  refId++;
  attachEventListenersReference();
  updateContent(refContainerHTML, "references-main-container", "refHtml");
});

function attachEventListenersReference() {
  refName = document.querySelectorAll("#reference-name");
  refEmail = document.querySelectorAll("#reference-email");
  refName.forEach((el) => {
    inputEventHandler3(el);
  });
  refEmail.forEach((el) => {
    inputEventHandler3(el);
  });
}

function inputEventHandler3(el) {
  el.addEventListener("input", (e) => {
    updateInput(e.target, "reference", refArray, "data-ref-id");
  });
}

attachEventListenersReference();

for (let i = 0; i < fetchedReferences.length; i++) {
  refName[i].value = fetchedReferences[i]["reference-name"];
  refEmail[i].value = fetchedReferences[i]["reference-email"];
}

// skills Container functionality

let skillsContainerHTML =
  JSON.parse(localStorage.getItem("skillHtml")) ||
  document.querySelector(".skills-main-container").innerHTML;
document.querySelector(".skills-main-container").innerHTML =
  skillsContainerHTML;
//
let skillsArray = [skillValue];
let fetchedSkills =
  JSON.parse(localStorage.getItem("skills-container")) || skillsArray;
let skillId = fetchedSkills.length;
console.log(skillId);

let skillLevel = document.querySelector(".level-select");
let skillName = document.querySelector("#skill-name");
let addSkillBtn = document.querySelector(".add-skill");
skillLevel.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(e.target.value);
});

function attachEventListenersSkills() {
  skillName = document.querySelectorAll("#skill-name");
  skillLevel = document.querySelectorAll(".level-select");
  skillName.forEach((el) => {
    el.addEventListener("input", (e) => {
      updateInput(e.target, "skills-container", skillsArray, "data-skill-id");
    });
  });
  skillLevel.forEach((el) => {
    inputEventHandler4(el);
    // console.log(el.target)
  });
}
function inputEventHandler4(el) {
  el.addEventListener("input", (e) => {
    console.log(e.target.children);
    updateInput(e.target, "skills-container", skillsArray, "data-skill-id");
  });
}
attachEventListenersSkills();

addSkillBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedRefAArray =
    JSON.parse(localStorage.getItem("skills-container")) || skillsArray;
  fetchedRefAArray.push(skillValue);
  localStorage.setItem("skills-container", JSON.stringify(fetchedRefAArray));
  // updateRefHTML(refId);
  updateSkillsHtml(skillId);
  skillId++;
  attachEventListenersSkills();
  updateContent(skillsContainerHTML, "skills-main-container", "skillHtml");
});

for (let i = 0; i < fetchedSkills.length; i++) {
  skillName[i].value = fetchedSkills[i]["skill-name"];
  // skillLevel[i].value = fetchedReferences[i]["level-select"];
}
// localStorage.clear();

// recontainerHtml=skillsContainerHTML
// references-main-containrr= "skills-main-container"
// refHtml="skillHtml"
