/* position_horizontal = x position 
position_vertical = y position
*/
function overlap(){
	if((position_vertical<=700&&position_vertical>=300)&&(position_horizontal>=400&&position_horizontal<=800)){
		colliding = true;
		console.log('colliding is ' + colliding);
		battle();
	}else{
		colliding = false;
	}
}

function battle(){
	let chance_to_battle = getRand(100,0);   //1% chance to battle inside the grass field
	console.log(chance_to_battle);
	if(chance_to_battle<=10){
		alert('A wild pokemon has appeared...');
		setTimeout(function(){
			window.location.href = "battlescene/index.html";
		},1000);
	}
}
