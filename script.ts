(document.getElementById('form') as HTMLFormElement).addEventListener('submit', function (event) {
    event.preventDefault();
});

function validateAndSubmit() {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    // Check if form is valid
    if (form.checkValidity()) {
        // If the form is valid, proceed to the next step
        generateResume(); // Call your formPagination function here
    } else {
        // If form is invalid, show validation errors
        form.reportValidity(); // This will show validation messages
        console.log("unable to jump");

    }
}



let selectedTheme = '';

function next(curr, next) {
    if (selectedTheme) {
        let currentPage = document.getElementById(curr) as HTMLDivElement;
        let nextPage = document.getElementById(next) as HTMLDivElement;
        currentPage.style.display = 'none';
        nextPage.style.display = 'flex';
        console.log(`Selected Theme: ${selectedTheme}`);
    } else {
        alert('Please Select Theme First');
    }
}

const resumeChoice = document.querySelectorAll('.themeSecond img');

// Add click event to all images
resumeChoice.forEach((img, index) => {
    img.addEventListener('click', () => {
        // Remove 'selected' class from all images
        resumeChoice.forEach(image => image.classList.remove('selected'));

        // Add 'selected' class to the clicked image
        img.classList.add('selected');

        // Store the selected theme id
        selectedTheme = `Theme ${index + 1}`; // or use any identifier
    });
});

function addEdu() {
    let educationInput = document.getElementById('eduMsg') as HTMLDivElement
    let addEducationInput = document.createElement('div')
    addEducationInput.innerHTML = `
<input type="text" placeholder="e.g BSC, FSC, Matric" id="qualification" class="qualification" required>
<input type="text" placeholder="Enter Institute Name" id="institute" class="institute" required>
<input type="text" placeholder="e.g (2018-2022)" id="duration" class="duration" required>
`;
    educationInput.appendChild(addEducationInput);
}

function addSkill() {
    let educationInput = document.getElementById('eduExpertise') as HTMLDivElement
    let addEducationInput = document.createElement('div')
    addEducationInput.innerHTML = `
<input type="text" placeholder="Enter Full Name" id="skills" class="skill" required>
`;
    educationInput.appendChild(addEducationInput);
}

function addLang() {
    let educationInput = document.getElementById('langMsg') as HTMLDivElement
    let addEducationInput = document.createElement('div')
    addEducationInput.innerHTML = `
<input type="text" placeholder="Enter Languages" id="languages" class="language" required>
`;
    educationInput.appendChild(addEducationInput);
}

function addExp() {
    let educationInput = document.getElementById('expMsg') as HTMLDivElement
    let addEducationInput = document.createElement('div')
    addEducationInput.innerHTML = `
<input type="text" placeholder="Enter Company Name" id="companyname" class="companyname" required>
<input type="text" placeholder="Enter Position At Company" id="position" class="position" required>
<input type="text" placeholder="e.g (2018-2022)" id="expduration" class="expduration" required>
<input type="text" placeholder="Enter Responsiblities At Company" id="responsiblities" class="responsibilities" required>
`;
    educationInput.appendChild(addEducationInput);

}

function addPort() {
    let educationInput = document.getElementById('portMsg') as HTMLDivElement
    let addEducationInput = document.createElement('div')
    addEducationInput.innerHTML = `
<input type="text" placeholder="e.g Behance, Linkedin, Github" id="platform" class="platform" required>
<input type="text" placeholder="Paste Platform Link" id="link" class="link" required>
`;
    educationInput.appendChild(addEducationInput);
}

