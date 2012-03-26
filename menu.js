



menu = {
	STATE_CONNECTING:0,
	STATE_SELECTING:1,
	STATE_ADV:2,
		
	stateConnecting:{
		show:function(){
		if(dataNotReceived)
	    $("#menu").show();
		$("#tvInfo").hide();
		},
		hide:function(){
		if(dataNotReceived)
	    $("#menu").show();
		$("#tvInfo").hide();
		},
		onKeyPress:function(){
		if(dataNotReceived)
	    $("#menu").show();
		$("#tvInfo").hide();
		}
				
	},
	
	stateConnecting:{
		show:function(){
		if(dataNotReceived)
	    $("#menu").show();
		$("#tvInfo").hide();
		},
		hide:function(){
		if(dataNotReceived)
	    $("#menu").show();
		$("#tvInfo").hide();
		},
		onKeyPress:function(){
		if(dataNotReceived)
	    $("#menu").show();
		$("#tvInfo").hide();
		}
				
	}
	show: menu.stateConnecting.show,
	hide:function(){},
	onKeyPress:function(){
		switch (which){
			case VK_RED:
			    $("#menu").hide();
				$("#tvInfo").show();
		}
	},
	
}
