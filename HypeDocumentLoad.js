/*!
Hype Document Load 1.0.0
copyright (c) 2024 Max Ziebell, (https://maxziebell.de). MIT-license
*/
/*
* Version-History
* 1.0.0 Initial release under MIT-license
*/
if("HypeDocumentLoad" in window === false) window['HypeDocumentLoad'] = (function () {
	
	function HypeDocumentLoad(hypeDocument, element, event) {
	   if(hypeDocument.functions().HypeDocumentLoad) {
		   hypeDocument.functions().HypeDocumentLoad(hypeDocument, element, event);
	   }
	}
	
	if("HYPE_eventListeners" in window === false) { window.HYPE_eventListeners = Array(); }
	window.HYPE_eventListeners.push({"type":"HypeDocumentLoad", "callback": HypeDocumentLoad});
	
	return {
		version: '1.0.0',
	};
})();
