import Game from '../src/Game.svelte';

let data = [];
let islands = [ "Crete", "Evia", "Lesbos", "Rhodes", "Chíos", "Cephalonia", "Corfu", "Lemnos", "Samos", "Naxos", "Zakynthos", "Thassos", "Andros", "Lefkada", "Karpathos", "Kos", "Kythira", "Icaria", "Skyros", "Paros", "Tinos", "Samothrace", "Milos", "Kea", "Amorgos", "Kalymnos", "Ios", "Kythnos", "Astypalaia", "Ithaca", "Salamis"];
var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
let temps = Array.from({ length: 34 - 15 + 1  }, (_, i) => i+15)

let types = [{name: "highest", method: Math.max}]
let columns = [{name: "temperature", column: "temp"}]
for(let i=0;i<6000;i++) {
  let randomIndexIsland = Math.random()*islands.length | 0;
  let randomIndexTemps = Math.random()*temps.length | 0;
  let monthIndex = Math.random()*monthNames.length | 0;
  data = data.concat({id: i, month: monthNames[monthIndex], temp: temps[randomIndexTemps], island: islands[randomIndexIsland]});
}

let randomMonthIndex = Math.random()*monthNames.length | 0;
let randomMonth = monthNames[randomMonthIndex]
let question = {
  column: columns[0].column,
  filter: (d) => { return d.month === randomMonth },
  typeFunction: types[0].method,
  text: `Which Island has the ${types[0].name} ${columns[0].name} in ${randomMonth}`
}

function gameEvent(direction, slideIndex) {
  window.dispatchEvent(new CustomEvent(`mrGame:${direction}`, { bubbles: true, detail: {slideIndex}}))
}

document.getElementById("next").addEventListener("click", () => {
  gameEvent("next", 1)
})

document.getElementById("prev").addEventListener("click", () => {
  gameEvent("prev", 1)
})

const app = new Game({
	target: document.getElementById("app"),
	props: {
		name: 'world',
    data,
    question,
	}
});

export default app;
