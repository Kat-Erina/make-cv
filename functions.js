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
    .insertAdjacentHTML("afterBegin", educationDivHTML);
}

const universityInput = document.querySelector(".university-input");
const specialtyInput = document.querySelector(".specialty-input");
const schoolStartDate = document.querySelector(".start-date-input");
const schoolFinishDate = document.querySelector(".finish-date-input");

export const educationArray = [
  universityInput,
  specialtyInput,
  schoolFinishDate,
  schoolStartDate,
];
