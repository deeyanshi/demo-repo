// Full sustainability question bank (50 questions)

let questionBank = [

{question:"Which energy source is renewable?",answers:["Coal","Solar","Petrol","Diesel"],correct:1},
{question:"Which gas contributes most to global warming?",answers:["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen"],correct:1},
{question:"What does the 3R principle stand for?",answers:["Reduce Reuse Recycle","Run Read Rest","Repair Replace Rebuild","Reuse Rebuild Remove"],correct:0},
{question:"Which item is biodegradable?",answers:["Plastic bottle","Banana peel","Glass","Aluminium can"],correct:1},
{question:"Which sector produces the most greenhouse gases?",answers:["Transport","Agriculture","Energy","Fashion"],correct:2},
{question:"What is the main cause of deforestation?",answers:["Urbanization","Agriculture","Transport","Fishing"],correct:1},
{question:"Which energy source is non-renewable?",answers:["Wind","Solar","Coal","Hydro"],correct:2},
{question:"What helps conserve water?",answers:["Rainwater harvesting","Leaving tap open","Long showers","Washing cars daily"],correct:0},
{question:"Which material is easiest to recycle?",answers:["Plastic","Glass","Rubber","Foam"],correct:1},
{question:"Which gas protects Earth from UV radiation?",answers:["Ozone","CO2","Methane","Nitrogen"],correct:0},

{question:"Which appliance saves electricity?",answers:["LED bulb","Incandescent bulb","Halogen bulb","Tube heater"],correct:0},
{question:"Which transport is most eco-friendly?",answers:["Car","Bicycle","Motorbike","Plane"],correct:1},
{question:"What is composting?",answers:["Burning waste","Turning waste into fertilizer","Throwing waste","Plastic recycling"],correct:1},
{question:"Which country emits the most CO₂?",answers:["India","China","Brazil","France"],correct:1},
{question:"What is the main cause of climate change?",answers:["Volcanoes","Greenhouse gases","Clouds","Moonlight"],correct:1},
{question:"Which item should go in recycling bin?",answers:["Plastic bottle","Food waste","Dirty tissue","Broken mirror"],correct:0},
{question:"What helps reduce carbon footprint?",answers:["Public transport","Private jets","SUV driving","Burning trash"],correct:0},
{question:"Which farming practice is sustainable?",answers:["Organic farming","Chemical overuse","Deforestation farming","Burn farming"],correct:0},
{question:"Which ocean problem is caused by plastic?",answers:["Plastic pollution","Salt increase","Wave growth","Coral heat"],correct:0},
{question:"Which gas is produced by cows?",answers:["Methane","Helium","Hydrogen","Oxygen"],correct:0},

{question:"Which resource is renewable?",answers:["Wind","Coal","Oil","Natural gas"],correct:0},
{question:"Which product reduces plastic waste?",answers:["Reusable bag","Plastic bag","Disposable cup","Plastic straw"],correct:0},
{question:"Which activity saves electricity?",answers:["Turning off lights","Keeping lights on","Using heaters all day","Running AC always"],correct:0},
{question:"Which energy comes from flowing water?",answers:["Hydropower","Coal power","Oil power","Gas power"],correct:0},
{question:"Which item harms marine life?",answers:["Plastic straw","Paper bag","Cotton cloth","Wood"],correct:0},
{question:"Which tree activity absorbs CO₂?",answers:["Photosynthesis","Respiration","Evaporation","Condensation"],correct:0},
{question:"Which energy source uses sunlight?",answers:["Solar","Coal","Oil","Gas"],correct:0},
{question:"Which waste takes longest to decompose?",answers:["Plastic","Paper","Food","Leaves"],correct:0},
{question:"Which product saves water?",answers:["Low-flow shower","Old shower","Open hose","Broken pipe"],correct:0},
{question:"Which energy source is clean?",answers:["Wind","Coal","Diesel","Petrol"],correct:0},

{question:"Which material is eco-friendly?",answers:["Bamboo","Plastic","Foam","PVC"],correct:0},
{question:"Which sector consumes most freshwater?",answers:["Agriculture","Transport","IT","Tourism"],correct:0},
{question:"Which device produces renewable electricity?",answers:["Solar panel","Diesel generator","Coal plant","Gas engine"],correct:0},
{question:"Which practice saves forests?",answers:["Recycling paper","Cutting trees","Burning forests","Mining"],correct:0},
{question:"Which gas traps heat in atmosphere?",answers:["Methane","Helium","Oxygen","Argon"],correct:0},
{question:"Which action reduces waste?",answers:["Reuse items","Throw items","Burn items","Dump items"],correct:0},
{question:"Which food has lower carbon footprint?",answers:["Vegetables","Beef","Pork","Chicken"],correct:0},
{question:"Which energy is produced by wind turbines?",answers:["Wind energy","Coal energy","Gas energy","Oil energy"],correct:0},
{question:"Which practice reduces pollution?",answers:["Public transport","More cars","Burning plastic","Cutting forests"],correct:0},
{question:"Which building design saves energy?",answers:["Green buildings","Concrete blocks","Glass towers","Steel sheds"],correct:0},

{question:"Which planet issue is caused by CO₂ rise?",answers:["Global warming","Ice growth","Cooling","Wind reduction"],correct:0},
{question:"Which fuel produces least pollution?",answers:["Electricity","Coal","Diesel","Petrol"],correct:0},
{question:"Which item can be composted?",answers:["Food waste","Plastic bottle","Glass","Metal"],correct:0},
{question:"Which practice protects wildlife?",answers:["Conservation","Hunting","Deforestation","Mining"],correct:0},
{question:"Which energy source uses Earth's heat?",answers:["Geothermal","Coal","Diesel","Gas"],correct:0},
{question:"Which gas layer protects Earth?",answers:["Ozone layer","CO₂ layer","Methane layer","Dust layer"],correct:0},
{question:"Which product reduces paper use?",answers:["Digital documents","Paper printing","Paper flyers","Paper ads"],correct:0},
{question:"Which activity causes air pollution?",answers:["Burning fossil fuels","Planting trees","Cycling","Recycling"],correct:0},
{question:"Which habit saves electricity?",answers:["Unplug devices","Leaving chargers","Running AC all day","Leaving TV on"],correct:0},
{question:"Which action helps the planet?",answers:["Planting trees","Burning waste","Cutting forests","Dumping plastic"],correct:0}

];

