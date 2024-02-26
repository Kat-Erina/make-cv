"use strict";
import {
  updateEducationContainerHtml,
  updateInput,
  educationValue,
  array,
  experienceValue,
  updateExperienceHtml,
  updateContent,
  uploadedPicture,
  uploadPictureFnc,
  refValue,
  updateRefHTML,
  skillValue,
  updateSkillsHtml,
} from "./functions.js";

// localStorage.clear();
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

let educationArray = [educationValue];
let educationObj = {
  universityInputs: document.querySelectorAll(".university-input"),
  specialtyInput: document.querySelectorAll(".specialty-input"),
  schoolStartDate: document.querySelectorAll(".start-date-input"),
  schoolFinishDate: document.querySelectorAll(".finish-date-input"),
  educationDeleteBtns: Array.from(document.querySelectorAll(".education-btn")),
  allEducationDivs: Array.from(document.querySelectorAll(".education")),
  addEducationBtn: document.querySelector(".add-education"),
  educationContainerHTML:
    JSON.parse(localStorage.getItem("educationHTML")) ||
    document.querySelector(".education-main-container").innerHTML,
  fetchedEducation:
    JSON.parse(localStorage.getItem("education")) || educationArray,
  optionsEducation: {
    class: ".education-btn",
    prop1: "education",
    prop2: "education",
    prop3: ".education-main-container",
    prop4: "educationHTML",
  },
};

//Dom Elements for Experience Section

let experienceArray = [experienceValue];
let experienceObj = {
  employerInput: document.querySelectorAll(".employer-name-input"),
  occupationInput: document.querySelectorAll(".occupation-input"),
  jobDescriptionInput: document.querySelectorAll(".job-description-input"),
  jobStartDate: document.querySelectorAll(".job-start-date-input"),
  jobFinishDate: document.querySelectorAll(".job-finish-date-input"),
  removeExperienceBtn: Array.from(
    document.querySelectorAll(".remove-experience")
  ),
  allExperienceDivs: Array.from(
    document.querySelectorAll(".experience-details")
  ),
  addExperienceBtn: document.querySelector(".add-experience"),
  experienceContainerHTML:
    JSON.parse(localStorage.getItem("experienceHTML")) ||
    document.querySelector(".experience-main-container").innerHTML,
  fetchedExperience:
    JSON.parse(localStorage.getItem("experience-details")) || experienceArray,
  optionsExperience: {
    class: ".remove-experience",
    prop1: "experience-details",
    prop2: "experience-details",
    prop3: ".experience-main-container",
    prop4: "experienceHTML",
  },
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

if (
  localStorage.getItem("education") === null ||
  (localStorage.getItem("education") === undefined &&
    educationObj.allEducationDivs.length != 0)
) {
  localStorage.setItem("education", JSON.stringify(educationArray));
}

document.querySelector(".education-main-container").innerHTML =
  educationObj.educationContainerHTML;

educationObj.addEducationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedEducationArray =
    JSON.parse(localStorage.getItem("education")) || educationArray;
  fetchedEducationArray.push(educationValue);
  localStorage.setItem("education", JSON.stringify(fetchedEducationArray));
  updateEducationContainerHtml();
  attachEventListenersEducation();
  updateContent(
    educationObj.educationContainerHTML,
    "education-main-container",
    "educationHTML"
  );
});

function attachEventListenersEducation() {
  educationObj.universityInputs =
    document.querySelectorAll(".university-input");
  educationObj.specialtyInput = document.querySelectorAll(".specialty-input");
  educationObj.schoolStartDate = document.querySelectorAll(".start-date-input");
  educationObj.schoolFinishDate =
    document.querySelectorAll(".finish-date-input");
  educationObj.educationDeleteBtns = Array.from(
    document.querySelectorAll(".education-btn")
  );
  educationObj.allEducationDivs = Array.from(
    document.querySelectorAll(".education")
  );
  educationArray = [educationValue];
  educationObj.universityInputs.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      updateInput(event.target, "education", "university");
    });
  });
  educationObj.specialtyInput.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      updateInput(event.target, "education", "specialty");
    });
  });
  educationObj.schoolStartDate.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      updateInput(event.target, "education", "start-date");
    });
  });
  educationObj.schoolFinishDate.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      updateInput(event.target, "education", "finish-date");
    });
  });
  educationObj.educationDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      removeItem(e.target, educationObj.optionsEducation);
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
attachEventListenersEducation();

