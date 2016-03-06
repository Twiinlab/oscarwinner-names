var expect = require('chai').expect;
var oscarWinners = require('./index');

describe('oscarWinners-names', function(){
	describe('all', function(){
		it('should be an array of strings', function(){
			expect(oscarWinners.all).to.satisfy(isArrayOfStrings);
		
			function isArrayOfStrings(array) {
				return array.every(function(item){
					return typeof item === 'string';
				});
			}
		});

		it('should contain "Leonardo DiCaprio, The Revenant - ACTOR IN A LEADING ROLE"', function() {
			expect(oscarWinners.all).to.include('Leonardo DiCaprio, The Revenant - ACTOR IN A LEADING ROLE');
		});



	});

	describe('random', function(){
		it('should return random item from the oscarwinners.all', function(){
			
			var randomItem = oscarWinners.random();
			expect(oscarWinners.all).to.include(randomItem);
		});

	});
})