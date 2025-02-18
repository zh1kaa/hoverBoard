const grid = document.querySelector(".grid");
for (let i = 0; i < 100; i++) {
	const cell = document.createElement("div");
	grid.appendChild(cell);
	cell.classList.add("cell");
	cell.addEventListener("mouseover", () => {
		cell.style.backgroundColor = randomColor();
	});
}
const randomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
};

const buttonOn = document.getElementById("on");
buttonOn.addEventListener("click", () => {
	for (let i = 0; i < 100; i++) {
		const removeCell = document.querySelector(".cell");
		grid.removeChild(removeCell);
		const cell = document.createElement("div");
		cell.classList.add("cell");
		grid.appendChild(cell);
		cell.style.backgroundColor = randomColor();
	}
});

// const buttonOff = document.getElementById("on");
// buttonOff.addEventListener("click", () => {
// 	for (let i = 0; i < 100; i++) {
// 		const removeCell = document.querySelector(".cell");
// 		grid.removeChild(removeCell);
// 		const cell = document.createElement("div");
// 		cell.classList.add("cell");
// 		grid.appendChild(cell);
// 		cell.style.backgroundColor = randomColor();
// 	}
// });
