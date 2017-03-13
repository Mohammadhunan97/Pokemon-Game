window.onload = function(){
	$('body').keydown(function(e){
		/* 37 is left || 38 is up || 39 is right || 40 is down */
		if(e.keyCode === 39){
			position_horizontal += 10;
			changeSprite(39);
			moveHorizontal();
			checkPos();
			overlap();

		}
		if(e.keyCode === 37){
			position_horizontal -= 10;
			changeSprite(37);
			moveHorizontal();
			checkPos();
			overlap();
		}
		if(e.keyCode === 38){
			position_vertical -= 10; //minus even though this is up because the top starts at 0
			changeSprite(38);
			moveVertical();
			checkPos();
			overlap();
		}
		if(e.keyCode === 40){
			position_vertical += 10; //minus even though this is up because the top starts at 0
			changeSprite(40);
			moveVertical();
			checkPos();
			overlap();
		}


	});

}
function moveHorizontal(){
	$('#player').css('left', position_horizontal);
}
function moveVertical(){
	$('#player').css('top', position_vertical);
}
function changeSprite(keyCode){
	if(keyCode === 37) $('#player').attr('class',' leftplayer');
	if(keyCode === 39) $('#player').attr('class',' rightplayer');
	if(keyCode === 38) $('#player').attr('class',' upplayer');
	if(keyCode === 40) $('#player').attr('class',' downplayer');
	
}
function checkPos(){
	console.log('Horizontal x-axis position is ' + position_horizontal);
	console.log('Vertical y-axis position is ' + position_vertical);
}