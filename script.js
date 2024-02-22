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
// const { uuid } = require("uuidv4");
// import uuidv4
// const uniqueId = uuidv4();
// console.log(uniqueId);

// let idtest = crypto.randomUUID();
// console.log(idtest);
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
let educationDeleteBtns = Array.from(
  document.querySelectorAll(".education-btn")
);
let allEducationDivs = Array.from(document.querySelectorAll(".education"));

//Dom Elements for Experience Section

let employerInput = document.querySelectorAll(".employer-name-input");
let occupationInput = document.querySelectorAll(".occupation-input");
let jobDescriptionInput = document.querySelectorAll(".job-description-input");
let jobStartDate = document.querySelectorAll(".job-start-date-input");
let jobFinishDate = document.querySelectorAll(".job-finish-date-input");
let removeExperienceBtn = Array.from(
  document.querySelectorAll(".remove-experience")
);
let allExperienceDivs = Array.from(
  document.querySelectorAll(".experience-details")
);
// localStorage.clear();
const addExperienceBtn = document.querySelector(".add-experience");

// Dom Elements for Reference Container
let refMainContainer = document.querySelector(".references-main-container");
let allReferenceContainer = Array.from(document.querySelectorAll(".reference"));
let refName = document.querySelectorAll("#reference-name");
let refEmail = document.querySelectorAll("#reference-email");
let addRefBtn = document.querySelector(".add-reference");
let removeReferenceBtn = Array.from(
  document.querySelectorAll(".remove-reference")
);
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

//
let educationArray = [educationValue];

if (
  localStorage.getItem("education") === null ||
  (localStorage.getItem("education") === undefined &&
    allEducationDivs.length != 0)
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

let id = fetchedEducation.length;
addEducationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedEducationArray =
    JSON.parse(localStorage.getItem("education")) || educationArray;
  educationValue.id = id;
  console.log(id);
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

function attachEventListenersEducation() {
  universityInputs = document.querySelectorAll(".university-input");
  specialtyInput = document.querySelectorAll(".specialty-input");
  schoolStartDate = document.querySelectorAll(".start-date-input");
  schoolFinishDate = document.querySelectorAll(".finish-date-input");
  educationDeleteBtns = Array.from(document.querySelectorAll(".education-btn"));
  allEducationDivs = Array.from(document.querySelectorAll(".education"));

  universityInputs.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      console.log(event.target);
      updateInput(event.target, "education", "university");
    });
  });
  specialtyInput.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      console.log(event.target);
      updateInput(event.target, "education", "specialty");
    });
  });
  schoolStartDate.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      console.log(event.target);
      updateInput(event.target, "education", "start-date");
    });
  });
  schoolFinishDate.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      console.log(event.target);
      updateInput(event.target, "education", "finish-date");
    });
  });

  educationDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      removeItem(e.target, optionsEducation);
    });
  });
}

function removeItem(target, obj) {
  let allBtns = document.querySelectorAll(`${obj.class}`);
  console.log(allBtns);
  let btnArray = Array.from(allBtns);
  console.log(allBtns);
  console.log(btnArray);

  let test = btnArray.filter((el) => {
    return el === target;
  });
  console.log(test);

  let ind = btnArray.indexOf(test[0]);
  console.log(ind);
  // console.log(trgId);
  let container = Array.from(document.querySelectorAll(`.${obj.prop1}`));
  console.log(container);
  let targetedElement = container[ind];
  console.log(targetedElement);
  targetedElement.remove();
  let fetchedArray = JSON.parse(localStorage.getItem(`${obj.prop2}`));
  console.log(fetchedArray);
  fetchedArray.splice(ind, 1);
  // id = fetchedArray.length;
  console.log(fetchedArray);
  localStorage.setItem(`${obj.prop2}`, JSON.stringify(fetchedArray));
  let html = document.querySelector(`${obj.prop3}`).innerHTML;

  // console.log(id);
  localStorage.setItem(`${obj.prop4}`, JSON.stringify(html));
}

// localStorage.clear();
// function removeItem(target, obj) {
//   let trgId = target.getAttribute(`${obj.id2}`);
//   console.log(trgId);
//   let container = Array.from(document.querySelectorAll(`.${obj.prop1}`));

