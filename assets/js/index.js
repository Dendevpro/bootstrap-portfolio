// HOMEPAGE
$(document).ready(function () {
    $('#minusIcon').hide();
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
    $('#homeNav').toggleClass('scrolled', $(this).scrollTop() > 800);
    $('#homeNav').show();
});

// PORTFOLIO PAGE

//Get the button:
mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1080 || document.documentElement.scrollTop > 1080) {
        mybutton.style.display = "block";
        // } else {
        //     mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).scroll(function () {
    checkOffset();
});

function checkOffset() {
    if ($('#toTopBtn').offset().top + $('#toTopBtn').height()
        >= $('#footer').offset().top - 150)
        $('#toTopBtn').css('position', 'absolute');
    if ($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
        $('#toTopBtn').css('position', 'fixed'); // restore when you scroll up
}

