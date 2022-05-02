const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');

// Movimento e tiro da nave.
function flyShip(event) {
    if(event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    }else if(event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    }else if(event.key === " ") {
        event.preventDefault();
        fireLaser();
    }
}

//Sobe a nave.
function moveUp() {
    // Busca os estilos da nossa nave e retorna o valor top na forma de string.
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    
    if(topPosition === "0px") {
        return;
    }else {
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = `${position}px`;
    }
}

//Desce a nave.
function moveDown() {
    // Busca os estilos da nossa nave e retorna o valor top na forma de string.
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    
    if(topPosition === "550px") {
        return;
    }else {
        let position = parseInt(topPosition);
        position += 50;
        yourShip.style.top = `${position}px`;
    }
}

// Funcionalidade de tiro.
function fireLaser() {
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
}

function createLaserElement() {
    let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));
    let newLaser = document.createElement('img');
    newLaser.src = 'assets/img/shoot.png';
    newLaser.classList.add('laser');
    newLaser.style.left = `${xPosition}px`;
    newLaser.style.top = `${yPosition - 10}px`; // -10 para o tiro sair no meio da nave.
    return newLaser;
}

function moveLaser(laser) {
    let laserInterval = setInterval(()=> {
        let xPosition = parseInt(laser.style.left);

        if(xPosition === 340) {
            laser.remove();
        }else {
            laser.style.left = `${xPosition + 8}px`
        }
    }, 10);
}
window.addEventListener('keydown', flyShip);
