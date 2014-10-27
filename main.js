//define a default profile object
var defaultProfile = {
	name: "DEFAULT_NAME",
	password: "DEFAULT_PASSWORD"
}

//create the profiles array with the default profile already in place
var profiles = [defaultProfile];

/**
 * Save a profile to the profiles array
 */
function save() {
	//save the things to a profile
	//push the proifile to the array
	var newprofile = {
		name: $('#name').val(),
		password: $('#password').val()
	}

	profiles.push(newprofile);
	console.log("new profile logged");
}

/**
 * Print the profiles array to the console
 */
function printList() {
	console.log(profiles);
}

function list() {
	console.log("LIST");
	//nothing
}

/**
 * delete a profile from the array
 */
function deleteProfile() {
	//get the values from the input fields
	var name = $('#searchName').val();
	var password = $('#searchPassword').val();

	var deleted = 0;

	//search through the elements of the array for the one we want to delete
	for (var i = 0; i < profiles.length; i++) {
		if (profiles[i].name === name
			&& profiles[i].password === password) {
			//delete the profile
			profiles.splice(i, 1);
			i--;
			deleted++;
		}
	}

	//alert the user the profile(s) have been deleted.
	if (deleted > 0) {
		alert(deleted + " profile(s) deleted");
	} else {
		alert("Profile not found");
	}
}