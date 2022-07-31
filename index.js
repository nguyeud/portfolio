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
    role: "Engineer Intern ",
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