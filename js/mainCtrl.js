var app = angular.module('quoteBook');


app.controller('mainCtrl', function($scope, dataService){

	$scope.quotes = dataService.getData();

	$scope.addQuote = function(){
		
		dataService.addData($scope.quote);
	};

	$scope.removeQuote = function(){
		dataService.removeData($scope.quote);
	};

	$scope.searchQuotes = '';
	$scope.showAdd = false;
	$scope.toggleAdd = function() {
		$scope.showAdd = !$scope.showAdd;
		$scope.showRemove = false;
		$scope.showSearch = false;
	};

	$scope.showSearch = false;
	$scope.toggleSearch = function() {
		$scope.showSearch = !$scope.showSearch;
		$scope.showRemove = false;
		$scope.showAdd = false;

	};

	$scope.showRemove = false;
	$scope.toggleRemove = function(){
		$scope.showRemove = !$scope.showRemove;
		$scope.showSearch = false;
		$scope.showAdd = false;

	};
		



});