var seedDestroyTimer : int = 10;
var seedsFromSeed : int = 1;

function Start () {
	Destroy(gameObject, seedDestroyTimer);
}

function Update () {
	//do seed contact things!
}

 function OnTriggerEnter(col:Collider){        
 	if(col.GetType().ToString() == "UnityEngine.CharacterController"){ 
 		RobotFire.seedCount += seedsFromSeed;
 		Destroy(gameObject);             
 	}
 }