(function() {
    angular.module('pubtab.layout', [
    	'ui.router'
    ]).config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$locationProvider'];
    function stateConfig($stateProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as HomeCtrlVm',
                templateUrl: 'src/features/home/home.html'
            })
            .state('listing', {
                url: '/pubs',
                controller: 'ListingCtrl as ListingCtrlVm',
                templateUrl: 'src/features/listing/listing.html'
            })
            .state('detail', {
                url: '/pubs/:id',
                controller: 'DetailCtrl as DetailCtrlVm',
                templateUrl: 'src/features/detail/detail.html'
            })
            .state('myTab', {
                url: '/my-tab',
                controller: 'MyTabCtrl as MyTabCtrlVm',
                templateUrl: 'src/features/my-tab/my-tab.html'
            });
        $locationProvider.html5Mode(true);
    }
})();