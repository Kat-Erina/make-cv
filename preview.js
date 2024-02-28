let person = JSON.parse(localStorage.getItem("person")) || "";

let education = JSON.parse(localStorage.getItem("education")) || "";
let experience = JSON.parse(localStorage.getItem("experience-details")) || "";
let skills = JSON.parse(localStorage.getItem("skills-container")) || "";
let references = JSON.parse(localStorage.getItem("reference")) || "";
let image = JSON.parse(localStorage.getItem("image")) || "";
console.log(image);
if (image != "") {
  document.querySelector("img").src = image;
  document.querySelector("img").classList.remove("hidden");
} else if (image == "") {
  console.log("b");
  document.querySelector(".name").style.width = "100%";

  document.querySelector(".name").style.paddingLeft = "0";
  document.querySelector(".applying-for").style.paddingLeft = "0";
  document.querySelector(".details").style.paddingLeft = "0";
  document.querySelector(".profile").style.paddingLeft = "0";
}

document.querySelector(".name").textContent = person.name;
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
    <p class="occupation">Occupation: ${element.occupation}</p>
    <p class="job-description">${element["job-description"]}</p>
    <p class="dates">${element["job-start-date"]}/${element["job-finish-date"]}</p>
  </div>
  <hr class="hr"/>`
  );
});

skills.forEach((element) => {
  let level = `<img
  alt="jbkb"
  style="height: 15px; width: 15px"
  src="./img/yellow-star-icon-21.png"
/>`;
  if (element["level-label"] == "beginner") {
    level += `<img
        alt="jbkb"
        style="height: 15px; width: 15px"
        src="./img/yellow-star-icon-21.png"
      />`;
  }
  if (element["level-label"] == "intermediate") {
    level += `<img alt="jbkb" style="height: 15px; width: 15px" src="./img/yellow-star-icon-21.png"/>
  <img alt="jbkb" style="height: 15px; width: 15px" src="./img/yellow-star-icon-21.png"/> `;
  }
  if (element["level-label"] == "skillfull") {
    level += `<img
      alt="jbkb"
      style="height: 15px; width: 15px"
      src="./img/yellow-star-icon-21.png"
    />
    <img
    alt="jbkb"
    style="height: 15px; width: 15px"
    src="./img/yellow-star-icon-21.png"
  />
  <img
  alt="jbkb"
  style="height: 15px; width: 15px"
  src="./img/yellow-star-icon-21.png"
/>`;
  }
  if (element["level-label"] == "experienced") {
    level += `
    <img
      alt="jbkb"
      style="height: 15px; width: 15px"
      src="./img/yellow-star-icon-21.png"
    />
    <img
    alt="jbkb"
    style="height: 15px; width: 15px"
    src="./img/yellow-star-icon-21.png"
  />
  <img
  alt="jbkb"
  style="height: 15px; width: 15px"
  src="./img/yellow-star-icon-21.png"
/>
<img
alt="jbkb"
style="height: 15px; width: 15px"
src="./img/yellow-star-icon-21.png"
/>`;
  }
  if (element["level-label"] == "Professional") {
    level += `<img
      alt="jbkb"
      style="height: 15px; width: 15px"
      src="./img/yellow-star-icon-21.png"
    /><img
    alt="jbkb"
    style="height: 15px; width: 15px"
    src="./img/yellow-star-icon-21.png"
  /><img
  alt="jbkb"
  style="height: 15px; width: 15px"
  src="./img/yellow-star-icon-21.png"
/><img
alt="jbkb"
style="height: 15px; width: 15px"
src="./img/yellow-star-icon-21.png"
/><img
alt="jbkb"
style="height: 15px; width: 15px"
src="./img/yellow-star-icon-21.png"
/>`;
  }
  document.querySelector(".skills-main-division").insertAdjacentHTML(
    "beforeBegin",
    `  <div class="skills-division">
      <p class="skill-name">${element["skill-name"]}  <span class="level">Level: ${element["level-label"]}   </span>
      <br/>
      <span class="stars>${level}</span></p>
      
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

//  download functionality

let btn = document.querySelector(".print");
//

window.jsPDF = window.jspdf.jsPDF;
let docPDF = new jsPDF();
console.log(docPDF);

let h2 = Array.from(document.querySelectorAll("h2"));
let h4 = Array.from(document.querySelectorAll("h4"));
let dates = Array.from(document.querySelectorAll(".dates"));
let faculty = Array.from(document.querySelectorAll(".faculty"));
let employers = Array.from(document.querySelectorAll(".employer-name"));
let occupations = Array.from(document.querySelectorAll(".occupation"));
let jobDescriptions = Array.from(document.querySelectorAll(".job-description"));
let skillLevel = Array.from(document.querySelectorAll(".level"));
let referentContact = Array.from(
  document.querySelectorAll(".referant-contact")
);

let img = document.querySelector("img");
let hr = Array.from(document.querySelectorAll("hr"));
//
function downloadPDF(invoiceNo) {
  let elementHTML = document.querySelector("main");
  elementHTML.style.width = "100%";
  // console.log(h2);
  // console.log(window.innerWidth);
  changeStyles();

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
    window.innerWidth >= 900
      ? (elementHTML.style.width = "50%")
      : (elementHTML.style.width = "100%");
    revertStyles();
  }, 500);
}

// defininf stylings before and after downloading the pdf
function changeStyles() {
  h2.forEach((el) => {
    el.style.fontSize = "18px";
  });
  h4.forEach((el) => {
    el.style.fontSize = "12px";
  });
  dates.forEach((el) => {
    el.style.fontSize = "10px";
  });
  faculty.forEach((el) => {
    el.style.fontSize = "14px";
  });
  employers.forEach((el) => {
    el.style.fontSize = "14px";
  });
  occupations.forEach((el) => {
    el.style.fontSize = "14px";
  });
  jobDescriptions.forEach((el) => {
    el.style.fontSize = "14px";
  });
  skillLevel.forEach((el) => {
    el.style.fontSize = "12px";
  });
  referentContact.forEach((el) => {
    el.style.fontSize = "12px";
  });
  img.style.marginLeft = "0px";
  document.querySelector("main").style.backgroundColor = "white";
}

function revertStyles() {
  h2.forEach((el) => {
    el.style.fontSize = "1.5rem";
    el.style.marginTop = "15px";
  });
  h4.forEach((el) => {
    el.style.fontSize = "19px";
  });
  dates.forEach((el) => {
    el.style.fontSize = "14px";
  });
  faculty.forEach((el) => {
    el.style.fontSize = "19px";
  });
  employers.forEach((el) => {
    el.style.fontSize = "19px";
  });
  occupations.forEach((el) => {
    el.style.fontSize = "19px";
  });
  jobDescriptions.forEach((el) => {
    el.style.fontSize = "16px";
  });
  skillLevel.forEach((el) => {
    el.style.fontSize = "14px";
  });
  referentContact.forEach((el) => {
    el.style.fontSize = "14px";
  });
  document.querySelector("main").style.backgroundColor = "#d4e4ee";
}
btn.addEventListener("click", () => {
  downloadPDF("123");
});
