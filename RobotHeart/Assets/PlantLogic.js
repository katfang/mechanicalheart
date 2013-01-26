#pragma strict
var counter : int = 0;
var lastTime : float = 0;
var robot : Transform;
var light : Transform;


function Start () {
	//var player = GameObject.FindGameObjectWithTag("Player").transform; 
    //Physics.IgnoreCollision(player.collider, collider);
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
/** /
function OnTriggerEnter(foo:Collider){
	
	print("TRIGGER ENTER");
}

function OnCollisionEnter(foo:Collision){
	print("COLLISION ENTER");
}/**/

function OnTriggerStay(other : Collider) {
	//print(other.GetType().ToString());
	//print("found it");
}