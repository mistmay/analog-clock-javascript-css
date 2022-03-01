function clockGenerator() {
    for (let i = 0; i < 60; i++) {
        const second = document.createElement('div');
        second.setAttribute('class', 'second');
        second.style.transform = `rotate(${i * 6}deg)`;
        const secondTac = document.createElement('div');
        if (i % 5 === 0) {
            secondTac.setAttribute('class', 'second-tac-special');
            const hour = document.createElement('h1');
            hour.innerText = `${i / 5}`;
            if (i === 50 || i === 55) {
                hour.style.left = '-13px';
            } else {
                if (i > 15 && i < 45) {
                    hour.style.transform = 'rotate(180deg)';
                }
                hour.style.left = '-5px';
            }
            second.append(hour);
        } else {
            secondTac.setAttribute('class', 'second-tac');
        }
        second.append(secondTac);
        document.getElementById('clock').append(second);
    }
}

function addZero(number) {
    if (number < 10) {
        return `0${number}`;
    } else {
        return number;
    }
}

function setTime() {
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    const hourDegrees = ((hour / 12) * 360) + ((30 * minute) / 60);
    const minsDegrees = (minute / 60) * 360 + ((6 * second) / 60);
    const secondsDegrees = (second / 60) * 360;
    document.getElementById('hours').parentElement.style.transform = `rotate(${hourDegrees}deg)`;
    document.getElementById('minutes').parentElement.style.transform = `rotate(${minsDegrees}deg)`;
    document.getElementById('seconds').parentElement.style.transform = `rotate(${secondsDegrees}deg)`;
    document.getElementById('time').innerText = `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
}

window.addEventListener('load', () => {
    clockGenerator();
    setTime();
    setInterval(setTime, 1000);
});