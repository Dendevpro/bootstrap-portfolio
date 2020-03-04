
// HOMEPAGE
$(document).ready(function () {
});

// Array of Background images
var bgImg = [
    './assets/images/bulbs.svg',
    './assets/images/bulbsOn.svg',
    './assets/images/bulbsOnScroll.svg'
];

// Array of BG colors
var bgColor = ['black', 'white'];

var bgCount = 0;
var switchBtn = '#myonoffswitch';
var myNavBar = "<nav class='navbar navbar-expand-lg fixed-top navbar-dark' style='position: fixed'>" + "<a class='navbar-brand' href='index.html#wrapper'>" + 'HOME' + "</a>" + "</nav>";
var scroll =
    // "<div class='col-3'>" +
    "<a href='#wrapper'>" +
    "<div id='scrollDown'>" +
    "<img src='/assets/images/Scroll.svg'>" +
    // "<p>" +
    // "Please scroll down" +
    // "</p>" +
    "</div>" +
    "</a>";
// "</div>";

// $(function () {
//     $('#hero').css('background-image', 'url(' + bgImg[bgCount] + ')'); //allows a variable for changing background img based in an array, change number in [] to change background...
// });

// Switch BG when Clicking on switch button 
$(switchBtn).on('click', function () {
    bgCount++;
    if (bgCount > bgImg.length - 1) bgCount = 0;
    $('#switchMeOn').css('color', 'white');
    $('#hero').css('background-image', 'url(' + bgImg[bgCount] + ')'); //change image
    $('.landing').css('background-color', bgColor[bgCount]); // change background color
    $(switchBtn).prop("disabled", true); // disable switch button 
    // A TIMER to display 'scroll' CTA
    setTimeout(function () {
        // $('#CTA').append(scroll);
        // $('#hero').css('background-image', 'url(' + bgImg[2] + ')'); // change BG
    }, 4000)
});

// Function to fade in/out 'Navbar'
$(window).scroll(function () {
    // $('#homeNav').toggleClass('scrolled', $(this).scrollTop() > 600).show();
    // $('#homeNav').show();
    $("#scrollDown").css("opacity", 0.5);
});

// Function to change the projects cover background on the slideshow
// const init = function () {
//     let items = document.querySelectorAll('section');
//     for (let i = 0; i < items.length; i++) {
//         items[i].style.background = randomColor({ luminosity: 'light' });
//     }
//     cssScrollSnapPolyfill()
// }
// init();
