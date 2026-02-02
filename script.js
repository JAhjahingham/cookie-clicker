let cookies = 0;
let cps = 0; // Cookies Per Second

// Upgrade Data
let cursorCost = 15;
let grandmaCost = 100;

const cookieCountDisplay = document.getElementById('cookie-count');
const cpsDisplay = document.getElementById('cps-display');
const cookieBtn = document.getElementById('cookie-btn');

// Manual Click
cookieBtn.addEventListener('click', () => {
    cookies++;
    updateDisplay();
});

// Shop Logic: Cursors
document.getElementById('buy-cursor').addEventListener('click', () => {
    if (cookies >= cursorCost) {
        cookies -= cursorCost;
        cps += 1;
        cursorCost = Math.floor(cursorCost * 1.15); // Prices rise 15%
        updateDisplay();
    }
});

// Shop Logic: Grandmas
document.getElementById('buy-grandma').addEventListener('click', () => {
    if (cookies >= grandmaCost) {
        cookies -= grandmaCost;
        cps += 5;
        grandmaCost = Math.floor(grandmaCost * 1.15);
        updateDisplay();
    }
});

// The Main Game Loop (runs every second)
setInterval(() => {
    cookies += cps;
    updateDisplay();
}, 1000);

function updateDisplay() {
    cookieCountDisplay.innerText = Math.floor(cookies) + " cookies";
    cpsDisplay.innerText = "per second: " + cps;
    document.getElementById('cursor-cost').innerText = cursorCost;
    document.getElementById('grandma-cost').innerText = grandmaCost;
}
