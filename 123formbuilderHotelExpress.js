function joinValues() {
setTimeout(function() {
	var valueOne = loader.engine.document.getElementById(108817849).getProperty('value.value');
	var valueTwo = loader.engine.document.getElementById(108817871).getProperty('value.value');
	var valueThree = loader.engine.document.getElementById(108818319).getProperty('value.value');

	let hotelname = loader.engine.document.getElementById(108818319).getProperty('value.value');
    document.querySelector("blockquote h5").innerHTML = "CLIENT:" + hotelname;

    let dateDay = document.querySelector("[data-ui-role='ui-element'] #date-00000052-day font font").innerText;
    let dateMonth = document.querySelector("[data-ui-role='ui-element'] #date-00000052-month font font").innerText;
    let dateYear = document.querySelector("[data-ui-role='ui-element'] #date-00000052-year font font").innerText;
    document.querySelector("blockquote h3").innerHTML = dateDay +'/'+ dateMonth +'/'+ dateYear;
    
    let folionum = loader.engine.document.getElementById(108817849).getProperty('value.value');
    document.querySelector("blockquote h4").innerHTML = "FOLIO: #" + folionum;
    
    
const joinedValues = valueOne + ": " + valueTwo + " - " + valueThree ;
		   loader.engine.document.getElementById(108821728).setValue(({"value": joinedValues}));
}, 60);
}

window.onchange = joinValues;
window.onload = joinValues;

