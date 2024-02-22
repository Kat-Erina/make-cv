export function updateEducationContainerHtml() {
  let educationDivHTML = ` <div class="education" >
              
  <label for="university">School/College/University</label>
  <br />
  <input type="text" id="university" class="university-input" />
  <br />
  <label for="specialty">Specialty</label>
  <br />
  <input type="text" id="specialty" class="specialty-input" />
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
  <button class="education-btn" >Remove</button>
  </div>`;

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

export const nameInput = document.querySelector(".name-input");
export const phone = document.querySelector(".phone-input");
export const email = document.querySelector(".email-input");
export const address = document.querySelector(".address-input");
export const aboutMe = document.querySelector(".about-me-input");
export const desiredJob = document.querySelector(".desired-job-input");
export const addEducationBtn = document.querySelector(".add-education");
export const uploadedPicture = document.querySelector(".uploaded-photo");

export const array = [nameInput, phone, email, address, aboutMe, desiredJob];

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
  <label for="reference-name"> Reference Name </label>
  <input type="text" placeholder="ref. name" id="reference-name" />
  <label for="reference-email"> Reference Name </label>
  <input type="email" placeholder="ref.email" id="reference-email" />
  <button class="remove-reference">Remove Reference</button>
</div>`;

  document
    .querySelector(".references-main-container")
    .insertAdjacentHTML("beforeEnd", referenceHTML);
}

export function updateExperienceHtml() {
  let experienceDivHtml = `      <div class="experience-details" ">
  <label for="employer-name">Company Name</label>
  <br />
  <input type="text" id="employer-name" class="employer-name-input" />
  <br />
  <label for="occupation">Occupation</label>
  <br />
  <input type="text" id="occupation" class="occupation-input" />
  <label for="job-description">Brief Description</label>
  <br />
  <textarea
    id="job-description"
    class="job-description-input"
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
  <button class="remove-experience" >Remove Experience</button>
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
  uploadedPicture.src = img;
  window.localStorage.setItem("image", JSON.stringify(img));
}

// reference container

export const refValue = {
  ["reference-name"]: "",
  ["reference-email"]: "",
};

// skill container functionality

export let skillValue = {
  ["level-label"]: "",
  ["skill-name"]: "",
};

// html for skills container

export function updateSkillsHtml() {
  let skillsDivHTML = `
  <div class="skills-container" >
  <div class="skill">
    <label for="skill-name">Skill</label>
    <input
      type="text"
      id="skill-name"
      placeholder="enter skill name"
    />
  </div>
  <div class="level-container">
    <label for="level-label">Level</label>
    <select id="level-label" class="level-select">
      <option data-option-id="0">Enter Level</option>
      <option data-option-id="1">beginner</option>
      <option data-option-id="2">intermediate</option>
      <option data-option-id="3">skillfull</option>
      <option data-option-id="4">experienced</option>
      <option data-option-id="5">Professional</option>
    </select>
  </div>
  <button class="remove-Skill">Remove Skill</button>
</div>`;
  document
    .querySelector(".skills-main-container")
    .insertAdjacentHTML("beforeEnd", skillsDivHTML);
}