if (educationObj.fetchedEducation.length > 0) {
  for (let i = 0; i < educationObj.fetchedEducation.length; i++) {
    educationObj.universityInputs[i].value =
      educationObj.fetchedEducation[i].university;
    educationObj.specialtyInput[i].value =
      educationObj.fetchedEducation[i].specialty;
    educationObj.schoolStartDate[i].value =
      educationObj.fetchedEducation[i]["start-date"];
    educationObj.schoolFinishDate[i].value =
      educationObj.fetchedEducation[i]["finish-date"];
  }
}

document.querySelector(".experience-main-container").innerHTML =
  experienceObj.experienceContainerHTML;

if (
  localStorage.getItem("experience-details") === null ||
  (localStorage.getItem("experience-details") === undefined &&
    experienceObj.allExperienceDivs.length != 0)
) {
  localStorage.setItem("experience-details", JSON.stringify(experienceArray));
}

experienceObj.addExperienceBtn.addEventListener("click", (e) => {
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
    experienceObj.experienceContainerHTML,
    "experience-main-container",
    "experienceHTML"
  );
});

function attachEventListenersExperience() {
  experienceObj.employerInput = document.querySelectorAll(
    ".employer-name-input"
  );
  experienceObj.occupationInput =
    document.querySelectorAll(".occupation-input");
  experienceObj.jobDescriptionInput = document.querySelectorAll(
    ".job-description-input"
  );
  experienceObj.jobStartDate = document.querySelectorAll(
    ".job-start-date-input"
  );
  experienceObj.jobFinishDate = document.querySelectorAll(
    ".job-finish-date-input"
  );
  experienceObj.removeExperienceBtn = Array.from(
    document.querySelectorAll(".remove-experience")
  );
  experienceObj.allExperienceDivs = Array.from(
    document.querySelectorAll(".experience-details")
  );
  experienceArray = [experienceValue];

  experienceObj.employerInput.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      updateInput(e.target, "experience-details", "employer-name");
    });
  });
  experienceObj.occupationInput.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      updateInput(e.target, "experience-details", "occupation");
    });
  });
  experienceObj.jobStartDate.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      updateInput(e.target, "experience-details", "job-start-date");
    });
  });
  experienceObj.jobFinishDate.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      updateInput(e.target, "experience-details", "job-finish-date");
    });
  });
  experienceObj.jobDescriptionInput.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      updateInput(e.target, "experience-details", "job-description");
    });
  });
  experienceObj.removeExperienceBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      removeItem(e.target, experienceObj.optionsExperience);
    });
  });
}

attachEventListenersExperience();

for (let i = 0; i < experienceObj.fetchedExperience.length; i++) {
  experienceObj.employerInput[i].value =
    experienceObj.fetchedExperience[i]["employer-name"];
  experienceObj.occupationInput[i].value =
    experienceObj.fetchedExperience[i].occupation;
  experienceObj.jobDescriptionInput[i].value =
    experienceObj.fetchedExperience[i]["job-description"];
  experienceObj.jobStartDate[i].value =
    experienceObj.fetchedExperience[i]["job-start-date"];
  experienceObj.jobFinishDate[i].value =
    experienceObj.fetchedExperience[i]["job-finish-date"];
}
// localStorage.clear();
//  photo upload functionality
let src = JSON.parse(localStorage.getItem("image")) || "";
let photo = document.querySelector("#photo");
console.log(src);
if (src !== "") {
  console.log("k");
  console.log(src.length);
  document.querySelector(
    ".uploaded-photo-container"
  ).innerHTML = `<img class="uploaded-photo" alt="photo" src=${src} />`;
}

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

let referenceObj = {
  allReferenceContainer: Array.from(document.querySelectorAll(".reference")),
  refName: document.querySelectorAll("#reference-name"),
  refEmail: document.querySelectorAll("#reference-email"),
  addRefBtn: document.querySelector(".add-reference"),
  removeReferenceBtn: Array.from(
    document.querySelectorAll(".remove-reference")
  ),
  refContainerHTML:
    JSON.parse(localStorage.getItem("refHtml")) ||
    document.querySelector(".references-main-container").innerHTML,
  fetchedReferences: JSON.parse(localStorage.getItem("reference")) || refArray,
  optionsReference: {
    class: ".remove-reference",
    prop1: "reference",
    prop2: "reference",
    prop3: ".references-main-container",
    prop4: "refHtml",
  },
};

