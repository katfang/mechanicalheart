#pragma strict
var lifetime : int = 5;
var plant : GameObject;
function Start () {
	Destroy(gameObject, lifetime);
	Instantiate(plant, Vector3(transform.position.x, -3.115403, 0), transform.rotation);
}

function Update () {
		
}