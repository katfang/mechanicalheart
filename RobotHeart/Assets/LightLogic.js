#pragma strict
var lifetime : int = 5;
var plant : GameObject;

function Start () {
	Destroy(gameObject, lifetime);
	Instantiate(plant, Vector3(transform.position.x, -3.115403, transform.position.z), transform.rotation);
}

function Update () {
	transform.position = Vector3(transform.position.x,transform.position.y, transform.position.z);
			
}