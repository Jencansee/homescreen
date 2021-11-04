import '../../styles/components/clock/clock.scss';

const clock = document.getElementById('clock');
const day = document.querySelector('.date__day');

day.textContent = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long' }).format();

const time = () => {
	const d = new Date(),
		zeroPads = (tick) => { return tick < 10 ? `0${tick}` : tick; };

	let hours = zeroPads(d.getHours()),
		minutes = zeroPads(d.getMinutes()),
		seconds = zeroPads(d.getSeconds());
		// mls = zeroPads(d.getMilliseconds());

	return `${hours}:${minutes}:${seconds}`;
};

const startClock = () => { setInterval( () => {clock.innerText = time(); }, 10); };

export default startClock();