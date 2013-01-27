#pragma strict
var counter : int = 0;
var lastTime : float = 0;
var robot : Transform;
var lifetime : int = 5;


function Start () {
Destroy(gameObject, lifetime);


	
}

function Update () {
	if (lastTime > 1){
		lastTime = 0;
		RobotFire.heartLevel += 1;
	}
	else{
		lastTime += 1 * Time.deltaTime;
		}
}

function OnTriggerEnter(foo:Collider){

}

function OnCollisionEnter(foo:Collision){

}

function OnTriggerStay(other : Collider) {

}