let gameQuestions = [];
let currentQuestion = 0;
let score = 0;

// Select 10 random questions
function getRandomQuestions(){

let shuffled = questionBank.sort(() => 0.5 - Math.random());
return shuffled.slice(0,10);

}

function startGame(){

gameQuestions = getRandomQuestions();

currentQuestion = 0;
score = 0;

document.getElementById("start-screen").classList.add("hide");
document.getElementById("game-screen").classList.remove("hide");

showQuestion();

}

function showQuestion(){

let q = gameQuestions[currentQuestion];

document.getElementById("question").innerText = q.question;

let buttons = document.querySelectorAll(".answer-btn");

buttons.forEach((btn,index)=>{
btn.innerText = q.answers[index];
});

}

function checkAnswer(index){

if(index === gameQuestions[currentQuestion].correct){
score++;
}

currentQuestion++;

if(currentQuestion < gameQuestions.length){
showQuestion();
}else{
endGame();
}

document.getElementById("score").innerText = "Score: "+score;

}

function endGame(){

document.getElementById("game-screen").classList.add("hide");
document.getElementById("end-screen").classList.remove("hide");

document.getElementById("final-score").innerText =
"Your Score: "+score+" / 10";

}

function restartGame(){

document.getElementById("end-screen").classList.add("hide");
document.getElementById("start-screen").classList.remove("hide");

}