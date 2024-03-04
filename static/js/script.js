document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date('April 4, 2024').getTime();
    const countdownElement = document.getElementById('countdown');
    const notifyButton = document.getElementById('notifyButton');

    // Функция для обновления обратного отсчета
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        let countdownText = `${days} Tage ${hours} Stunde`;
        if (minutes > 0) {
            countdownText += ` ${minutes} Minuten`; // Добавляем минуты, если они не равны нулю
        }

        countdownElement.innerText = countdownText;
    }


    // Запуск обновления обратного отсчета каждую секунду
    let interval = setInterval(updateCountdown, 1000);

    // Обработчик нажатия на кнопку для запроса разрешения на уведомления
    notifyButton.addEventListener('click', function () {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                const notificationTime = targetDate - new Date().getTime();
                setTimeout(() => {
                    new Notification("kaif. ist online!", {
                        body: "Время события наступило",
                        icon: "../path/to/icon.png"
                    });
                }, notificationTime);
            }
        });
    });
});

// Универсальная функция для корректировки высоты
function adjustHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--viewport-height', `${vh}px`);
    document.body.style.minHeight = `${window.innerHeight}px`;
}

// Вызов функции корректировки высоты при изменении размеров окна и при загрузке страницы
window.addEventListener('resize', adjustHeight);
adjustHeight();
