// LIGHT MODE DARK MODE FUNCTION
const darkStyle = document.getElementById("style-dark-mode");
const darkIndex = document.getElementById("index-dark-mode");
const btnTheme = document.getElementById("btn-theme");
const logo = document.getElementById("nav-img");
function colorTheme() {
  if(btnTheme.innerHTML == '<i class="fi fi-br-sun"></i>') {
    darkStyle.href = "";
    darkIndex.href = "";
    logo.src = "images/logo_black.png";
    btnTheme.innerHTML = '<i class="fi fi-rr-moon-stars"></i>';
  } else if(btnTheme.innerHTML == '<i class="fi fi-rr-moon-stars"></i>') {
    darkStyle.href = "style_dark.css";
    darkIndex.href = "index_dark.css";
    logo.src = "images/logo_white.png";
    btnTheme.innerHTML = '<i class="fi fi-br-sun"></i>';
  }
}

// EXPERIENCE FUNCTION
const workPage = document.querySelectorAll(".experience-link");
const workRole = document.getElementById("experience-role");
const workDate = document.getElementById("experience-date");
const workDetail = document.getElementById("experience-list");
const workLibrary = [
  {
    role: "Engineer ",
    work: "Procter & Gamble",
    date: "Jan 2020 - Present",
    detail: [
      "Delivered global-benchmark-level process reliability (PR) and runtime efficiency (RE) on Lima Plant’s highest throughput production line of Tide PODS and Gain Flings",
      "Sustained < 6% unplanned downtime while leveraging planned initiative investments into supply chain agility to meet record production demands during COVID-19",
      "Led strategic site-level savings projects as Service and Equipment (S&E) cost element owner for Lima SUD driving > $44M reduction in material and service losses in FY21",
    ],
  },
  {
    role: "Engineering Intern ",
    work: "Medtronic",
    date: "May 2018 - Aug 2019",
    detail: [
      "Mitigated patient and manufacturing risk factors by completing 60 Feature Level Impact Assessments (100% for FY19 and FY20) and Component Qualifications",
      "Performed capability analysis on components to estimate manufacturing losses based on meeting specification requirements for parts",
      "Lead assessment of injection mold components for potential remediation to decrease up to 8% yield loss and negotiate cost reductions",
    ],
  },
  {
    role: "Engineering Intern ",
    work: "Rolls-Royce Solutions",
    date: "May 2017 - May 2018",
    detail: [
      "Communicated and collaborated effectively with various departments and nationwide distributors and customers",
      "Created web-based application questionnaire used by applications company-wide for EPA/IMO emissions regulations, saving up to $45,268 per engine per day to ensure EPA/IMO compliance",
      "Performed torsional vibration analysis to assess for potential vibrational risks in over 10 cases over 8 weeks",
    ],
  },
  {
    role: "Gradute ",
    work: "University of Michigan",
    date: "Sept 2014 - Dec 2019",
    detail: [
      "MSE Naval Architecture and Marine Engineering",
      "BSE Mechanical Engineering",
    ],
  },
];
// create list of work details
function createWorkDetails(details) {
    // removing all li tags before adding so there will be no duplicates
    workDetail.querySelectorAll("li").forEach(li => li.remove());
    details.forEach(detail => {
        let liDetail = `<li class="show-bullet">${detail}</li>`;
        workDetail.insertAdjacentHTML("afterbegin", liDetail); // inserting or adding li insude ul tag
    })
}
// event listener for clicking on each work place pagination
workPage.forEach((work) => {
  work.addEventListener("click", (e) => {
    let target = e.target;
    let workName = e.target.innerText;
    workPage.forEach((workPlace) => {
      workPlace.classList.remove("border-active");
    });
    target.classList.add("border-active");
    for (let i = 0; i < workLibrary.length; i++) {
      if (workLibrary[i]["work"] == workName) {
        let spanDetail = `<span id="experience-place" class="bold-text">@ ${workLibrary[i]["work"]}</span>`;
        workRole.innerText = workLibrary[i]["role"];
        workRole.insertAdjacentHTML("beforeend", spanDetail);
        workDate.innerText = workLibrary[i]["date"];
        let details = workLibrary[i]["detail"];
        createWorkDetails(details);
      }
    }
  });
});

// PORTFOLIO FUNCTION
const portfolioContainer = document.getElementById("portfolio-container");
const portfolioLibrary = [
  {
    image: "images/rps.png",
    title: "Rock, Paper, Scissors",
    detail: "A 5 round game against the computer.",
    tech: "HTML, CSS, JavaScript",
    github: "https://nguyeud.github.io/rock-paper-scissor-game/",
  },
  {
    image: "images/etch-a-sketch.png",
    title: "Etch-a-Sketch",
    detail: "An online etch-a-sketch to draw on.",
    tech: "HTML, CSS, JavaScript, jQuery",
    github: "https://nguyeud.github.io/etch-a-sketch-app/",
  },
  {
    image: "images/calculator.png",
    title: "Calculator",
    detail: "A simple calculator.",
    tech: "HTML, CSS, JavaScript, jQuery",
    github: "https://nguyeud.github.io/calculator-app/",
  },
  {
    image: "images/sign-up-form.png",
    title: "Sign-up Form",
    detail: "A dummy sign-up form with validation.",
    tech: "HTML, CSS, JavaScript, Bootstrap",
    github: "https://nguyeud.github.io/sign-up-form/",
  },
  {
    image: "images/library.png",
    title: "Library (WIP)",
    detail: "Add and track books in this library application to your local storage.",
    tech: "HTML, CSS, JavaScript, Bootstrap",
    github: "https://nguyeud.github.io/library-app/",
  }
]
// create list of portfolio projects
function createPortfolioProjects() {
  for(let i = 0; i < portfolioLibrary.length; i++) {
    let portfolioHTML = 
    `<div class="portfolio">
      <div class="portfolio-photo">
        <img class="portfolio-img" src=${portfolioLibrary[i]["image"]}>
      </div>
      <div class="portfolio-title bold-text">
        ${portfolioLibrary[i]["title"]}
      </div>
      <div class="portfolio-text">
        ${portfolioLibrary[i]["detail"]}
      </div>
      <div class="portfolio-tech tech-stack">
        ${portfolioLibrary[i]["tech"]} (<a class="portfolio-link" href=${portfolioLibrary[i]["github"]}>GitHub<a>)
      </div>
    </div>`;
    portfolioContainer.insertAdjacentHTML("afterbegin", portfolioHTML);
  }
}

// MOBILE NAVBAR
let mobileNav = document.getElementById("nav-mobile");
const mediaBtn = document.getElementById("btn-media");
function showMobileNav() {
  mobileNav = document.getElementById("nav-mobile");
  if(mobileNav.style.display == "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
}
// if window size > 768, set display of mobile nav bar to none
window.onresize = function() {
  if(window.innerWidth >= 769) {
    mobileNav.style.display = "none";
  }
}

// ON WINDOW LOAD
window.addEventListener('load', (event) => {
  // load first work place pagination
  let spanDetail = `<span id="experience-place" class="bold-text">@ ${workLibrary[0]["work"]}</span>`;
  workRole.innerText = workLibrary[0]["role"];
  workRole.insertAdjacentHTML("beforeend", spanDetail);
  workDate.innerText = workLibrary[0]["date"];
  let details = workLibrary[0]["detail"];
  createWorkDetails(details);

  // load portfolio projects
  createPortfolioProjects();
});