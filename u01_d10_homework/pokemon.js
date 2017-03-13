let pikachuhealth = 100;
$('#attack_btn').hide();
$('#heal_btn').hide();
$('#pikachuhealth').html('Health : ' + pikachuhealth);
(function(){

	var chooseEnemy = function(){
		$('#enemyname').html(pokemon[randpoke][0]);
		$('#enemy_img').attr('src',pokemon[randpoke][1]);
		$('#enemyhealth').html('Health: ' + enemy_health_points);
	}
	chooseEnemy();

	function enemyAttack(){
		let enemy_attack_strength = getRand(30,5);
		let chance_to_miss = getRand(100,0);
			if(chance_to_miss>10){
			pikachuhealth -= enemy_attack_strength;
			$('#pikachuhealth').html('Health : ' + pikachuhealth);
			$('#state_text').html('pikachu lost ' + enemy_attack_strength + ' health');
			setTimeout(function(){
				$('#state_text').html(' ');
			},1000);
			}else{
				$('#state_text').html('enemy missed');
			}
		checkPikachuHealth();
	}

	
	$('#state_text').html('enemy is attacking...');

	setTimeout(function(){
		enemyAttack();
	},2000);


	var heal = function(){
		if(pikachuhealth >= 75) pikachuhealth = 100;
		if(pikachuhealth >= 51 && pikachuhealth <=74) pikachuhealth += getRand(26,25)
		if(pikachuhealth <= 50) pikachuhealth += getRand(50,25);
	$('#pikachuhealth').html('Health : ' + pikachuhealth);
	setTimeout(function(){
		$('#state_text').html('enemy is attacking...');
	},500);
	setTimeout(function(){
		enemyAttack();
	},2000);
	
	}	//end of heal function

	function checkPikachuHealth(){
		if(pikachuhealth < 0){
			alert('you lose');
			alert('game restarting...');
			pikachuhealth = 100;
			$('#pikachuhealth').html('Health : ' + pikachuhealth);
		}else{
			setTimeout(function(){
			$('#attack_btn').show();
			$('#heal_btn').show();
			},500);

		}
	}

		
		var youAttack = function(){
		let pikachu_chance_to_miss = getRand(100,0);
		let lose_health = getRand(30,5);
		if(pikachu_chance_to_miss>10){
		enemy_health_points -= lose_health
		$('#enemyhealth').html('Health: ' + enemy_health_points);
		$('#state_text').html('You did ' + lose_health + ' damage on the enemy');
		}else{
			alert('you missed');
		}
		checkEnemyHealth();
		setTimeout(function(){
		$('#state_text').html('enemy is attacking...');
		},500);
		setTimeout(function(){
		enemyAttack();
		},3000);
	
		} 



	var addEventListeners = function(){
	//add the click events on the attak and heal buttons.
	$('#attack_btn').click(function(){
		youAttack();
		});

	$('#heal_btn').click(function(){
		heal(); //I changed it to heal becuase doHeal is hidden somewhere that I can't find and it's causing problems 
		});
	}

	$(document).ready(function(){
		addEventListeners();
	})

})();
