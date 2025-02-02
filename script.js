document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
});
function validateAndSubmit() {
    var form = document.getElementById('resumeForm');
    // Check if form is valid
    if (form.checkValidity()) {
        // If the form is valid, proceed to the next step
        generateResume(); // Call your formPagination function here
    }
    else {
        // If form is invalid, show validation errors
        form.reportValidity(); // This will show validation messages
        console.log("unable to jump");
    }
}
var selectedTheme = '';
function next(curr, next) {
    if (selectedTheme) {
        var currentPage = document.getElementById(curr);
        var nextPage = document.getElementById(next);
        currentPage.style.display = 'none';
        nextPage.style.display = 'flex';
        console.log("Selected Theme: ".concat(selectedTheme));
    }
    else {
        alert('Please Select Theme First');
    }
}
var resumeChoice = document.querySelectorAll('.themeSecond img');
// Add click event to all images
resumeChoice.forEach(function (img, index) {
    img.addEventListener('click', function () {
        // Remove 'selected' class from all images
        resumeChoice.forEach(function (image) { return image.classList.remove('selected'); });
        // Add 'selected' class to the clicked image
        img.classList.add('selected');
        // Store the selected theme id
        selectedTheme = "Theme ".concat(index + 1); // or use any identifier
    });
});
function addEdu() {
    var educationInput = document.getElementById('eduMsg');
    var addEducationInput = document.createElement('div');
    addEducationInput.innerHTML = "\n<input type=\"text\" placeholder=\"e.g BSC, FSC, Matric\" id=\"qualification\" class=\"qualification\" required>\n<input type=\"text\" placeholder=\"Enter Institute Name\" id=\"institute\" class=\"institute\" required>\n<input type=\"text\" placeholder=\"e.g (2018-2022)\" id=\"duration\" class=\"duration\" required>\n";
    educationInput.appendChild(addEducationInput);
}
function addSkill() {
    var educationInput = document.getElementById('eduExpertise');
    var addEducationInput = document.createElement('div');
    addEducationInput.innerHTML = "\n<input type=\"text\" placeholder=\"Enter Full Name\" id=\"skills\" class=\"skill\" required>\n";
    educationInput.appendChild(addEducationInput);
}
function addLang() {
    var educationInput = document.getElementById('langMsg');
    var addEducationInput = document.createElement('div');
    addEducationInput.innerHTML = "\n<input type=\"text\" placeholder=\"Enter Languages\" id=\"languages\" class=\"language\" required>\n";
    educationInput.appendChild(addEducationInput);
}
function addExp() {
    var educationInput = document.getElementById('expMsg');
    var addEducationInput = document.createElement('div');
    addEducationInput.innerHTML = "\n<input type=\"text\" placeholder=\"Enter Company Name\" id=\"companyname\" class=\"companyname\" required>\n<input type=\"text\" placeholder=\"Enter Position At Company\" id=\"position\" class=\"position\" required>\n<input type=\"text\" placeholder=\"e.g (2018-2022)\" id=\"expduration\" class=\"expduration\" required>\n<input type=\"text\" placeholder=\"Enter Responsiblities At Company\" id=\"responsiblities\" class=\"responsibilities\" required>\n";
    educationInput.appendChild(addEducationInput);
}
function addPort() {
    var educationInput = document.getElementById('portMsg');
    var addEducationInput = document.createElement('div');
    addEducationInput.innerHTML = "\n<input type=\"text\" placeholder=\"e.g Behance, Linkedin, Github\" id=\"platform\" class=\"platform\" required>\n<input type=\"text\" placeholder=\"Paste Platform Link\" id=\"link\" class=\"link\" required>\n";
    educationInput.appendChild(addEducationInput);
}
function generateResume() {
    var currPage = document.getElementById('third');
    var nextPage = document.getElementById('sixth');
    nextPage.style.display = 'flex';
    currPage.style.display = 'none';
    var name = document.getElementById('name').value.trim();
    var profession = document.getElementById('profession').value.trim();
    var about = document.getElementById('about').value.trim();
    var email = document.getElementById('email').value.trim();
    var contact = document.getElementById('contact').value.trim();
    // Collect qualifications, institutes, and durations
    var qualifications = document.querySelectorAll('.qualification');
    var institutes = document.querySelectorAll('.institute');
    var durations = document.querySelectorAll('.duration');
    var educationList = '';
    qualifications.forEach(function (qualification, index) {
        var qualValue = qualification.value.trim();
        var insValue = institutes[index].value.trim();
        var durValue = durations[index].value.trim();
        if (qualValue && insValue && durValue) {
            educationList += "<p>".concat(qualValue, "<br>").concat(insValue, "<br>(").concat(durValue, ")</p>");
        }
    });
    // Collect skills
    var skillElements = document.querySelectorAll('.skill');
    var skillList = '';
    skillElements.forEach(function (skill) {
        var skillValue = skill.value.trim();
        if (skillValue) {
            skillList += "<li>".concat(skillValue, "</li>");
        }
    });
    // Collect languages
    var langElements = document.querySelectorAll('.language');
    var langList = '';
    langElements.forEach(function (lang) {
        var langValue = lang.value.trim();
        if (langValue) {
            langList += "<li>".concat(langValue, "</li>");
        }
    });
    // Collect experience
    var companyElements = document.querySelectorAll('.companyname');
    var positionElements = document.querySelectorAll('.position');
    var expDurationElements = document.querySelectorAll('.expduration');
    var responsibilitiesElements = document.querySelectorAll('.responsibilities');
    var experienceList = '';
    companyElements.forEach(function (company, index) {
        var companyValue = company.value.trim();
        var positionValue = positionElements[index].value.trim();
        var expDurationValue = expDurationElements[index].value.trim();
        var responsibilitiesValue = responsibilitiesElements[index].value.trim();
        if (companyValue && positionValue && expDurationValue && responsibilitiesValue) {
            experienceList += "\n        <div class=\"experience\">\n            <h3>".concat(companyValue, "<span> (").concat(expDurationValue, ")</span></h3>\n            <p>").concat(positionValue, "</p>\n            <ul><li>").concat(responsibilitiesValue, "</li></ul>\n        </div>");
        }
    });
    // Collect portfolio
    var platformElements = document.querySelectorAll('.platform');
    var linkElements = document.querySelectorAll('.link');
    var portfolioList = '';
    platformElements.forEach(function (platform, index) {
        var platformValue = platform.value.trim();
        var linkValue = linkElements[index].value.trim();
        if (platformValue && linkValue) {
            portfolioList += "<h4>".concat(platformValue, "</h4><p>").concat(linkValue, "</p>");
        }
    });
    // Ensure 'resumeDisplay' exists
    var resumeDisplay = document.getElementById('resumeDisplay');
    if (!resumeDisplay) {
        console.error('Element with id "resumeDisplay" not found.');
        return;
    }
    // Generating resume HTML
    if (selectedTheme === 'Theme 1') {
        resumeDisplay.innerHTML = "\n        <div class=\"resume\">\n<div class=\"resume-container\">\n<div class=\"main-header\">\n    <div class=\"profile-section\">\n        <h1>".concat(name, "</h1>\n        <p>").concat(profession, "</p>\n    </div>\n    <div class=\"contact-info\">\n        <p><i class=\"fas fa-phone\"></i>").concat(contact, "</p>\n        <p><i class=\"fas fa-envelope\"></i> ").concat(email, "</p>\n    </div>\n</div>\n\n<div class=\"flex-section\">\n    <div class=\"left-section\">\n    <div class=\"education-section\">\n        <h2>EDUCATION</h2>\n        ").concat(educationList, "\n    </div>\n    <div class=\"expertise-section\">\n        <h2>EXPERTISE</h2>\n        <ul>\n            ").concat(skillList, "\n        </ul>\n    </div>\n    <div class=\"language-section\">\n        <h2>LANGUAGE</h2>\n        <ul>\n            ").concat(langList, "\n        </ul>\n    </div>\n</div>\n<div class=\"right-section\">\n            <div class=\"profile-summary\">\n    <h2>ABOUT</h2>\n    <p>").concat(about, "</p>\n</div>\n    <div class=\"work-experience\">\n        <h2>WORK EXPERIENCE</h2>\n        ").concat(experienceList, "\n    </div>\n    <div class=\"references-section\">\n        <h2>PORTFOLIO</h2>\n        <div class=\"reference\">\n            ").concat(portfolioList, "\n        </div>\n    </div>\n</div>\n</div>\n</div>\n</div>");
    }
}
function printCard() {
    var originalContent = document.body.innerHTML; // Store the original page content
    var divContent = document.getElementById('resumeDisplay').innerHTML; // Get the content of the card
    document.body.innerHTML = divContent; // Replace the body content with the card content
    window.print(); // Trigger the print dialog
    document.body.innerHTML = originalContent; // Restore the original page content after printing
}
