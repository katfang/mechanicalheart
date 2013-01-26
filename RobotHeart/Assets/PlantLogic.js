#pragma strict
var counter : int = 0;
var lastTime : float = 0;
var robot : Transform;


function Start () {
	
}

function Update () {
	var heart : RobotFire = robot.GetComponent(RobotFire);
	
	if (lastTime > 2){
		lastTime = 0;
		RobotFire.heartLevel += 1;
		
	}
	else{
		lastTime += 1 * Time.deltaTime;
		}
}

function OnCollisionStay(collision: Collision) {
	print ("!!!");
 	if (collision.gameObject.tag == "InLight"){
 		
 		print("YAYA");
 	}

 }