const findTheOldest = function(people) {
    let oldest = people[0];
	const currentYear = new Date().getFullYear();
	if	(people[0].yearOfDeath===undefined){
		people[0].yearOfDeath = currentYear;
	}
	let age = people[0].yearOfDeath - people[0].yearOfBirth;
	for(let i = 0; i<people.length; i++){
		if ((people[i].yearOfDeath - people[i].yearOfBirth) > age){
			oldest = people[i];
			age = people[i].yearOfDeath - people[i].yearOfBirth;
		}
	}
	return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
