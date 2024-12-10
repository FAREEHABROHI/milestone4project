var form = document.getElementById('resume f');
var resumeDisplayElement = document.getElementById('resume-display');
//submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var EXPERIANCE = document.getElementById('EXPERIANCE').value;
    var SKILLS = document.getElementById('SKILLS').value;
    var resumeHTML = "\n    <h2><b> Editable Resume</b></>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n     <p contenteditable=\"true\">").concat(education, "</p>\n\n      <h3>Experiance</h3>\n     <p contenteditable=\"true\">").concat(EXPERIANCE, "</p>\n\n      <h3>SKILLS</h3>\n     <p contenteditable=\"true\">").concat(SKILLS, "</p>\n\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
