let lebPassword = document.getElementById("password");
let lebEmail = document.getElementById("email");
let lebCountry = document.getElementById("country");
let inputPass = document.getElementById("input-password");
let inputEm = document.getElementById("input-email");
let inputCount = document.getElementById("input-country");
let listOne = document.getElementById("list-one");
let listTwo = document.getElementById("list-two");
const checkBox = document.getElementById("checkbox");
let listThree = document.getElementById("list-three");


lebPassword.textContent ='Enter Password'
lebEmail.textContent = 'Enter Email (Apple ID)'
lebCountry.textContent = 'Enter Country/Region of residence'


inputCount.addEventListener('click', function(){
    lebCountry.textContent = 'Enter Country/Region of residence'
    lebCountry.style.color = "grey"
    inputCount.style.borderBottom = "solid grey 2px"
})

inputPass.addEventListener("click", function(){
    lebPassword.textContent = 'Enter Password'
    lebPassword.style.color = "grey"
    inputPass.style.borderBottom = "solid grey 2px"
})

inputEm.addEventListener("click", function(){
    lebEmail.textContent = "Enter Email (Apple ID)"
    lebEmail.style.color = "grey"
    inputEm.style.borderBottom = "solid grey 2px"
})

const contBtn = document.querySelector("#cont-btn")

contBtn.innerHTML = ``

checkBox.addEventListener('click', function(){
  if (contBtn.innerHTML === ``) {
        contBtn.innerHTML = `<button id="continue-btn" value="submit" onclick="continueBtn()">Continue</button>`
  } else {
    contBtn.innerHTML = ``
  }

})

function continueBtn() {

    if (inputEm.value == "") {
        inputEm.style.borderBottom = "solid red 2px"
        lebEmail.textContent = "Please enter email"
        lebEmail.style.color = "red"
    }

    if(inputCount.value == ""){
        inputCount.style.borderBottom = "solid red 2px"
        lebCountry.textContent = "Please enter country/region"
        lebCountry.style.color = "red"
    }

    if (inputPass.value == "") {
        inputPass.style.borderBottom = "solid red 2px"
        lebPassword.textContent = "Please enter password"
        lebPassword.style.color = "red"
    }
//    console.log("hello world")
}

// nav bar validation
// variables
const menuBtn = document.querySelector('#nav-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const menuDOM = document.querySelector('.menu');
const menuOverlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelector('.menu-item');
const menuContent = document.querySelector('.menu-contents');
const homeBtn = document.querySelector("#home-btn");
       
// menu overlay open and close start
menuBtn.addEventListener("click", function(){
            menuOverlay.classList.add("transparentBcg");
            menuDOM.classList.add("showMenu");
})
closeMenuBtn.addEventListener("click", function(){
        menuOverlay.classList.remove("transparentBcg");
        menuDOM.classList.remove("showMenu");
})
