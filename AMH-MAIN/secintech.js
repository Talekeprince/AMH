// variables
var navMenu = document.querySelector('.nav-menu');
let menuItems = document.querySelector(".nav-menu-items"); 
let secintech = document.getElementById('secintech');
var refreshBtn = document.getElementById('refresh-btn');
var logo = document.getElementById("logo");
var welcomeEl = document.getElementById('welcm-hidden-el');

// nav contents display
    secintech.style.color = `red`
    logo.addEventListener('click', function(){
        if (secintech.style.color == `yellow`) {
            secintech.style.color = `red`
            welcomeEl.style.backgroundColor = 'red'
            logo.style.boxShadow = '0 0 8px red'
        } else {
            logo.style.boxShadow = '0 0 8px yellow'
            secintech.style.color = `yellow`
            welcomeEl.style.backgroundColor = 'yellow'
        }
    })
    refreshBtn.addEventListener('click', function(){
        location.replace('secintech.html');
    })
    menuItems.innerHTML =''
    menuItems.classList.remove('nav-menu-items')

navMenu.addEventListener('click', function(){
   if (menuItems.innerHTML == '') {
            menuItems.innerHTML = 
        `<div class="nav-menu-links">
            <a href="#about-us-drop">About Us</a>
            <a href="#service-drop">Services</a>
            <a href="#training-drop">AMH training</a>
            <a href="#apply-btn">Our Ministers</a>
            <a href="#contact-details">Newsletter</a>
            <a href="">Support/help</a>
        </div>
        `
        secintech.innerHTML = `<h1>ABLAZE MEET HEAVEN</h1>`
        menuItems.classList.add('nav-menu-items')
        navMenu.innerHTML = `<button id='times'>&times;</button>`
   } else {
        secintech.innerHTML = 
        `<marquee behavior="slow" direction="left">
            <h1>AMH ORG</h1>
        </marquee>
        `
        menuItems.innerHTML = ''
        menuItems.classList.remove('nav-menu-items')
        navMenu.innerHTML = 
        `<span id="short-line-menu-one"></span>
            <span></span>
            <div id="menu-design">
                <span id="dot-menu-alt"></span>
                <span id="short-line-menu"></span>
            </div>
        `
   }
})
// =========================================menu display end

//================================================ sounds start

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelector(".key.white");

keys.forEach(keys =>
    keys.addEventListener("click", () => {playNotes(keys);
}))
    
    

document.addEventListener('keydown', e => {
    const key = e.key
})

function playNotes(key){
    const audioNotes = document.getElementById(key.dataset.note);
    audioNotes.currentTime = 0
    audioNotes.play();
    key.classList.add("active");
    keys.innerHTML = 'hello'
};
// playNotes(key)
// =================================================sounds end

// ==============================================slide images start
// var slider_image = document.querySelector(".slider-image");
// var images = ['picture/lady with computer.jpg','picture/training.jpg', 'picture/princewill crop.jpg', 'picture/carear.jpg', 'picture/working team.jpg'];
// var i = 0;

// function prev(){
//         if(i <= 0 ) i = images.length;
//         i--;
//         return setImage();
// }

// function next(){

//         if( i >= images.length -1) i = -1;
//         i++;
//         return setImage();
// }
// setInterval(() => {
//         next()
// }, 3000);

// function setImage(){
//         return slider_image.setAttribute('src', images[i]);
// }
// slide image end


// rate pop up
var ratePop = document.getElementById('rate');

    ratePop.classList.add('invisibleRate')
    setTimeout(() => {
        ratePop.classList.remove('invisibleRate')
    }, 50000);
    
    var rateStars = document.querySelectorAll('.rate-star');
    var rateStarOne = document.querySelector('.rate-star-one');
    var rateStarTwo = document.querySelector('.rate-star-two');
    var rateStarThree = document.querySelector('.rate-star-three');
    var rateStarFour = document.querySelector('.rate-star-four');
    var rateStarFive = document.querySelector('.rate-star-five');
    // rateStars.forEach(rateStar => rateStar.addEventListener('click', () => {
    //     alert('yoo')
    // }))

    rateStarFive.addEventListener('click', function(){
        rateStarOne.innerHTML = '<span>&bigstar;</span>'
        rateStarTwo.innerHTML = '<span>&bigstar;</span>'
        rateStarThree.innerHTML = '<span>&bigstar;</span>' 
        rateStarFour.innerHTML = '<span>&bigstar;</span>'
        rateStarFive.innerHTML = '<span>&bigstar;</span>' 
    })
     rateStarFour.addEventListener('click', function(){
        rateStarOne.innerHTML = '<span>&bigstar;</span>'
        rateStarTwo.innerHTML = '<span>&bigstar;</span>'
        rateStarThree.innerHTML = '<span>&bigstar;</span>' 
        rateStarFour.innerHTML = '<span>&bigstar;</span>'
        rateStarFive.innerHTML = `<span
                    class="rate-star-five">&star;</span>`
    })
     rateStarThree.addEventListener('click', function(){
        rateStarOne.innerHTML = '<span>&bigstar;</span>'
        rateStarTwo.innerHTML = '<span>&bigstar;</span>'
        rateStarThree.innerHTML = '<span>&bigstar;</span>' 
        rateStarFour.innerHTML = `<span
                    class="rate-star-five">&star;</span>`
        rateStarFive.innerHTML = `<span
                    class="rate-star-five">&star;</span>`
    })
     rateStarTwo.addEventListener('click', function(){
        rateStarOne.innerHTML = '<span>&bigstar;</span>'
        rateStarTwo.innerHTML = '<span>&bigstar;</span>'
        rateStarThree.innerHTML =  `<span
                    class="rate-star-five">&star;</span>` 
        rateStarFour.innerHTML = `<span
                    class="rate-star-five">&star;</span>`
        rateStarFive.innerHTML = `<span
                    class="rate-star-five">&star;</span>`
    })
    rateStarOne.addEventListener('click', function(){
        rateStarOne.innerHTML = '<span>&bigstar;</span>'
        rateStarTwo.innerHTML = `<span
                    class="rate-star-five">&star;</span>`
        rateStarThree.innerHTML =  `<span
                    class="rate-star-five">&star;</span>` 
        rateStarFour.innerHTML = `<span
                    class="rate-star-five">&star;</span>`
        rateStarFive.innerHTML = `<span
                    class="rate-star-five">&star;</span>`
    })

    function reminder_rate(){
        // alert('yoo')
        ratePop.classList.add('invisibleRate');
    }
    function submit_rate(){
        alert(90);
    }

    // training programs
    function apply_btn(){
        location.replace('create.html');
    }
    function join_btn(){
        location.replace('create.html');
    }