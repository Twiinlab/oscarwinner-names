var uniqueRandomArray = require('unique-random-array');
var oscarWinnerNames = require('./oscarwinner-names.json');

module.exports = {
	all: oscarWinnerNames,
	random: uniqueRandomArray(oscarWinnerNames)
}