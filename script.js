
document.addEventListener("load", gameload());

function gameload() {
				document.getElementById('player_health'). value = 100;
document.getElementById('enemy_health').value = 100;
				document.getElementById("player_health_bar").style.width = "100%";
				document.getElementById("enemy_health_bar").style.width = "100%";
				
}





document.getElementById("attack").addEventListener("click", function() {

var enemy_health = document.getElementById('enemy_health'). value;

var after_health = enemy_health - 10;

if( after_health <= 0){
				document.getElementById('enemy_health').value = after_health;
				
			var width = `${after_health}px`;
			
			console.log(width);
				document.getElementById('enemy_health_bar').style.width = width;

alert("you won");

gameload();

}
else{
				document.getElementById('enemy_health').value = after_health;
				
				var width= `${after_health}px`;
			
			console.log(width);
				document.getElementById('enemy_health_bar').style.width = width;
}



document.getElementById("attack").disabled = true;

document.getElementById("heal").disabled = true;

enemy_turn();
});










document.getElementById("heal").addEventListener("click", function() {

var player_health = document.getElementById('player_health'). value;

var after_health = player_health + 5;

if( after_health <= 0){
				document.getElementById('enemy_health').value = after_health;
				
			var width = `${after_health}px`;
			
			console.log(width);
				document.getElementById('enemy_health_bar').style.width = width;

alert("you won");

gameload();

}
else{
				document.getElementById('enemy_health').value = after_health;
				
				var width= `${after_health}px`;
			
			console.log(width);
				document.getElementById('enemy_health_bar').style.width = width;
}



document.getElementById("attack").disabled = true;

document.getElementById("heal").disabled = true;

enemy_turn();
});














function enemy_turn() {

        const tactic = [
        				"attack", "attack", "heal", "attack"
        ]

const random = Math.floor(Math.random() * tactic.length);

console.log(random, tactic[random]);
        
        
        if(tactic[random] == "attack"){
        
        
        
        				var player_health = document.getElementById('player_health'). value;

var after_phealth = player_health - 15;

if( after_phealth <= 0){
				document.getElementById('player_health').value = after_phealth;
				

			var width = `${after_phealth}px`;
			
			console.log(width);
				document.getElementById('player_health_bar').style.width = width;

alert("you loose");

gameload();

}
else{
				document.getElementById('player_health').value = after_phealth;
				
				var width = `${after_phealth}px`;
			
			console.log(width);
				document.getElementById('player_health_bar').style.width = width;

}


        }
        else if(tactic[random] == "heal"){
        				console.log("healed")
        }
        else{
        				console.log("something went wrong");
        }
        document.getElementById("attack").disabled = false;
        document.getElementById("heal").disabled = false;
        
}
