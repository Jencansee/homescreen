const clock = document.getElementById('clock');

const time = () => {
    const d = new Date(),
    zeroPads = (tick) => { return tick < 10 ? `0${tick}` : tick }

    let hours = zeroPads(d.getHours()),
        minutes = zeroPads(d.getMinutes());
        //seconds = zeroPads(d.getSeconds());

    return `${hours}:${minutes}`;
};

const startClock = () => { setInterval( () => {clock.innerText = time() }, 1000); }

startClock();