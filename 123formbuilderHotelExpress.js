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
