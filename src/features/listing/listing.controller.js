(function() {
    angular.module('pubtab.listing').controller('ListingCtrl', ListingCtrl);

    ListingCtrl.$inject = ['$http'];
    function ListingCtrl($http) {
        // view-model, which is where the view (pubtab.html) gets all values
        var vm = this;

        $http.get('/stubs/pub-list.json').success(processPubList, processErrors);

        function processPubList(data) {
        	vm.pubs = data;
        }

        function processErrors() {
        	// do some error handling here
        }
    }
})();