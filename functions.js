"use strict";
export function updateEducationContainerHtml() {
  let educationDivHTML = ` <div class="education" >
              
  <label for="university">School/College/University</label>
  <br />
  <input type="text" id="university" class="university-input"  placeholder="school/college/University" />
  <br />
  <label for="specialty">Specialty</label>
  <br />
  <input type="text" id="specialty" class="specialty-input"  placeholder="specialty" />
  <div class="date-container">
    <div>
      <label for="start-date">Started...</label>
      <br />
      <input type="date" id="start-date" class="start-date-input" />
    </div>
    <div>
      <label for="finish-date">Finished...</label>
      <br />
      <input type="date" id="finish-date" class="finish-date-input" />
    </div>
  </div>
  <button class="education-btn" ><i class="fa-regular fa-trash-can"></i>Remove</button>
  <hr />
  </div>
   `;

  document
    .querySelector(".education-main-container")
    .insertAdjacentHTML("beforeEnd", educationDivHTML);
}

export const educationValue = {
  university: "",
  specialty: "",
  ["start-date"]: "",
  ["finish-date"]: "",
};

export const personObject = {
  nameInput: document.querySelector(".name-input"),
  phone: document.querySelector(".phone-input"),
  email: document.querySelector(".email-input"),
  address: document.querySelector(".address-input"),
  aboutMe: document.querySelector(".about-me-input"),
  desiredJob: document.querySelector(".desired-job-input"),
  uploadedPicture: document.querySelector(".uploaded-photo"),
  uploadedPictureContainer: document.querySelector(".uploaded-photo-container"),
};
// localStorage.clear();
export const array = [
  personObject.nameInput,
  personObject.phone,
  personObject.email,
  personObject.address,
  personObject.aboutMe,
  personObject.desiredJob,
];

export function updateInput(target, inputType, identifer) {
  let fetchedArrayFromStorage = JSON.parse(
    localStorage.getItem(`${inputType}`)
  );
  let fetchedArray = Array.from(document.querySelectorAll(`#${identifer}`));

  let test = fetchedArray.filter((el) => {
    return el === target;
  });
  let ind = fetchedArray.indexOf(test[0]);
  let updateInfo = {
    ...fetchedArrayFromStorage[ind],
    [target.id]: target.value,
  };
  fetchedArrayFromStorage.splice(ind, 1, updateInfo);

  localStorage.setItem(`${inputType}`, JSON.stringify(fetchedArrayFromStorage));
}

//Experience Funcionality

export const experienceValue = {
  id: 0,
  ["employer-name"]: "",
  occupation: "",
  ["job-description"]: "",
  ["job-start-date"]: "",
  ["job-finish-date"]: "",
};

export function updateRefHTML() {
  let referenceHTML = ` <div class="reference" >
  <label for="reference-name"> Referent's Name </label>
  <br />
  <input type="text" placeholder="Referent's Name" id="reference-name" />
  <br />
  <label for="reference-email">Contact Information </label>
  <br />
  <input type="email" placeholder="email, phone number, etc." id="reference-email" />
  <br />
  <button class="remove-reference"><i class="fa-regular fa-trash-can"></i>Remove Reference</button>
  <hr />
</div>`;

  document
    .querySelector(".references-main-container")
    .insertAdjacentHTML("beforeEnd", referenceHTML);
}

export function updateExperienceHtml() {
  let experienceDivHtml = `      <div class="experience-details" ">
  <label for="employer-name">Company Name</label>
  <br />
  <input type="text" id="employer-name" class="employer-name-input"  placeholder="company name" />
  <br />
  <label for="occupation">Occupation</label>
  <br />
  <input type="text" id="occupation" class="occupation-input" placeholder="occupation" />
  <br>
  <label for="job-description">Brief Description</label>
  <br />
  <textarea
    id="job-description"
    class="job-description-input"
    placeholder="Briefly tell us about your responsibilities, obligations, etc."
  ></textarea>
  <div class="experience-date-container">
    <div>
      <label for="job-start-date">Started...</label>
      <br />
      <input
        type="date"
        id="job-start-date"
        class="job-start-date-input"
      />
    </div>
    <div>
      <label for="job-finish-date">Finished...</label>
      <br />
      <input
        type="date"
        id="job-finish-date"
        class="job-finish-date-input"
      />
    </div>
  </div>
  <button class="remove-experience" ><i class="fa-regular fa-trash-can"></i>Remove Experience</button>
  <hr />
</div>`;
  document
    .querySelector(".experience-main-container")
    .insertAdjacentHTML("beforeEnd", experienceDivHtml);
}

// updating LocalStorage

export function updateContent(
  contentHtml,
  localStorageName,
  addToLocalStorage
) {
  contentHtml = document.querySelector(`.${localStorageName}`).innerHTML;
  localStorage.setItem(`${addToLocalStorage}`, JSON.stringify(contentHtml));
}

// Upload Picture

export function uploadPictureFnc(event) {
  const picFile = event.target;

  let img = picFile.result;
  document.querySelector(
    ".uploaded-photo-container"
  ).innerHTML = `  <img class="uploaded-photo" alt="photo" src=${img} />`;
  // uploadedPicture.src = img;
  window.localStorage.setItem("image", JSON.stringify(img));
}

// reference container

export const refValue = {
  ["reference-name"]: "",
  ["reference-email"]: "",
};

// skill container functionality

export const skillValue = {
  ["level-label"]: "",
  ["skill-name"]: "",
};

// html for skills container

export function updateSkillsHtml() {
  let skillsDivHTML = `
  <div class="skills-container" >
  <div class="skill">
    <label for="skill-name">Skill</label>
    <br>
    <input
      type="text"
      id="skill-name"
      placeholder="enter skill name"
    />
  </div>
  <div class="level-container">
    <label for="level-label">Level</label>
    <br>
    <select id="level-label" class="level-select">
      <option data-option-id="0" selected>Enter Level</option>
      <option data-option-id="1">beginner</option>
      <option data-option-id="2">intermediate</option>
      <option data-option-id="3">skillfull</option>
      <option data-option-id="4">experienced</option>
      <option data-option-id="5">Professional</option>
    </select>
  </div>
  <button class="remove-Skill"><i class="fa-regular fa-trash-can"></i>Remove Skill</button>
  <hr />
</div>`;
  document
    .querySelector(".skills-main-container")
    .insertAdjacentHTML("beforeEnd", skillsDivHTML);
}
