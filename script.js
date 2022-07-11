//Load Function
const none = "none";
const flex = "flex";
const pldmg = 100;
const plhel = 15;
const endmg = 16;
const enhel = 12;
const plabl = 18;
var player_ablity = document.getElementById('player_ablity').value; 

player_ablity.value = 0;

function reset_super() {
			 player_ablity = 0;
			 document.getElementById("ablity").style.border = "5px solid lightblue";
}


document.addEventListener("load", gameload());

function gameload() {
			
			reset_super();			
			
	document.getElementById("ablity").disabled = true;
				document.getElementById('player_health'). value = 100;
document.getElementById('enemy_health').value = 100;
				document.getElementById("player_health_bar").style.width = "100%";
				document.getElementById("enemy_health_bar").style.width = "100%";
				
				document.getElementById('won').style.display = none;
				
				window.setTimeout("enable()",2000);
}


//enable & disable functions

function enable(){
				document.getElementById("attack").disabled = false;

document.getElementById("heal").disabled = false;
}



function disable() {
				document.getElementById("attack").disabled = true;

document.getElementById("heal").disabled = true;
}


//Attack function

document.getElementById("attack").addEventListener("click", () => {



var enemy_health = document.getElementById('enemy_health').value;

var after_health = enemy_health - pldmg;

if( after_health <= 0){
				document.getElementById('enemy_health').value = after_health;
				
			var width = `${after_health}px`;
			
				document.getElementById('enemy_health_bar').style.width = width;

document.getElementById("attack").disabled = true;

document.getElementById("heal").disabled = true;
document.getElementById('won').style.display = flex;

alert("you won");

window.setTimeout("gameload()",4000);

}
else{
  	document.getElementById('enemy_health').value = after_health;
				
				var width= `${after_health}px`;
			
				document.getElementById('enemy_health_bar').style.width = width;
				
				
  if (player_ablity <= 4) {
  				player_ablity = player_ablity + 1;
  }
  else {
  				
  }
			
 switch (player_ablity) {
 case 0:document.getElementById("ablity").style.border = "5px solid lightblue";
 break;
  case 1:
    document.getElementById("ablity").style.borderRight = "5px solid blue";
    break;
  case 2:
    document.getElementById("ablity").style.borderRight = "5px solid blue";
document.getElementById("ablity").style.borderBottom = "5px solid blue";
    break;
    case 3:
    document.getElementById("ablity").style.borderRight = "5px solid blue";
document.getElementById("ablity").style.borderBottom = "5px solid blue";
document.getElementById("ablity").style.borderLeft = "5px solid blue";
break;
case 4:
document.getElementById("ablity").style.border = "5px solid blue";

document.getElementById("ablity").disabled = false;

break;
  default:
    text = "No value found";
}
	 
	  	document.getElementById("attack").disabled = true;

document.getElementById("heal").disabled = true;


				window.setTimeout("enemy_turn()",2000);
}



});








//Player Heal Function

document.getElementById("heal").addEventListener("click", function() {

var player_health = document.getElementById('player_health'). value;

var num = parseFloat(player_health);

var after_health = num + plhel;


				document.getElementById('player_health').value = after_health;
				
			var width = `${after_health}px`;
			
				document.getElementById('player_health_bar').style.width = width;


document.getElementById("attack").disabled = true;

document.getElementById("heal").disabled = true;

window.setTimeout("enemy_turn()",2000);
});




// Player Ablity 


document.getElementById("ablity").addEventListener("click", ()=> {
			
			var enemy_health = document.getElementById('enemy_health').value;

var after_health = enemy_health - plabl;

if( after_health <= 0){
				document.getElementById('enemy_health').value = after_health;
				
			var width = `${after_health}px`;
			
				document.getElementById('enemy_health_bar').style.width = width;

disable();


document.getElementById('won').style.display = flex;
alert("you won");
window.setTimeout("gameload()",2000);

}
else{
  	document.getElementById('enemy_health').value = after_health;
				
				var width= `${after_health}px`;
			
				document.getElementById('enemy_health_bar').style.width = width;
				

	document.getElementById("ablity").disabled = true;
				}
				
				reset_super();
				// document.getElementById("ablity").style.border = "5px solid blue";
});










//Enemy Functions.


function enemy_turn() {

        const tactic = [
        				"attack", "attack", "attack", "heal",
        ]

const random = Math.floor(Math.random() * tactic.length);
        
        
        if(tactic[random] == "attack"){
        
        
        
        				var player_health = document.getElementById('player_health'). value;

var after_phealth = player_health - endmg;

if( after_phealth <= 0){
				document.getElementById('player_health').value = after_phealth;
				

			var width = `${after_phealth}px`;
			

				document.getElementById('player_health_bar').style.width = width;

disable();

alert("you lost");


document.getElementById('won').style.display = flex;
window.setTimeout("gameload()",4000);

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

var after_health = num + enhel;

				document.getElementById('enemy_health').value = after_health;
				
			var width = `${after_health}px`;
			
				document.getElementById('enemy_health_bar').style.width = width;
        }
        else{
        				console.log("something went wrong");
        }
        enable();
        
}
