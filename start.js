var gApp = null;
var gTimer = null;
var HIDETIME = 5000;//ms
var showApp = function() {
	if(gApp == null) {
		gApp = document.getElementById('appmgr').getOwnerApplication(document);
	}
	var channelC = gApp.ApplicationPrivateData.currentChannel;
	myKeyset = gApp.private.keyset;
	
	if(ChannelC.channelType == 0) {// video

		myKeyset.setValue(myKeyset.RED);
		document.onkeypress = onHiddenKeyPress;
		gTimer = setTimeout( function(){ gApp.hide();},HIDETIME);	
		gApp.show();	
	} else// radio/data
	{
		myKeyset.setValue(myKeyset.NAVIGATION);
		menu.show();
	}
	
	
};


var setFirefoxMode = function(channel) {
	gApp = {

		private : {
			currentChannel : channel,
			keyset : {
				RED : 0,
				GREEN : 0,
				YELLOW : 0,
				BLUE : 0,
				NAVIGATION : 0,
				setValue : function() {
				}
			},
		},
		show : function() {
			console.log('show');
			document.body.style.visibility = "visible";
			gApp.visible=true;
		},
		hide : function() {
			console.log('show');
			document.body.style.visibility = "hidden";
			gApp.visible=false;
		},
	}; VK_RED = 82, VK_GREEN = 71, VK_YELLOW = 89, VK_BLUE = 66;    // 'r','g','y','b'
	VK_UP = 38, VK_DOWN = 40, VK_LEFT = 37, VK_RIGHT = 39; VK_ENTER = 13, VK_BACK = 8; VK_0 = 48, VK_1 = 49, VK_2 = 50, VK_3 = 51, VK_4 = 52, VK_5 = 53, VK_6 = 54, VK_7 = 55, VK_8 = 56, VK_9 = 57; VK_STOP = 83, VK_PLAY = 80, VK_PAUSE = 65, VK_PLAY_PAUSE = 32;
}



function onHiddenKeyPress(e){
	menu.show();
	$("#tvInfo").hide();
}
