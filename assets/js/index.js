// HOMEPAGE
$(document).ready(function () {
    $('#homeNav').hide(); // Hide Nav when landing on page
    $('#scroll2see').hide(); // Hide element to fade it in later on...
    $('#toTopBtn').hide();
});

// ... timer to fade in 'scroll down call'
setTimeout(function () {
    $('#scroll2see').show(40);
}, 3000)

// Function to fade in/out 'Navbar'
$(window).scroll(function () {
    $('#homeNav').toggleClass('scrolled', $(this).scrollTop() > 800).show();
    // $('#homeNav').show();
});

// PORTFOLIO PAGE

//Get the button:
var mybutton = document.getElementById("toTopBtn");
// // When the user scrolls down 1080px from the top of the document, show "scroll-to-top" button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1080 || document.documentElement.scrollTop > 1080) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// MEDIA QUERIES

function myFunction(x) {
    if (x.matches) { // If media query matches
        // $('.btn-danger').addClass('btn-lg btn-block');
        $('#homeNav').toggleClass('scrolled', $(this).scrollTop() > 200).show();
    }
    // else {
    //     $('.btn-danger').keep();
    // }
}

var x = window.matchMedia("(max-width: 575.98px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

