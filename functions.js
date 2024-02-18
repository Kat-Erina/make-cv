export function updateEducationContainerHtml(id) {
  let educationDivHTML = ` <div class="education" id=${id}>
              
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

export const array = [nameInput, phone, email, address, aboutMe, desiredJob];

export function updateInput(target, inputType, arr) {
  let targetId = target.closest(`.${inputType}`).getAttribute("id");
  let fetchedArray = JSON.parse(localStorage.getItem(`${inputType}`)) || arr;
  let updateInfo = {
    ...fetchedArray[targetId],
    [target.id]: target.value,
  };
  fetchedArray.splice(targetId, 1, updateInfo);

  localStorage.setItem(`${inputType}`, JSON.stringify(fetchedArray));
}

//Experience Funcionality

export const experienceValue = {
  employer: "",
  occupation: "",
  description: "",
  ["start-date"]: "",
  ["finish-date"]: "",
};

export function updateExperienceHtml(id) {
  let experienceDivHtml = `      <div class="experience-details" id=${id}>
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
</div>`;
  document
    .querySelector(".experience-main-container")
    .insertAdjacentHTML("beforeEnd", experienceDivHtml);
}
