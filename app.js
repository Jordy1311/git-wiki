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
