#pragma strict
var beamOfLight : GameObject;
static var heartLevel : int = 20;
var energyLevel : float = 50;

function Start (){
	heartLevel = 20;
}

function Update () {
	energyLevel -= 0.2 * Time.deltaTime;
	if (Input.GetButtonDown("Jump") && energyLevel > 5){
		Instantiate(beamOfLight, Vector3(transform.position.x,-2,0), transform.rotation);
		energyLevel -= 5;
	} 
	if (Input.GetButton("Horizontal")){
		energyLevel -= 1 * Time.deltaTime;
	}
	if (energyLevel <= 0 || heartLevel <= 0){
		YouFailed();
	}
	if (heartLevel >=50 ){
		YouWin();
	}
	//print(heartLevel);
}

function OnTriggerEnter(foo:Collider){
	print("TRIGGER ENTER");
}

function OnCollisionEnter(foo:Collision){
	print("COLLISION ENTER");
}

function YouFailed(){
	print("you lose");
}

function YouWin(){
	print("You Win");
}
