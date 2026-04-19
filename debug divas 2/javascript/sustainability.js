// function calculateScore(){

// let project =
// document.getElementById("projectName").value;

// let company =
// document.getElementById("companyName").value;

// if(project=="" || company==""){

// alert("Please enter Project Name and Company Name");

// return;

// }

// let checked =
// document.querySelectorAll('input[type="checkbox"]:checked');

// let total = 0;

// checked.forEach(function(box){

// total += parseInt(box.value);

// });

// document.getElementById("score").innerText =
// "Score : " + total + "%";

// document.getElementById("progress").style.width =
// total + "%";

// if(total >= 75){

// document.getElementById("certificate")
// .classList.remove("hidden");

// document.getElementById("certProject").innerText =
// "Project : " + project;

// document.getElementById("certCompany").innerText =
// "Company : " + company;

// }
// else{

// document.getElementById("certificate")
// .classList.add("hidden");

// alert("Score below sustainability threshold.");

// }

// }



// function downloadCertificate(){

// const { jsPDF } = window.jspdf;

// let project =
// document.getElementById("projectName").value;

// let company =
// document.getElementById("companyName").value;

// let date = new Date().toLocaleDateString();

// let certID =
// "CIQ-" + Math.floor(Math.random()*100000);

// const doc = new jsPDF("landscape");


// // BACKGROUND

// doc.setFillColor(240,255,240);
// doc.rect(0,0,300,210,"F");


// // BORDER

// doc.setDrawColor(34,197,94);
// doc.setLineWidth(3);
// doc.rect(10,10,277,190);


// // TITLE

// doc.setFont("times","bold");
// doc.setFontSize(40);
// doc.setTextColor(34,197,94);

// doc.text("CarbonIQ",140,40,{align:"center"});


// // SUBTITLE

// doc.setFontSize(22);
// doc.setTextColor(0,0,0);

// doc.text("Sustainability Excellence Certificate",140,60,{align:"center"});


// // BODY TEXT

// doc.setFontSize(16);

// doc.text("This certificate is proudly presented to:",140,90,{align:"center"});


// // PROJECT NAME

// doc.setFont("times","bold");
// doc.setFontSize(24);

// doc.text(project,140,110,{align:"center"});


// // COMPANY

// doc.setFontSize(16);
// doc.setFont("times","normal");

// doc.text("Developed by",140,125,{align:"center"});

// doc.setFont("times","bold");

// doc.text(company,140,140,{align:"center"});


// // MESSAGE

// doc.setFont("times","normal");

// doc.text(
// "For successfully meeting CarbonIQ Sustainability Standards",
// 140,
// 160,
// {align:"center"}
// );


// // SIGNATURE

// doc.line(60,180,120,180);
// doc.text("CarbonIQ Authority",60,190);


// // DATE

// doc.text("Date: "+date,200,185);


// // CERTIFICATE ID

// doc.text("Certificate ID: "+certID,200,195);


// // SAVE FILE

// doc.save("CarbonIQ_Certificate.pdf");

// }



function evaluateProject(){

let project =
document.getElementById("projectName").value;

let company =
document.getElementById("companyName").value;

if(project=="" || company==""){

alert("Please enter project and company name");

return;

}

let selects =
document.querySelectorAll("select");

let score = 0;

selects.forEach(function(s){

score += parseInt(s.value);

});

let result =
document.getElementById("result");

if(score >= 60){

result.innerHTML =
"<h3 style='color:#4ade80'>Your project is sustainable!</h3>";

document.getElementById("certificate")
.classList.remove("hidden");

document.getElementById("certProject")
.innerText="Project : " + project;

document.getElementById("certCompany")
.innerText="Company : " + company;

}

else{

result.innerHTML =
"<h3 style='color:#f87171'>Your project is not sustainable yet. Improve environmental practices.</h3>";

document.getElementById("certificate")
.classList.add("hidden");

}

}



function downloadCertificate(){

const { jsPDF } = window.jspdf;

let project =
document.getElementById("projectName").value;

let company =
document.getElementById("companyName").value;

let date = new Date().toLocaleDateString();

let certID = "CIQ-" + Math.floor(Math.random()*100000);

const doc = new jsPDF("landscape");

/* Background */

doc.setFillColor(245,255,245);
doc.rect(0,0,300,210,"F");

/* Outer Border */

doc.setDrawColor(0,120,60);
doc.setLineWidth(3);
doc.rect(10,10,277,190);

/* Inner Border */

doc.setDrawColor(0,180,90);
doc.setLineWidth(1);
doc.rect(15,15,267,180);

/* Title */

doc.setFont("times","bold");
doc.setTextColor(0,120,60);

doc.setFontSize(42);
doc.text("CARBONIQ",140,40,{align:"center"});

/* Subtitle */

doc.setFontSize(22);
doc.setTextColor(0,0,0);
doc.text("Sustainability Certification",140,60,{align:"center"});

/* Body */

doc.setFontSize(16);

doc.text(
"This certificate is proudly presented to",
140,
90,
{align:"center"}
);

/* Project Name */

doc.setFont("times","bold");
doc.setFontSize(26);

doc.text(project,140,110,{align:"center"});

/* Company */

doc.setFontSize(16);
doc.setFont("times","normal");

doc.text("Developed by",140,125,{align:"center"});

doc.setFont("times","bold");

doc.text(company,140,140,{align:"center"});

/* Message */

doc.setFont("times","normal");
doc.setFontSize(15);

doc.text(
"For successfully meeting CarbonIQ sustainability standards",
140,
160,
{align:"center"}
);

/* Signature */

doc.line(50,180,110,180);
doc.text("Authorized by CarbonIQ",50,190);

/* Date */

doc.text("Date: "+date,200,180);

/* Certificate ID */

doc.text("Certificate ID: "+certID,200,190);

/* Save */

doc.save("CarbonIQ_Official_Certificate.pdf");

}