//   console.log(container);
//   let item = container.filter((el) => {
//     return el.id == trgId;
//   });
//   console.log(item);

//   let targetItem = container.findIndex((item) => {
//     return item.id == trgId;
//   });

//   console.log(targetItem);
//   //
//   item[0].remove();
//   let fetchedArray =
//     JSON.parse(localStorage.getItem(`${obj.prop2}`)) || obj.array;
//   console.log(fetchedArray);

//   fetchedArray.splice(targetItem, 1);
//   id = fetchedArray.length;
//   console.log(fetchedArray);
//   localStorage.setItem(`${obj.prop2}`, JSON.stringify(fetchedArray));
//   let html = document.querySelector(`${obj.prop3}`).innerHTML;

//   console.log(id);
//   localStorage.setItem(`${obj.prop4}`, JSON.stringify(html));
// }

// es axalia

let optionsEducation = {
  // id2: ".data-edu-id",
  class: ".education-btn",
  prop1: "education",
  prop2: "education",
  // array: fetchedEducation,
  prop3: ".education-main-container",
  prop4: "educationHTML",
};

// let optionsExperience = {
//   class:".remove-experience",
//   prop1: "experience-details",
//   prop2: "experience-details",
//   array: fetchedExperience,
//   prop3: ".experience-main-container",
//   prop4: "experienceHTML",
//   // prop5: expId,
// };

// function removeItem(target, obj) {
//   let allBtns = document.querySelectorAll(`${obj.class}`);

//   let btnArray = Array.from(allBtns);
//   console.log(allBtns);
//   console.log(btnArray);

//   let test = btnArray.filter((el) => {
//     return el === target;
//   });
//   console.log(test);

//   let ind = btnArray.indexOf(test[0]);
//   console.log(ind);
//   // console.log(trgId);
//   let container = Array.from(document.querySelectorAll(`.${obj.prop1}`));
//   console.log(container);
//   let targetedElement = container[ind];
//   console.log(targetedElement);
//   targetedElement.remove();
//   let fetchedArray = JSON.parse(localStorage.getItem(`${obj.prop2}`));
//   console.log(fetchedArray);
//   fetchedArray.splice(ind, 1);
//   // id = fetchedArray.length;
//   console.log(fetchedArray);
//   localStorage.setItem(`${obj.prop2}`, JSON.stringify(fetchedArray));
//   let html = document.querySelector(`${obj.prop3}`).innerHTML;

//   // console.log(id);
//   localStorage.setItem(`${obj.prop4}`, JSON.stringify(html));
// }

// localStorage.clear();
attachEventListenersEducation();

if (fetchedEducation.length > 0) {
  for (let i = 0; i < fetchedEducation.length; i++) {
    universityInputs[i].value = fetchedEducation[i].university;
    specialtyInput[i].value = fetchedEducation[i].specialty;
    schoolStartDate[i].value = fetchedEducation[i]["start-date"];
    schoolFinishDate[i].value = fetchedEducation[i]["finish-date"];
  }
}

// function inputEventHandler(el) {
//   el.addEventListener("input", (e) => {
//     e.stopImmediatePropagation();
//     console.log(e.target);
//     updateInput(e.target, "education", "university");
//   });
// }

// experienceDiv Functionality
// localStorage.clear();
let experienceContainerHTML =
  JSON.parse(localStorage.getItem("experienceHTML")) ||
  document.querySelector(".experience-main-container").innerHTML;
document.querySelector(".experience-main-container").innerHTML =
  experienceContainerHTML;
let experienceArray = [experienceValue];
let fetchedExperience =
  JSON.parse(localStorage.getItem("experience-details")) || experienceArray;
let expId = fetchedExperience.length;
console.log(expId);
if (
  localStorage.getItem("experience-details") === null ||
  (localStorage.getItem("experience-details") === undefined &&
    allExperienceDivs.length != 0)
) {
  localStorage.setItem("experience-details", JSON.stringify(experienceArray));
}
//
addExperienceBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedExperienceArray =
    JSON.parse(localStorage.getItem("experience-details")) || experienceArray;
  experienceValue.id = expId;
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

let optionsExperience = {
  class: ".remove-experience",
  prop1: "experience-details",
  prop2: "experience-details",
  array: fetchedExperience,
  prop3: ".experience-main-container",
  prop4: "experienceHTML",
  // prop5: expId,
};

