document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date('April 4, 2024').getTime();
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 3600000) {
            clearInterval(interval);
            countdownElement.innerText = "Die Website wird innerhalb einer Stunde verfügbar sein.";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        let countdownText = '';
        if (days > 0) countdownText += `${days} Tag${days !== 1 ? 'e' : ''} `;
        if (hours > 0) countdownText += `${hours} Stunde${hours !== 1 ? 'n' : ''} `;

        countdownElement.innerText = countdownText.trim();
    }

    const interval = setInterval(updateCountdown, 1000);
});

function adjustHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--viewport-height', `${vh}px`);
    document.body.style.minHeight = `${vh * 100}px`;
}

window.addEventListener('resize', adjustHeight);
adjustHeight();
