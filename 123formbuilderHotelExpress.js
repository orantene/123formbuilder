function joinValues() {
setTimeout(function() {
	var valueOne = loader.engine.document.getElementById(108817871).getProperty('value.value');
	var valueTwo = loader.engine.document.getElementById(108818319).getProperty('value.value');
	var valueThree = loader.engine.document.getElementById(108821457).getProperty('value.value'); //repeat the last line as many more times as needed ...

const joinedValues = valueOne + ": " + valueTwo + " - " + valueThree ;
		   loader.engine.document.getElementById(108821728).setValue(({"value": joinedValues}));
}, 60);
}

window.onchange = joinValues;
window.onload = joinValues;



