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

addEducationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedEducationArray =
    JSON.parse(localStorage.getItem("education")) || educationArray;

  fetchedEducationArray.push(educationValue);
  localStorage.setItem("education", JSON.stringify(fetchedEducationArray));
  updateEducationContainerHtml();

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

      updateInput(event.target, "education", "university");
    });
  });
  specialtyInput.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();

      updateInput(event.target, "education", "specialty");
    });
  });
  schoolStartDate.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      updateInput(event.target, "education", "start-date");
    });
  });
  schoolFinishDate.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();

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
  let btnArray = Array.from(allBtns);
  let test = btnArray.filter((el) => {
    return el === target;
  });
  let ind = btnArray.indexOf(test[0]);
  let container = Array.from(document.querySelectorAll(`.${obj.prop1}`));
  let targetedElement = container[ind];
  targetedElement.remove();
  let fetchedArray = JSON.parse(localStorage.getItem(`${obj.prop2}`));
  fetchedArray.splice(ind, 1);
  localStorage.setItem(`${obj.prop2}`, JSON.stringify(fetchedArray));
  let html = document.querySelector(`${obj.prop3}`).innerHTML;
  localStorage.setItem(`${obj.prop4}`, JSON.stringify(html));
}

let optionsEducation = {
  class: ".education-btn",
  prop1: "education",
  prop2: "education",
  prop3: ".education-main-container",
  prop4: "educationHTML",
};

attachEventListenersEducation();

if (fetchedEducation.length > 0) {
  for (let i = 0; i < fetchedEducation.length; i++) {
    universityInputs[i].value = fetchedEducation[i].university;
    specialtyInput[i].value = fetchedEducation[i].specialty;
    schoolStartDate[i].value = fetchedEducation[i]["start-date"];
    schoolFinishDate[i].value = fetchedEducation[i]["finish-date"];
  }
}

let experienceContainerHTML =
  JSON.parse(localStorage.getItem("experienceHTML")) ||
  document.querySelector(".experience-main-container").innerHTML;
document.querySelector(".experience-main-container").innerHTML =
  experienceContainerHTML;
let experienceArray = [experienceValue];
let fetchedExperience =
  JSON.parse(localStorage.getItem("experience-details")) || experienceArray;

if (
  localStorage.getItem("experience-details") === null ||
  (localStorage.getItem("experience-details") === undefined &&
    allExperienceDivs.length != 0)
) {
  localStorage.setItem("experience-details", JSON.stringify(experienceArray));
}

addExperienceBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedExperienceArray =
    JSON.parse(localStorage.getItem("experience-details")) || experienceArray;
  fetchedExperienceArray.push(experienceValue);
  localStorage.setItem(
    "experience-details",
    JSON.stringify(fetchedExperienceArray)
  );
  updateExperienceHtml();

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
      updateInput(e.target, "experience-details", "employer-name");
    });
  });
  occupationInput.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      updateInput(e.target, "experience-details", "occupation");
    });
  });
  jobStartDate.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      updateInput(e.target, "experience-details", "job-start-date");
    });
  });
  jobFinishDate.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      updateInput(e.target, "experience-details", "job-finish-date");
    });
  });
  jobDescriptionInput.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
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

for (let i = 0; i < fetchedExperience.length; i++) {
  employerInput[i].value = fetchedExperience[i]["employer-name"];
  occupationInput[i].value = fetchedExperience[i].occupation;
  jobDescriptionInput[i].value = fetchedExperience[i]["job-description"];
  jobStartDate[i].value = fetchedExperience[i]["job-start-date"];
  jobFinishDate[i].value = fetchedExperience[i]["job-finish-date"];
}

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

addRefBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedRefAArray =
    JSON.parse(localStorage.getItem("reference")) || refArray;
  fetchedRefAArray.push(refValue);
  localStorage.setItem("reference", JSON.stringify(fetchedRefAArray));
  updateRefHTML();
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
      e.preventDefault();
      e.stopImmediatePropagation();
      removeItem(e.target, optionsReference);
    });
  });
}

attachEventListenersReference();

for (let i = 0; i < fetchedReferences.length; i++) {
  refName[i].value = fetchedReferences[i]["reference-name"];
  refEmail[i].value = fetchedReferences[i]["reference-email"];
}

//
let skillLevel = document.querySelector(".level-select");
let skillName = document.querySelector("#skill-name");
let skillsArray = [skillValue];
let allSkillsDivs = Array.from(document.querySelectorAll(".skills-container"));
let skillsDeleteBtns = Array.from(document.querySelectorAll(".remove-Skill"));

if (
  localStorage.getItem("skills-container") === null ||
  (localStorage.getItem("skills-container") === undefined &&
    allSkillsDivs.length != 0)
) {
  localStorage.setItem("skills-container", JSON.stringify(skillsArray));
}

let skillsContainerHTML =
  JSON.parse(localStorage.getItem("skillHtml")) ||
  document.querySelector(".skills-main-container").innerHTML;
document.querySelector(".skills-main-container").innerHTML =
  skillsContainerHTML;

let fetchedSkills =
  JSON.parse(localStorage.getItem("skills-container")) || skillsArray;

let addSkillBtn = document.querySelector(".add-skill");

let optionsSkill = {
  class: ".remove-Skill",
  prop1: "skills-container",
  prop2: "skills-container",
  prop3: ".skills-main-container",
  prop4: "skillHtml",
};

function attachEventListenersSkills() {
  skillName = document.querySelectorAll("#skill-name");
  skillLevel = document.querySelectorAll(".level-select");
  skillsDeleteBtns = Array.from(document.querySelectorAll(".remove-Skill"));
  skillName.forEach((el) => {
    el.addEventListener("input", (e) => {
      updateInput(e.target, "skills-container", "skill-name");
    });
  });
  skillLevel.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.preventDefault();
      updateInput(e.target, "skills-container", "level-label");
    });
  });
  skillsDeleteBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      removeItem(e.target, optionsSkill);
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
  updateSkillsHtml();
  attachEventListenersSkills();
  updateContent(skillsContainerHTML, "skills-main-container", "skillHtml");
});

for (let i = 0; i < fetchedSkills.length; i++) {
  skillName[i].value = fetchedSkills[i]["skill-name"];
  skillLevel[i].value = fetchedSkills[i]["level-label"];
}
