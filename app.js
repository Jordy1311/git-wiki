// GET ELEMENTS
let diagramTextArea = document.getElementById('workings-description')
let workingsDiagram = document.getElementById('workings-diagram-text')

let headingMouseOver = function(e) {
    if(e.target.id.includes('heading')) {
        workingsDiagram.textContent += e.target.textContent
    }
}

let headingMouseOut = function(e) {
    if(e.target.id.includes('heading')) {
        workingsDiagram.textContent = 'computer:~'
    }
}

diagramTextArea.addEventListener('mouseover', headingMouseOver);
diagramTextArea.addEventListener('mouseout', headingMouseOut);

// SCROLLSPY
$('body').scrollspy({target: '#main-nav'});
