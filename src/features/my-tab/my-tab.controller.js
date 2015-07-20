(function() {
    angular.module('pubtab.myTab')
    	.controller('MyTabCtrl', MyTabCtrl);

    MyTabCtrl.$inject = ['drinkOrder', '$state', '$stateParams'];
    function MyTabCtrl(drinkOrder, $state, $stateParams) {
    	var vm = this;
    	vm.clearDrinks = clearDrinks;

    	vm.drinks = drinkOrder.getDrinks() || [];
    	vm.totalPrice = 0;
    	vm.drinks.forEach(function(drink) {
    		vm.totalPrice += Number(drink.price);
    	});

    	function clearDrinks() {
    		drinkOrder.clearDrinks();
    		$state.go($state.current, $stateParams, {
			    reload: true,
			    inherit: false,
			    notify: true
			});
    	}
    }
})();