function joinValues() {
setTimeout(function() {


	let hotelname = loader.engine.document.getElementById(108818319).getProperty('value.value');
    document.querySelector(".hotel-name p").innerHTML = "CLIENT: " + hotelname;

    let dateDay = document.querySelector("[data-ui-role='ui-element'] #date-00000052-day").innerText;
    let dateMonth = document.querySelector("[data-ui-role='ui-element'] #date-00000052-month").innerText;
    let dateYear = document.querySelector("[data-ui-role='ui-element'] #date-00000052-year").innerText;
    document.querySelector(".date p").innerHTML = dateDay +'/'+ dateMonth +'/'+ dateYear;
    
    let folionum = loader.engine.document.getElementById(108817871).getProperty('value.value');
    document.querySelector(".folio-number p").innerHTML = "FOLIO: #" + folionum;
    

	var valueOne = loader.engine.document.getElementById(108817507).getProperty('value.value');
	var valueTwo = loader.engine.document.getElementById(108817508).getProperty('value.value');
	var valueThree = loader.engine.document.getElementById(108817656).getProperty('value.value');
	const joinedValues = valueOne + ": " + valueTwo + " | " + valueThree ;
		   loader.engine.document.getElementById("108821728").setValue(({"value": joinedValues}));
}, 60);
}

window.onchange = joinValues;
window.onload = joinValues;


