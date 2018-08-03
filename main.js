let button = document.getElementById("submit-btn");

//can not addEventListener of null - it could not find an element on the page that had the id of submit-btn therefore button had 'null' stored in it
//when the button is clicked, console log
button.addEventListener("click", function(){
    console.log("You clicked the submit button!");
});


//print the junior instructors to the DOM
let jrInstructors = document.getElementById("jr-instructors");
staff.juniorInstructors.forEach(jrInstructor => {
    let element = document.createElement("p");
    element.textContent = `${jrInstructor} is a junior instructor at NSS`;
    jrInstructors.appendChild(element);
});


//console log each of the schools in the school array individually and console log them
schools.forEach(schools => {
    console.log(schools);
});

for(let i = 0; i < schools.length; i++) {
    console.log(schools[i]);
};


//print each of the lead instructors to the console
for(let i = 0; i < staff.instructors.length; i++){
    console.log(staff.instructors[i]);
}

let sentence= ["I ", "love ", "javascript ", "!"];
let buildmeup = "";
for(let i = 0; i < sentence.length; i++){
    buildmeup += sentence[i];
}


//print the result to the console
let parkInfo = {};
fetch("https://external-data-56670.firebaseio.com/park-info.json")
.then(response => response.json())
.then(result => {
    parkInfo = result;
    console.log(parkInfo);
});

function renderParkInfo () {
     document.querySelector(".parkInfo").innerHTML = parkInfo[0].description;
}

document.querySelector("#display-btn").addEventListener("click", renderParkInfo);
document.querySelector("#display-btn").addEventListener("click", function(){
    //some logic - this is a anonymous function. You are defining the function here, but it IS NOT INVOKED until the click event is broadcasted by the browser
});





