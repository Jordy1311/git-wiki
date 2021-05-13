// DIAGRAM TYPEWRITER EFFECT
let diagramTextArea = document.getElementById('workings-description')
let workingsDiagram = document.getElementById('workings-diagram-text')

let headingMouseOver = (e) => {
    if(e.target.id.includes('heading')) {
        workingsDiagram.textContent += e.target.textContent
    }
}

let headingMouseOut = (e) => {
    if(e.target.id.includes('heading')) {
        workingsDiagram.textContent = 'computer:~'
    }
}

diagramTextArea.addEventListener('mouseover', headingMouseOver);
diagramTextArea.addEventListener('mouseout', headingMouseOut);