if (
  localStorage.getItem("reference") === null ||
  (localStorage.getItem("reference") === undefined &&
    referenceObj.allReferenceContainer.length != 0)
) {
  localStorage.setItem("reference", JSON.stringify(refArray));
}
document.querySelector(".references-main-container").innerHTML =
  referenceObj.refContainerHTML;

referenceObj.addRefBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedRefAArray =
    JSON.parse(localStorage.getItem("reference")) || refArray;
  fetchedRefAArray.push(refValue);
  localStorage.setItem("reference", JSON.stringify(fetchedRefAArray));
  updateRefHTML();
  attachEventListenersReference();
  updateContent(
    referenceObj.refContainerHTML,
    "references-main-container",
    "refHtml"
  );
});

function attachEventListenersReference() {
  referenceObj.refName = document.querySelectorAll("#reference-name");
  referenceObj.refEmail = document.querySelectorAll("#reference-email");
  referenceObj.removeReferenceBtn = Array.from(
    document.querySelectorAll(".remove-reference")
  );
  referenceObj.refName.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      updateInput(event.target, "reference", "reference-name");
    });
  });
  referenceObj.refEmail.forEach((el) => {
    el.addEventListener("input", (event) => {
      event.stopImmediatePropagation();
      updateInput(event.target, "reference", "reference-email");
    });
  });
  referenceObj.removeReferenceBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      removeItem(e.target, referenceObj.optionsReference);
    });
  });
}

attachEventListenersReference();

for (let i = 0; i < referenceObj.fetchedReferences.length; i++) {
  referenceObj.refName[i].value =
    referenceObj.fetchedReferences[i]["reference-name"];
  referenceObj.refEmail[i].value =
    referenceObj.fetchedReferences[i]["reference-email"];
}

// Skills Functionality

let skillsArray = [skillValue];
let skillsObject = {
  skillLevel: document.querySelector(".level-select"),
  skillName: document.querySelector("#skill-name"),
  allSkillsDivs: Array.from(document.querySelectorAll(".skills-container")),
  skillsDeleteBtns: Array.from(document.querySelectorAll(".remove-Skill")),
  skillsContainerHTML:
    JSON.parse(localStorage.getItem("skillHtml")) ||
    document.querySelector(".skills-main-container").innerHTML,
  fetchedSkills:
    JSON.parse(localStorage.getItem("skills-container")) || skillsArray,
  addSkillBtn: document.querySelector(".add-skill"),
  optionsSkill: {
    class: ".remove-Skill",
    prop1: "skills-container",
    prop2: "skills-container",
    prop3: ".skills-main-container",
    prop4: "skillHtml",
  },
};

if (
  localStorage.getItem("skills-container") === null ||
  (localStorage.getItem("skills-container") === undefined &&
    skillsObject.allSkillsDivs.length != 0)
) {
  localStorage.setItem("skills-container", JSON.stringify(skillsArray));
}

document.querySelector(".skills-main-container").innerHTML =
  skillsObject.skillsContainerHTML;
skillsObject.addSkillBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fetchedSkillsAArray =
    JSON.parse(localStorage.getItem("skills-container")) || skillsArray;
  fetchedSkillsAArray.push(skillValue);
  localStorage.setItem("skills-container", JSON.stringify(fetchedSkillsAArray));
  updateSkillsHtml();
  attachEventListenersSkills();
  updateContent(
    skillsObject.skillsContainerHTML,
    "skills-main-container",
    "skillHtml"
  );
});

function attachEventListenersSkills() {
  skillsObject.skillName = document.querySelectorAll("#skill-name");
  skillsObject.skillLevel = document.querySelectorAll(".level-select");
  skillsObject.skillsDeleteBtns = Array.from(
    document.querySelectorAll(".remove-Skill")
  );
  skillsObject.skillName.forEach((el) => {
    el.addEventListener("input", (e) => {
      updateInput(e.target, "skills-container", "skill-name");
    });
  });
  skillsObject.skillLevel.forEach((el) => {
    el.addEventListener("input", (e) => {
      e.preventDefault();
      updateInput(e.target, "skills-container", "level-label");
    });
  });
  skillsObject.skillsDeleteBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      removeItem(e.target, skillsObject.optionsSkill);
    });
  });
}

attachEventListenersSkills();

for (let i = 0; i < skillsObject.fetchedSkills.length; i++) {
  skillsObject.skillName[i].value = skillsObject.fetchedSkills[i]["skill-name"];
  skillsObject.skillLevel[i].value =
    skillsObject.fetchedSkills[i]["level-label"];
}
