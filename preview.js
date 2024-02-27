let person = JSON.parse(localStorage.getItem("person")) || "";

let education = JSON.parse(localStorage.getItem("education")) || "";
let experience = JSON.parse(localStorage.getItem("experience-details")) || "";
let skills = JSON.parse(localStorage.getItem("skills-container")) || "";
let references = JSON.parse(localStorage.getItem("reference")) || "";
let image = JSON.parse(localStorage.getItem("image")) || "";

console.log(references);

if (image != "") {
  document.querySelector("img").src = image;
  document.querySelector("img").classList.remove("hidden");
}

document.querySelector(".applying-for").textContent = person["desired-job"];
document.querySelector(".address").textContent = person.address;
document.querySelector(
  ".contact"
).textContent = `Email: ${person.email}, Mobile: ${person.phone}`;
document.querySelector(".about-me").textContent = person["about-me"];

education.forEach((element) => {
  document.querySelector(".education-main-division").insertAdjacentHTML(
    "beforeBegin",
    `  <div class="education-division">
  <h4 class="university-name">${element.university}</h4>
  <p class="faculty">${element.specialty}</p>
  <p class="dates">${element["start-date"]}/${element["finish-date"]}</p>
</div>
<hr class="hr"/>`
  );
});

experience.forEach((element) => {
  document.querySelector(".experience-main-division").insertAdjacentHTML(
    "beforeBegin",
    `  <div class="experience-division">
    <h4 class="employer-name">${element["employer-name"]}</h4>
    <p class="occupation">${element.occupation}</p>
    <p class="job-description">${element["job-description"]}</p>
    <p class="dates">${element["job-start-date"]}/${element["job-finish-date"]}</p>
  </div>
  <hr class="hr"/>`
  );
});

skills.forEach((element) => {
  let level = "";
  if (element["level-label"] == "beginner") {
    level = '<i class="fa-solid fa-star"></i>';
  }
  if (element["level-label"] == "intermediate") {
    level = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>';
  }
  if (element["level-label"] == "skillfull") {
    level =
      '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>';
  }
  if (element["level-label"] == "experienced") {
    level =
      '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>';
  }
  if (element["level-label"] == "Professional") {
    level =
      '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>';
  }
  document.querySelector(".skills-main-division").insertAdjacentHTML(
    "beforeBegin",
    `  <div class="skills-division">
      <p class="skill-name">${element["skill-name"]}  <span class="level">Level: ${element["level-label"]}   </span><span class="stars>${level}</span></p>
      
    </div>
    <hr class="hr"/>`
  );
});

references.forEach((element) => {
  document.querySelector(".references-main-division").insertAdjacentHTML(
    "beforeBegin",
    `  <div class="reference-division">
      <h4 class="referant-name">referant's Name:<span class="refenerence-name-span">${element["reference-name"]}</span></h4>
      <p class="referant-contact">Contact Information:<span  class="refenerence-contact-span">${element["reference-email"]}</span></p>
     
    </div>
    <hr class="hr"/>`
  );
});

// testing download functionality

let btn = document.querySelector(".print");
//

window.jsPDF = window.jspdf.jsPDF;
let docPDF = new jsPDF();
console.log(docPDF);

function downloadPDF(invoiceNo) {
  let elementHTML = document.querySelector("main");
  elementHTML.style.width = "100%";
  docPDF.html(elementHTML, {
    callback: function (docPDF) {
      docPDF.save(invoiceNo + ".pdf");
    },
    x: 5,
    y: 5,
    width: 160,
    windowWidth: 480,
    autoPaging: true,
  });
  setTimeout(() => {
    elementHTML.style.width = "60%";
  }, 500);
}

btn.addEventListener("click", () => {
  downloadPDF("123");
});
