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
