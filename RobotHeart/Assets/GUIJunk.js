#pragma strict
var fieldTimer : float = 5;
var spawns : GameObject[];


function Start () {

}

function Update () {
	//MODULO 4 - 9 seconds a seed or a fuel appears in X/Z coord
	if(fieldTimer <=0){
		Spawn();
		fieldTimer = Random.Range(7, 9);
	}
	else{
		fieldTimer -= Time.deltaTime;
	}

}

function Spawn(){
	var spawnQue : int = Random.Range(0, 2);
	Instantiate(spawns[spawnQue], Vector3(Random.Range(-9, 9),-3,Random.Range(-2, 7)), transform.rotation);
}

function OnGUI(){
	GUILayout.Button ("Heart Level" + " " + Mathf.Floor(RobotFire.heartLevel));
	GUILayout.Button ("Energy Level" + " " + Mathf.Floor(RobotFire.energyLevel));
	GUILayout.Button ("Seeds" + " " + Mathf.Floor(RobotFire.seedCount));
}