function generateResume() {
    let currPage = document.getElementById('third') as HTMLDivElement
let nextPage = document.getElementById('sixth') as HTMLDivElement;
nextPage.style.display = 'flex';
currPage.style.display = 'none';

let name = (document.getElementById('name') as HTMLInputElement).value.trim();
let profession = (document.getElementById('profession') as HTMLInputElement).value.trim();
let about = (document.getElementById('about') as HTMLInputElement).value.trim();
let email = (document.getElementById('email') as HTMLInputElement).value.trim();
let contact = (document.getElementById('contact') as HTMLInputElement).value.trim();

// Collect qualifications, institutes, and durations
let qualifications = document.querySelectorAll('.qualification') as NodeListOf<HTMLInputElement>;
let institutes = document.querySelectorAll('.institute') as NodeListOf<HTMLInputElement>;
let durations = document.querySelectorAll('.duration') as NodeListOf<HTMLInputElement>;
let educationList = '';

qualifications.forEach((qualification, index) => {
    let qualValue = qualification.value.trim();
    let insValue = institutes[index].value.trim();
    let durValue = durations[index].value.trim();

    if (qualValue && insValue && durValue) {
        educationList += `<p>${qualValue}<br>${insValue}<br>(${durValue})</p>`;
    }
});


// Collect skills
let skillElements = document.querySelectorAll('.skill') as NodeListOf<HTMLInputElement> ;
let skillList = '';
skillElements.forEach(skill => {
let skillValue = skill.value.trim();
if (skillValue) {
    skillList += `<li>${skillValue}</li>`;
}
});

// Collect languages
let langElements = document.querySelectorAll('.language') as NodeListOf<HTMLInputElement>;
let langList = '';
langElements.forEach(lang => {
let langValue = lang.value.trim();
if (langValue) {
    langList += `<li>${langValue}</li>`;
}
});

// Collect experience
let companyElements = document.querySelectorAll('.companyname') as NodeListOf<HTMLInputElement>;
let positionElements = document.querySelectorAll('.position') as NodeListOf<HTMLInputElement>;
let expDurationElements = document.querySelectorAll('.expduration') as NodeListOf<HTMLInputElement>;
let responsibilitiesElements = document.querySelectorAll('.responsibilities') as NodeListOf<HTMLInputElement>;
let experienceList = '';

companyElements.forEach((company, index) => {
let companyValue = company.value.trim();
let positionValue = positionElements[index].value.trim();
let expDurationValue = expDurationElements[index].value.trim();
let responsibilitiesValue = responsibilitiesElements[index].value.trim();

if (companyValue && positionValue && expDurationValue && responsibilitiesValue) {
    experienceList += `
        <div class="experience">
            <h3>${companyValue}<span> (${expDurationValue})</span></h3>
            <p>${positionValue}</p>
            <ul><li>${responsibilitiesValue}</li></ul>
        </div>`;
}
});

// Collect portfolio
let platformElements = document.querySelectorAll('.platform') as NodeListOf<HTMLInputElement>;
let linkElements = document.querySelectorAll('.link') as NodeListOf<HTMLInputElement>;
let portfolioList = '';

platformElements.forEach((platform, index) => {
let platformValue = platform.value.trim();
let linkValue = linkElements[index].value.trim();
if (platformValue && linkValue) {
    portfolioList += `<h4>${platformValue}</h4><p>${linkValue}</p>`;
}
});

// Ensure 'resumeDisplay' exists
let resumeDisplay = document.getElementById('resumeDisplay');
if (!resumeDisplay) {
console.error('Element with id "resumeDisplay" not found.');
return;
}

// Generating resume HTML
if (selectedTheme === 'Theme 1') {
resumeDisplay.innerHTML = `
        <div class="resume">
<div class="resume-container">
<div class="main-header">
    <div class="profile-section">
        <h1>${name}</h1>
        <p>${profession}</p>
    </div>
    <div class="contact-info">
        <p><i class="fas fa-phone"></i>${contact}</p>
        <p><i class="fas fa-envelope"></i> ${email}</p>
    </div>
</div>

<div class="flex-section">
    <div class="left-section">
    <div class="education-section">
        <h2>EDUCATION</h2>
        ${educationList}
    </div>
    <div class="expertise-section">
        <h2>EXPERTISE</h2>
        <ul>
            ${skillList}
        </ul>
    </div>
    <div class="language-section">
        <h2>LANGUAGE</h2>
        <ul>
            ${langList}
        </ul>
    </div>
</div>
<div class="right-section">
            <div class="profile-summary">
    <h2>ABOUT</h2>
    <p>${about}</p>
</div>
    <div class="work-experience">
        <h2>WORK EXPERIENCE</h2>
        ${experienceList}
    </div>
    <div class="references-section">
        <h2>PORTFOLIO</h2>
        <div class="reference">
            ${portfolioList}
        </div>
    </div>
</div>
</div>
</div>
</div>`;
}
}



function printCard() {
    var originalContent = document.body.innerHTML; // Store the original page content
    var divContent = (document.getElementById('resumeDisplay') as HTMLDivElement).innerHTML; // Get the content of the card

    document.body.innerHTML = divContent; // Replace the body content with the card content
    window.print(); // Trigger the print dialog
    document.body.innerHTML = originalContent; // Restore the original page content after printing
}