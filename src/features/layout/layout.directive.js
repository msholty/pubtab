(function() {
    angular.module('pubtab.layout').directive('ptLayout', Layout);

    Layout.$inject = [];
    function Layout() {
        var directive = {
        	restrict: 'E',
		    templateUrl: 'src/features/layout/layout.html',
		    controller: LayoutCtrl,
		    controllerAs: 'LayoutCtrlVm'
        };

        LayoutCtrl.$inject = ['$state'];
        function LayoutCtrl($state) {
        	var vm = this;
            vm.hideMenu = true;
            $state.go('home');

            vm.menuOptions = [
                {
                    title: 'Home',
                    state: 'home'
                },
                {
                    title: 'Nearby Pubs',
                    state: 'listing'
                },
                {
                    title: 'My Tab',
                    state: 'myTab'
                }
            ];
        }

        return directive;
    }
})();