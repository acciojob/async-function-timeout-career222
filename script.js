//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function wait(time) {
	return new promise(resolve => {
		setTimeout(resolve,ms);
	});
	
}
async function showMessage() {
	const message = text.value;
	const time = Number(delay.value);

	await wait(time);
	output.textContent = message;
}
btn.addEventListener("click",showMessage);