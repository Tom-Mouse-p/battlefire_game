
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
			
				document.getElementById('enemy_health_bar').style.width = width;

alert("you won");

gameload();

}
else{
				document.getElementById('enemy_health').value = after_health;
				
				var width= `${after_health}px`;
			
				document.getElementById('enemy_health_bar').style.width = width;
}



document.getElementById("attack").disabled = true;

document.getElementById("heal").disabled = true;

window.setTimeout("enemy_turn()",2000);
});










document.getElementById("heal").addEventListener("click", function() {

var player_health = document.getElementById('player_health'). value;

var num = parseFloat(player_health);

var after_health = num + 10;

console.log(after_health);

				document.getElementById('player_health').value = after_health;
				
			var width = `${after_health}px`;
			
				document.getElementById('player_health_bar').style.width = width;






document.getElementById("attack").disabled = true;

document.getElementById("heal").disabled = true;

window.setTimeout("enemy_turn()",2000);
});














function enemy_turn() {

        const tactic = [
        				"attack", "attack", "heal",
        ]

const random = Math.floor(Math.random() * tactic.length);
        
        
        if(tactic[random] == "attack"){
        
        
        
        				var player_health = document.getElementById('player_health'). value;

var after_phealth = player_health - 15;

if( after_phealth <= 0){
				document.getElementById('player_health').value = after_phealth;
				

			var width = `${after_phealth}px`;
			

				document.getElementById('player_health_bar').style.width = width;

alert("you loose");

gameload();

}
else{
				document.getElementById('player_health').value = after_phealth;
				
				var width = `${after_phealth}px`;
			
			
				document.getElementById('player_health_bar').style.width = width;

}


        }
        else if(tactic[random] == "heal"){
        				var enemy_health = document.getElementById('enemy_health'). value;

var num = parseFloat(enemy_health);

var after_health = num + 5;
console.log(after_health);

				document.getElementById('enemy_health').value = after_health;
				
			var width = `${after_health}px`;
			
				document.getElementById('enemy_health_bar').style.width = width;
        }
        else{
        				console.log("something went wrong");
        }
        document.getElementById("attack").disabled = false;
        document.getElementById("heal").disabled = false;
        
}
