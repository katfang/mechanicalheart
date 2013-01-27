#pragma strict
var beamOfLight : GameObject;
var winBox : GameObject;
var loseBox : GameObject;
static var heartLevel : float = 20;
static var energyLevel : float = 80;
static var seedCount : int = 0;
var lifeLossRate : float = 1;
var energyLossRate : float = 0.2;
var won : boolean = false;
var lost : boolean = false;


function Start (){
	heartLevel = 20;
}

function Update () {
	if(!won){
		energyLevel -= (energyLossRate * Time.deltaTime);
		heartLevel -= (lifeLossRate * Time.deltaTime); 
	}
	if (transform.position.x >10 || transform.position.x < -10){
		transform.position.x *= -0.9;
	
	}
	if (Input.GetButtonDown("Jump") && energyLevel > 5 && !won && seedCount >= 1){
		Instantiate(beamOfLight, Vector3(transform.position.x,-1.2,transform.position.z), transform.rotation);
		energyLevel -= 5;
		seedCount -= 1;
	} 
	if (Input.GetButton("Horizontal")  && !won){
		energyLevel -= 2 * Time.deltaTime;
	}
	if (energyLevel <= 0 || heartLevel <= 0 && !lost){
		YouFailed();
		lost = true;
	}
	if (heartLevel >=50 && !won){
		YouWin();
		won = true;
	}
	//print("X: " + transform.position.x + " " + "Z: " + transform.position.z);
}

function YouFailed(){
	Instantiate(loseBox, Vector3(transform.position.x,-2.3,transform.position.z), transform.rotation);	
	Destroy(gameObject);
	//print("you lose");
}

function YouWin(){
	Instantiate(winBox, Vector3(transform.position.x,3,transform.position.z), transform.rotation);
	//print("You Win");
}


