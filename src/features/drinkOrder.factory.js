(function() {
    angular.module('pubtab')
    	.factory('drinkOrder', drinkOrderFactory);

    drinkOrderFactory.$inject = ['localStorageService'];
    function drinkOrderFactory(localStorageService) {
    	return {
    		drinks: [],
            locationId: null,
    		addDrinks: addDrinks,
    		clearDrinks: clearDrinks,
            getDrinks: getDrinks
    	};

    	function addDrinks(arrayOfDrinks) {
    		var totalDrinks = this.drinks;
    		arrayOfDrinks.forEach(function(drink) {
    			totalDrinks.push(drink);
    		});

            localStorageService.set('drinkOrder', totalDrinks);
    	}

        function setLocationId(id) {
            this.locationId = id;
        }

    	function clearDrinks() {
    		this.drinks = [];
            localStorageService.set('drinkOrder', null);
    	}

        function getDrinks() {
            return localStorageService.get('drinkOrder');
        }
    }
})();