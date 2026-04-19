function checkEmission(){

let emission =
document.getElementById("carbonInput").value;

let result =
document.getElementById("result");

if(emission==""){
result.innerHTML="Please enter emission value.";
return;
}

let limit = 2000;

if(emission <= limit){

result.innerHTML = `
<h3 style="color:#4ade80">
Great! Your project is environmentally responsible.
</h3>

<p>
The carbon emission is within sustainable limits.
Keep up the good work and continue using eco-friendly practices.
</p>
`;

}
else{

result.innerHTML = `
<h3 style="color:#f87171">
Carbon emission is above the recommended limit.
</h3>

<p>Suggested actions to reduce emissions:</p>

<ul style="text-align:left">

<li>Use low-carbon construction materials</li>
<li>Integrate renewable energy sources</li>
<li>Improve energy efficiency of equipment</li>
<li>Adopt recycled materials</li>
<li>Implement waste reduction strategies</li>
<li>Optimize transportation and logistics</li>

</ul>
`;

}

}