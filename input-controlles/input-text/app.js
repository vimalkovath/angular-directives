var myApp = angular.module('plunker', []);

myApp.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

myApp.directive('myInput', function(){
     return {
        restrict: 'E',
        require: 'ngModel',
        templateUrl: 'input-text.html',
        replace: true,
        scope: {
            text: '=ngModel',
            title: '=title',
            placeholder : '=placeholder'
        },            
    }
});