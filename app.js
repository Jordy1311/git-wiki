// DIAGRAM TYPEWRITER EFFECT
let workingsTextArea = document.getElementById('workings-description');
let workingsDiagram = document.getElementById('workings-diagram-text');

let headingMouseOver = (event) => {
    if(event.target.id.includes('heading')) {
        let initial = 'computer:';
        let heading = event.target.id;
        switch (heading) {
            case 'main-heading':
                workingsDiagram.textContent = `${initial} git branch \nOn branch main...`
                break;
            case 'pulling-heading':
                workingsDiagram.textContent = `${initial} git pull \nPulling...`
                break;
            case 'branches-heading':
                workingsDiagram.textContent = `${initial} git branch \nOn branch main...`
                break;
            case 'tracked-heading':
                workingsDiagram.textContent = `${initial} git status \nOn branch main...\n Chanes not staged for commit... - X\n-Y\n-Z`
                break;
            case 'staging-heading':
                workingsDiagram.textContent = `${initial} git add . \nFILES ADDED...`
                break;
        }
        
        
        workingsDiagram.textContent += ` ${event.target.textContent}`;
    }
}

let headingMouseOut = (event) => {
    if(event.target.id.includes('heading')) {
        workingsDiagram.textContent = 'computer:~';
    }
}

workingsTextArea.addEventListener('mouseover', headingMouseOver);
workingsTextArea.addEventListener('mouseout', headingMouseOut);