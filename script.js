function resetSign(){
	var signData = ['greeting', 'userSign', 'tiles', 'subTotal', 'shipping', 'grandTotal']
	
	for (var i=0; i<signData.length; i++){
		setTextContentById(signData[i], '');

	}
	sign='';
	calcSign();
	setSign();
}
// Create variables for the welcome message
var greeting = '[not initialized]'; 
var name = '[not initialized]';
var message = '[not initialized]';

// Concatenate the three variables above to create the welcome message
var welcome;
// Create variables to hold details about the sign
var sign = '[not initialized]';
var tiles, subTotal, shipping, grandTotal;
function calcSign(){
	tiles = sign.length;
	subTotal = tiles * 5;
	shipping = 7;
	grandTotal = subTotal + shipping;
}
function initiateVars() {
  greeting = 'Hi ';
	name = 'Darian!';
	message = ' Check order';
	sign = 'JS';
	welcome = greeting + name + message;
	calcSign();
}
function setTextContentById(getId, setMsg) {
    // Get the element that has an id of greeting
    var el = document.getElementById(getId);
    // Replace the content of that element with the personalized welcome message
    el.textContent = setMsg;
} 
(function setSign() {
initiateVars();
setTextContentById('greeting', welcome);
setTextContentById('userSign', sign);
setTextContentById('tiles', tiles);
setTextContentById('subTotal', '$' + subTotal);
setTextContentById('shipping', '$' + shipping);
setTextContentById('grandTotal', '$' + grandTotal);
})();

setSign();
resetSign();

var el = document.getElementById('resetButton');