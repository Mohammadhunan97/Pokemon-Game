function checkEnemyHealth(){
	if(enemy_health_points < 0){
		alert('you win');

		let randpoke = getRand(10,0);
		$('#enemyname').html(pokemon[randpoke][0]);
		$('#enemy_img').attr('src',pokemon[randpoke][1]);
		enemy_health_points = 100;
		$('#enemyhealth').html('Health: ' + enemy_health_points);

	}
}