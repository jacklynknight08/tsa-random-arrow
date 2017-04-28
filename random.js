console.log("Arrow Exercise");

window.addEventListener("click", function(event){
	randomNumber();
});

var bodyDiv = document.getElementById("body");
var arrowDiv = document.getElementById("arrow");


function randomNumber(number){
	var getRandomNumber =  Math.floor((Math.random() * 10) + 1);
	console.log(getRandomNumber);
	if(getRandomNumber <= 5){
		arrowDiv.innerHTML = `<div><img src="img/leftarrow.png"></div>`;
	}else if(getRandomNumber > 5) {
		arrowDiv.innerHTML = `<div><img src="img/rightarrow.png"></div>`;
	}
}

arrowDiv.addEventListener("click", randomNumber);