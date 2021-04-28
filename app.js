// GET ELEMENTS
let diagramTextArea = document.getElementById('workings-description')

let headingMouseOver = function(e) {
    if(e.target.id.includes('heading')) {
        e.target.style.color = '#FFD300';
    }
}

let headingMouseOut = function(e) {
    if(e.target.id.includes('heading')) {
        setTimeout(function() {e.target.style.color = '#000';}, 700)
    }
}

diagramTextArea.addEventListener('mouseover', headingMouseOver);
diagramTextArea.addEventListener('mouseout', headingMouseOut);

// SCROLLSPY
$('body').scrollspy({target: '#main-nav'});

// ANIMATED SCROLLING FOR SMOOTH SCROLLING
$('#main-nav a').on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function() {
        window.location.hash = hash;
        });
    }
});
