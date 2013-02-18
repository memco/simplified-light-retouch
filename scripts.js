/* Defined in: "Textual.app -> Contents -> Resources -> JavaScript -> API -> core.js" */

Textual.viewFinishedLoading = function()
{
	Textual.fadeInLoadingScreen(1.00, 0.95);

	setTimeout(function() {
		Textual.scrollToBottomOfView()
	}, 500);

	addChannelSingleCLickListener();
}

Textual.viewFinishedReload = function()
{
	Textual.viewFinishedLoading();
}

function addChannelSingleCLickListener() {
	// Allow opening channels with a single click
	document.addEventListener('click',function(){
		if(event.target.className == "channel") {
			Textual.channelNameDoubleClicked();
		}
	});
}