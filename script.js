const orchard = document.getElementById('orchard');
const scoreDisplay = document.getElementById('score');
let score = 0;

function getRandomPosition() {
    const orchardWidth = orchard.offsetWidth;
    const orchardHeight = orchard.offsetHeight;
    const randomX = Math.random() * (orchardWidth - 50);
    const randomY = Math.random() * (orchardHeight - 50);
    return { x: randomX, y: randomY };
}

function createApple() {
    const apple = document.createElement('div');
    apple.classList.add('apple');
    const { x, y } = getRandomPosition();
    apple.style.left = `${x}px`;
    apple.style.top = `${y}px`;
    apple.addEventListener('click', () => {
        orchard.removeChild(apple);
        score++;
        scoreDisplay.textContent = score;
    });
    orchard.appendChild(apple);
}

setInterval(createApple, 1000); // Cria uma nova maçã a cada segundo
