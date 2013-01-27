#pragma strict
var fuelDestroyTimer : int = 10;
var energyFromFuel : int = 50;

function Start () {
	Destroy(gameObject, fuelDestroyTimer);
}

function Update () {
	//do fuel contact things!
}

 function OnTriggerEnter(col:Collider){        
 	if(col.GetType().ToString() == "UnityEngine.CharacterController"){ 
 		RobotFire.energyLevel += energyFromFuel;
 		Destroy(gameObject);             
 	}
 }