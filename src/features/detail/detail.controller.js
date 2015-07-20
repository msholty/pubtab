(function() {
    angular.module('pubtab.detail')
    	.controller('DetailCtrl', DetailCtrl);

    DetailCtrl.$inject = ['$stateParams', '$http', 'drinkOrder', '$state'];
    function DetailCtrl($stateParams, $http, drinkOrder, $state) {
    	var vm = this;
    	vm.increaseCount = increaseCount;
    	vm.decreaseCount = decreaseCount;
    	vm.submitDrinks = submitDrinks;

    	$http.get('/stubs/pubs/' + $stateParams.id + '/info.json').success(processPub, processErrors);
    	$http.get('/stubs/pubs/' + $stateParams.id + '/drinks.json').success(processDrinks, processErrors);

    	function processPub(data) {
    		vm.pub = data;
    	}

    	function processDrinks(data) {
    		vm.drinks = data;
    		vm.drinks.forEach(function(drink) {
    			drink.count = 0;
    			// TODO: read in cached value from factory so you can navigate away and come back and have the same number
    		});
    	}

    	function processErrors() {
    		// process errors here
    	}

    	function increaseCount(drink) {
    		if (drink.count < 10) {
    			drink.count++;
    		}
    	}

    	function decreaseCount(drink) {
    		if (drink.count > 0) {
    			drink.count--;
    		}
    	}

    	function submitDrinks() {
            var allDrinks = [];
            vm.drinks.forEach(function(drink) {
                // For each drink type, find out how many they added
                for (var i = 0; i < drink.count; i++) {
                    allDrinks.push(drink);
                }
            });
    		drinkOrder.addDrinks(allDrinks);
    		$state.go('myTab');
    	}
    }
})();