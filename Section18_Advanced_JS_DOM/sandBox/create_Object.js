function houseKeeper(name, age, workPermission, languages){
	this.name = name;
	this.age = age;
	this.workPermission = workPermission;
	this.languages = languages;
	this.clearningFunction = function(){
		alert("Clearning in progress...");
	}
}

var hk1 = new houseKeeper("Anna", 25, true, ["English", "Spane"]);