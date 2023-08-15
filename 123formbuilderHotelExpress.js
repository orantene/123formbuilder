function joinValues() {
setTimeout(function() {
	var valueOne = loader.engine.document.getElementById(108817849).getProperty('value.value');
	var valueTwo = loader.engine.document.getElementById(108817871).getProperty('value.value');
	var valueThree = loader.engine.document.getElementById(108818319).getProperty('value.value');

const joinedValues = valueOne + ": " + valueTwo + " - " + valueThree ;
		   loader.engine.document.getElementById(108821728).setValue(({"value": joinedValues}));
}, 60);
}

window.onchange = joinValues;
window.onload = joinValues;

    let hotelname = loader.engine.document.getElementById(108818319).getProperty('value.value');
    document.querySelector("blockquote h5").innerHTML = hotelname;
    let folionum = loader.engine.document.getElementById(108817871).getProperty('value.value');
    document.querySelector("blockquote h4").innerHTML = folionum;
