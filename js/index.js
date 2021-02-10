
const reload = document.querySelector('.nav-link');
/////////------click
reload.addEventListener('click', (e) =>  {
    e.preventDefault();
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
});
/////////-------load
window.addEventListener('load', () => {
    alert("Welcome!");
}, true);

////////------- mouseover
const orgNav = document.querySelector('.main-navigation');
const bigNav = document.querySelector('.nav');
const funBus = document.querySelector('h1');

orgNav.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "#ffcc99";
    funBus.style.fontSize = "6rem";
    funBus.style.color = "white";
    funBus.style.fontWeight = "bolder";

    setTimeout(function()   {
        event.target.style.backgroundColor = "";
        funBus.style.fontSize = "";
        funBus.style.color = "";
        funBus.style.fontWeight = "";
    }, 35000);

}, false);

bigNav.addEventListener("mouseover", function(event)    {
    event.stopPropagation();
    event.target.style.fontSize = "4rem";
    event.target.style.fontWeight = "bold";
    event.target.style.color = "white";

    setTimeout(function()   {
        event.target.style.fontSize = "";
        event.target.style.color = "";
        event.target.style.backgroundColor = "";
    }, 1500);
    setTimeout(function()   {
        event.target.style.fontWeight = "";
    }, 2200);

}, true);

/////////------wheel
const images = document.querySelectorAll('img');

let scale = 1;
Array.from(images).forEach(el => {

    function zoom(event)   {
        event.preventDefault();
        event.target.style.padding = ".2rem";
        event.target.style.border = "2px solid turquoise";
        event.target.style.borderRadius = "30px";
        scale += event.deltaY * -0.01;
        scale = Math.min(Math.max(1, scale), 2);
        el.style.transform = `scale(${scale})`;

        setTimeout(function()   {
            event.target.style.border = "";
        }, 1000);
    }

    el.addEventListener('wheel', zoom);
})

///////-----dblclick
const paraGraphs = document.querySelectorAll('p');
Array.from(paraGraphs).forEach(element => {

    function doubleSize(event)   {
        event.preventDefault();
        event.target.style.backgroundColor = "white";
        event.target.style.padding = "1rem";
        event.target.style.margin = ".5rem";
        event.target.style.border = "2px solid #ffcc99";
        event.target.style.borderRadius = "30px";
        event.target.style.fontSize = "2rem";
    }
    function backNormal(event) {
        event.target.style.backgroundColor = "";
        event.target.style.padding = "";
        event.target.style.border = "";
        event.target.style.borderRadius = "";
        event.target.style.fontSize = "";

    }
    element.addEventListener('click', doubleSize);
    element.addEventListener('dblclick', backNormal);
})

///////-------click
const buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach(signUp => {
    signUp.addEventListener('click', function (event) {
        event.preventDefault();
        alert("Welcome, let's sign up for fun!")
    });
});


//////------mouseenter and mouseleave
const allHover = document.querySelectorAll('h2, h4');

Array.from(allHover).forEach(mouseHover => {
    mouseHover.addEventListener('mouseenter', function(event) {
        event.preventDefault;
        event.target.style.fontSize = "6rem";
        event.target.style.color = "orange"
    });
    mouseHover.addEventListener('mouseleave', function(event) {
        event.target.style.fontSize = "";
        event.target.style.color = "";
    })
});












