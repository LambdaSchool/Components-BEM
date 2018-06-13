let button = document.getElementsByClassName("btn");
button = button[0];
console.log(button);
let clickedBefore= false;

function clicked() {

	let btnDiv = document.getElementsByClassName("btn_div")[0];
	let button = document.getElementsByClassName("drop_down")[0];

	if(clickedBefore === false){
		let lambdaDiv = document.createElement("div");
		let googleDiv= document.createElement("div");
		let mdnDiv= document.createElement("div");

		lambdaDiv.classList.add("box");
		googleDiv.classList.add("box");
		mdnDiv.classList.add("box");

		let lambda = document.createTextNode("Lambda");
		let google= document.createTextNode("Google");
		let mdn= document.createTextNode("MDN");

		lambdaDiv.appendChild(lambda);
		googleDiv.appendChild(google);
		mdnDiv.appendChild(mdn);

		btnDiv.appendChild(lambdaDiv);
		btnDiv.appendChild(googleDiv);
		btnDiv.appendChild(mdnDiv);

		clickedBefore = true;
	}
	else{
		btnDiv.innerHTML = "";
		btnDiv.appendChild(button);
		clickedBefore = false;
	}
};
button.addEventListener("mousedown", function() {
	clicked();
});


