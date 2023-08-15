(function(){
window.addEventListener('load', function(){
	var sourceControlId = 108817871, /** ID OF THE SENDER CONTROL **/
	targetControlId = 108821457, /** ID OF THE RECEIVER CONTROL **/

	sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),
	targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

	sourceControlInstance.on('value-change', function(){
		targetControlInstance.setValue( sourceControlInstance.getValue() );
	});

	targetControlInstance.setValue( sourceControlInstance.getValue() );
});
})();


(function(){
window.addEventListener('load', function(){
	var sourceControlId = 108818319, /** THE ID OF THE SENDER CONTROL */
	targetControlId = 108821457, /** THE ID OF THE RECEIVER CONTROL **/

	domAbstractionLayer = loader.getDOMAbstractionLayer(),
	sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);

	sourceControlInstance.on('value-change', function(){
		domAbstractionLayer.setControlValueById(
		String(targetControlId),
		domAbstractionLayer.getControlValueById(
		String(sourceControlId)
		)
		);
	});

	domAbstractionLayer.setControlValueById(
	String(targetControlId),
	domAbstractionLayer.getControlValueById(
	String(sourceControlId)
	)

	);
});
})();


function joinValues() {
setTimeout(function() {
	var valueOne = loader.engine.document.getElementById(108817871).getProperty('value.value');
	var valueTwo = loader.engine.document.getElementById(108818319).getProperty('value.value');
	var valueThree = loader.engine.document.getElementById(108821457).getProperty('value.value'); //repeat the last line as many more times as needed ...

const joinedValues = valueOne + ": " + valueTwo + " - " + valueThree ;
		   loader.engine.document.getElementById(108821728).setValue(({"value": joinedValues}));
}, 1000);
}

window.onchange = joinValues;
