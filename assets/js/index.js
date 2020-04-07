
// HOMEPAGE
$(document).ready(function () {
    $(switchBtn).prop("checked", true); // disable switch button 

    $("#main").hide();
    $("#goBack").hide();
    setTimeout(function () {
        $("#main").show();
        $("#goBack").show();
        // $('#CTA').append(scroll);
        // $('#hero').css('background-image', 'url(' + bgImg[2] + ')'); // change BG
    }, 6000)
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

// Switch BG when Clicking on switch button 
$(switchBtn).on('click', function () {
    bgCount++;
    if (bgCount > bgImg.length - 1) bgCount = 0;
    $('#switchMeOn').css('color', 'white');
    $('#hero').css('background-image', 'url(' + bgImg[bgCount] + ')'); //change image
    $('.landing').css('background-color', bgColor[bgCount]); // change background color
    $(this).prop("disabled", true); // disable switch button 

    // A TIMER to display 'scroll' CTA
    setTimeout(function () {
        $('.landing').append(scroll);
    }, 4000)
});

// Function to fade in/out 'Navbar'
$(window).scroll(function () {
    $("#scrollDown").css("opacity", 0.5);
});

function goBack() {
    window.history.back();
}

function openNav() {
    $("#mySidenav").css('width', "200px");
}

function closeNav() {
    $("#mySidenav").css('width', "0px");
}

function services() {
    $("#contact-tab").removeClass('active')
    $("#contact").removeClass('active');
    $("#about-tab").removeClass(' active')
    $("#about").removeClass(' show active');
    $("#services-tab").addClass(' active')
    $("#services").addClass(' show active');
}

// function about() {
//     $("#contact-tab").removeClass('active')
//     $("#contact").removeClass('active');
//     $("#services-tab").removeClass(' active')
//     $("#services").removeClass(' show active');
//     $("#about-tab").addClass(' active')
//     $("#about").addClass(' show active');
// }

function contact() {
    $("#about-tab").removeClass('active')
    $("#about").removeClass('active');
    $("#services-tab").removeClass(' active')
    $("#services").removeClass(' show active');
    $("#contact-tab").addClass(' active')
    $("#contact").addClass(' show active');
}

// Function to change the projects cover background on the slideshow
// const init = function () {
//     let items = document.querySelectorAll('section');
//     for (let i = 0; i < items.length; i++) {
//         items[i].style.background = randomColor({ luminosity: 'light' });
//     }
//     cssScrollSnapPolyfill()
// }
// init();