// localStorage.clear();
function attachEventListenersExperience() {
  employerInput = document.querySelectorAll(".employer-name-input");
  occupationInput = document.querySelectorAll(".occupation-input");
  jobDescriptionInput = document.querySelectorAll(".job-description-input");
  jobStartDate = document.querySelectorAll(".job-start-date-input");
  jobFinishDate = document.querySelectorAll(".job-finish-date-input");
  removeExperienceBtn = Array.from(
    document.querySelectorAll(".remove-experience")
  );

  allExperienceDivs = Array.from(
    document.querySelectorAll(".experience-details")
  );

  employerInput.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      console.log(e.target);
      updateInput(e.target, "experience-details", "employer-name");
    });
  });
  occupationInput.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      console.log(e.target);
      updateInput(e.target, "experience-details", "occupation");
    });
  });
  jobStartDate.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      console.log(e.target);
      updateInput(e.target, "experience-details", "job-start-date");
    });
  });
  jobFinishDate.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      console.log(e.target);
      updateInput(e.target, "experience-details", "job-finish-date");
    });
  });
  jobDescriptionInput.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      console.log(e.target);
      updateInput(e.target, "experience-details", "job-description");
    });
  });
  removeExperienceBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      removeItem(e.target, optionsExperience);
    });
  });
}

attachEventListenersExperience();
// // e.target, "education", "university"
// function inputEventHandler2(el) {
//   el.addEventListener("input", (e) => {
//     updateInput(e.target, "experience-details", experienceArray, "data-id");
//   });
// }
console.log(fetchedExperience);
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

let refArray = [refValue];
if (
  localStorage.getItem("reference") === null ||
  (localStorage.getItem("reference") === undefined &&
    allReferenceContainer.length != 0)
) {
  localStorage.setItem("reference", JSON.stringify(refArray));
}
let refContainerHTML =
  JSON.parse(localStorage.getItem("refHtml")) ||
  document.querySelector(".references-main-container").innerHTML;
document.querySelector(".references-main-container").innerHTML =
  refContainerHTML;

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

let optionsReference = {
  class: ".remove-reference",
  prop1: "reference",
  prop2: "reference",
  array: fetchedExperience,
  prop3: ".references-main-container",
  prop4: "refHtml",
};

function attachEventListenersReference() {
  refName = document.querySelectorAll("#reference-name");
  refEmail = document.querySelectorAll("#reference-email");
  removeReferenceBtn = Array.from(
    document.querySelectorAll(".remove-reference")
  );
  refName.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      updateInput(event.target, "reference", "reference-name");
    });
  });
  refEmail.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      updateInput(event.target, "reference", "reference-email");
    });
  });
  removeReferenceBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(e.target);

      e.preventDefault();
      e.stopImmediatePropagation();
      removeItem(e.target, optionsReference);
    });
  });
}
// localStorage.clear();
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
console.log(skillLevel);
let skillName = document.querySelector("#skill-name");
let addSkillBtn = document.querySelector(".add-skill");
skillLevel.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(e.target.value);
});

function attachEventListenersSkills() {
  skillName = document.querySelectorAll("#skill-name");
  skillLevel = document.querySelectorAll(".level-select");
  console.log(skillLevel);
  skillName.forEach((el) => {
    el.addEventListener("input", (e) => {
      console.log(e.target.value);
      updateInput(e.target, "skills-container", skillsArray, "data-skill-id");
    });
  });
  skillLevel.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.preventDefault();

      updateInput(e.target, "skills-container", skillsArray, "data-skill-id");
    });
  });
}

attachEventListenersSkills();

addSkillBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedRefAArray =
    JSON.parse(localStorage.getItem("skills-container")) || skillsArray;
  fetchedRefAArray.push(skillValue);
  localStorage.setItem("skills-container", JSON.stringify(fetchedRefAArray));
  updateSkillsHtml(skillId);
  skillId++;
  attachEventListenersSkills();
  updateContent(skillsContainerHTML, "skills-main-container", "skillHtml");
});

for (let i = 0; i < fetchedSkills.length; i++) {
  skillName[i].value = fetchedSkills[i]["skill-name"];
  skillLevel[i].value = fetchedSkills[i]["level-label"];
}
// localStorage.clear();
