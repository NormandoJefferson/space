const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-game');

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

window.addEventListener('keydown', flyShip);
