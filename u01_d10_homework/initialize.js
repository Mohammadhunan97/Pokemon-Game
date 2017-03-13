
	$('#pikachuhealth').html('Health : ' + pikachuhealth);

	var pokemon = [
		['Voltorb','images/voltorb.png',100],
		['Charizard','images/charizard.png',200],
		['Gyarados','images/gyarados.png',125],
		['Mew','images/mew.png',75],
		['Geodude','images/geodude.png',90],
		['Snorlax','images/snorlax.png',110],
		['Kabutops','images/kabutops.png',95],
		['Eevee','images/eevee.png',60],
		['Beedrill','images/beedrill.png',70],
		['Magikarp','images/magikarp.gif',40],
		['Gastly','images/gastly.png',50]
	];
/*
-You start with 100 health.

-An enemy gets randomly selected on start.

-Clicking the buttons either makes you attack, or heals you.
*/
let randpoke = getRand(10,0);
let enemy_health_points = pokemon[randpoke][2];
