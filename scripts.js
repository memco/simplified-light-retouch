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
	var channelLinks = document.getElementsByClassName("channel");
	for(i=0,len=channelLinks.length;i<len;i++) {
		channelLinks[i].addEventListener('click',Textual.channelNameDoubleClicked);
	}
}

Textual.newMessagePostedToView = function() {
	addChannelSingleCLickListener();
}