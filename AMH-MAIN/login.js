const myForm = document.querySelector('#my-form');
let emailInput = document.querySelector('#input-email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');
let passwordInput = document.querySelector('#input-password');
let lebEm = document.getElementById("leb-email")
let lebPass = document.getElementById("leb-password")
myForm.addEventListener('submit', onsubmit);


lebEm.textContent = ""
lebPass.textContent = ""

emailInput.addEventListener("click", function(){
    lebEm.textContent = "Enter Email (Apple ID)"
    // alert("yoo")
})


passwordInput.addEventListener("click", function(){
    lebPass.textContent = "Enter Password"
})


// function onsubmit(e) {

    
//     e.preventDefault();
//     console.log(document.querySelectorAll('div'))

    


//     if( emailInput.value === '' || nameInput.value === '' || passwordInput.value ==='') {
//         msg.classList.add('error');
//         msg.innerHTML = 'enter correct information';
    
//         setTimeout(() => {
//             msg.classList.remove('error')
//             //msg.innerHTML = ''
//         }, 3000);

//     } else(
//         console.log(finduser(Users, emailInput.value, passwordInput.value))
//     //     console.log({
//     //     name: nameInput.value,
//     //     email: emailInput.value,
//     //     password: passwordInput.value,
//     // })
//     )
// }

let passwordD = document.getElementById("password-d");
let emailD = document.getElementById("email-d");


let Users = [
    {
        name: 'PRINCEWILL DOTCOM',
        email: 'talekeprincewill@gmail.com',
        password: 'myFORM2023'
    },
    {
        name: 'JOSHUAL JOHN',
        email: 'joshuajohn@gmail.com',
        password: 'joshua2023'
    },
    {
        name: 'PETER MICHEAL',
        email: 'petermicheal@gmail.com',
        password: 'micheal2023'
    }
];




let finduser = (users, email, pass) => {
    let user =  users.find(user => user.email === email)
      if (user?.password === pass) return true
      else return false
}

// console.log(finduser(Users, 'nuelnicky@gmail.com', 'nuelnick6').name)

let bodInp = document.getElementById("input-password");
let emaInp = document.getElementById("input-email");

function onsubmit(e) {
    e.preventDefault();
       
           if (emailInput.value == "") {
                emailD.textContent = "Invalid Email"
                lebEm.style.color = "red"
                emailInput.style.borderBottom = "red solid 2px"
           }

           if (passwordInput.value == "") {
                passwordD.textContent = "Invalid password"
                lebPass.style.color = "red"
                passwordInput.style.borderBottom = "red solid 2px"
                
           }

            passwordD.classList.add('error');
            
            setTimeout(() => {
                passwordD.classList.remove('error')
                passwordD.innerHTML = ''
                passwordInput.style.borderBottom = "grey solid 2px"
                lebPass.style.color = "grey"
            }, 4000);

            emailD.classList.add('error');  
            
            setTimeout(() => {
                emailD.classList.remove('error')
                emailD.innerHTML = ''
                emailInput.style.borderBottom = "grey solid 2px"
                lebEm.style.color = "grey"
            }, 4000);
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
