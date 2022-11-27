const img = document.getElementById( 'imagens' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null

const trafficLight = ( event ) => {
	stopAutomatic ();
	turnOn[event.target.id]();
}

const netxIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
	const colors = ['red', 'yellow', 'green']
	const color = colors[ colorIndex ];
	turnOn[color]();
	netxIndex();
}

const stopAutomatic = () => {
	clearInterval ( intervalId );
}

const turnOn = {
	'red': 	 	() => img.src = './imagens/vermelho.png',
	'yellow': 	() => img.src = './imagens/amarelo.png',
	'green': 	() => img.src = './imagens/verde.png',
	'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener( 'click', trafficLight );