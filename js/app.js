/* setup your angular app here */
console.log("app.js loaded");

var app = angular.module('veggieFruits', []);
app.controller('ToDoCtrl', ['$scope', function($scope) {

  console.log("controller loaded");

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);

$scope.veggieList = vegetables;
$scope.fruitList = fruits;

$scope.poolList = $scope.veggieList.concat($scope.fruitList).sort();
$scope.vegSorted = [];
$scope.fruitSorted = [];




$scope.toFruit = function(index) {
	$scope.selectedItem = $scope.poolList[index];
	$scope.poolList.splice(index,1);
	$scope.fruitSorted.push($scope.selectedItem);
	// console.log('index of: ' + $scope.fruitList.indexOf($scope.selectedItem));
	// if ($scope.fruitList.indexOf($scope.selectedItem) < 0) {
	// 	$scope.color = "red";
	// }
	// else {
	// 	$scope.color = "green";
	// }
}

$scope.toVeg = function(index) {
	$scope.selectedItem = $scope.poolList[index];
	$scope.poolList.splice(index,1);
	$scope.vegSorted.push($scope.selectedItem);

	//if ($scope.selectedItem)
	// console.log('index of: ' + $scope.veggieList.indexOf($scope.selectedItem));
	// if ($scope.vegList.indexOf($scope.selectedItem) < 0) {
	// 	$scope.color = "red";
	// }
	// else {
	// 	$scope.color = "green";
	// }
}

$scope.gradeMove = function() {

}


}]);