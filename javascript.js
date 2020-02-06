let balloon = document.querySelector('.balloon');
let balloonSize = getBalloonSize();
let explosionSize = calculateExplosionSize();

let warning = document.querySelector('#warning-message');

warning.textContent = `Watch out! The balloon will explode if it is bigger than ${explosionSize} pixels.`;

document.addEventListener('keydown', disableArrowKeys);
document.addEventListener('keydown', checkKeyPress);

function getBalloonSize() {
    return parseInt(window.getComputedStyle(balloon).fontSize);
}

function disableArrowKeys(key) {
    if (key.keyCode === 38 || key.keyCode === 40) {
        key.preventDefault();
    }
}

function checkKeyPress(key) {
    let inflationAmount = balloonSize * 0.10;
    
    if (key.keyCode === 38) {
        updateWarning("danger");
        increaseBalloonSize(inflationAmount);
    } else if (key.keyCode === 40) {
        updateWarning("relief");
        decreaseBalloonSize(inflationAmount);
    }
}

function updateWarning(status) {
    const increaseMessages = [
        "Getting closer...", 
        "Whoa!  Be careful!", 
        "Are you sure that's a good idea?",
        `You're only ${explosionSize - getBalloonSize()} pixels away!`
    ];

    const decreaseMessages = [
        "Phew, that's better.", 
        "That seems like a good size.", 
        "Letting out a little steam!",
        "Balloons are best enjoyed in moderation."
    ];

    if (status === "danger") {
        warning.textContent = increaseMessages[Math.floor(Math.random() * increaseMessages.length)];
    } else if (status === "relief") {
        warning.textContent = decreaseMessages[Math.floor(Math.random() * decreaseMessages.length)];
    }
}

function increaseBalloonSize(inflationAmount) {
    // Round up on the increase - otherwise, below 10px, there is no change.
    balloon.style.fontSize = `${(balloonSize + Math.ceil(inflationAmount))}px`;
    balloonSize = getBalloonSize();
    checkExplosion();
}

function decreaseBalloonSize(inflationAmount) {
    balloon.style.fontSize = `${(balloonSize - inflationAmount)}px`;
    balloonSize = getBalloonSize();
}

function calculateExplosionSize() {
    let maxBalloon = 200;
    let minExplosion = 100;
    return Math.floor(Math.random() * (maxBalloon - minExplosion + 1)) + minExplosion;
}

function checkExplosion() {
    const explosionMessages = [
        "Oh no!",
        "Kerplow!",
        "Eek!  Look out!",
        "Let's keep this between us."
    ];

    if (balloonSize > explosionSize) {
        balloon.textContent = "💥";
        document.removeEventListener('keydown', checkKeyPress);
        warning.textContent = explosionMessages[Math.floor(Math.random() * explosionMessages.length)];
    }
}