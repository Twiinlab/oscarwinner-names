var uniqueRandomArray = require('unique-random-array');
var oscarWinnerNames = require('./oscarwinner-names.json');
var getRandomItem = uniqueRandomArray(oscarWinnerNames);

module.exports = {
	all: oscarWinnerNames,
	random: getRandom
};

function getRandom(number){
	if(number === undefined){
		return getRandomItem();
	} else {
		var randomItems = [];
		for(var i = 0; i < number ; i++){
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
};