(function(angular) {
  'use strict';
angular.module('anchoringExample', ['ngAnimate', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController as home'
    });
    $routeProvider.when('/profile/:id', {
      templateUrl: 'profile.html',
      controller: 'ProfileController as profile'
    });
  }])
  .run(['$rootScope', function($rootScope) {
    $rootScope.records = [
      { id: 1, title: 'vimal kovath' },
      { id: 2, title: 's/o kovath vijayam' },
      { id: 3, title: 'UI Architect is passion' },
      { id: 4, title: 'Angular handling' },
      { id: 5, title: 'Sreekumar as  manager' },
      { id: 6, title: 'Lead as rajesh kattampilly' },
      { id: 7, title: 'college as shiju komath' },
      { id: 8, title: 'working with ux team' },
      { id: 9, title: 'moving to development' },
      { id: 10, title: 'Great time' }
    ];
  }])
  .controller('HomeController', ['$scope',function($scope) {
    //empty
	$scope=this;
	$scope.cim="vimal K V";
	this.vars = "kovsth";
  }])
  .controller('ProfileController', ['$rootScope', '$routeParams',
      function ProfileController($rootScope, $routeParams) {
    var index = parseInt($routeParams.id, 10);
    var record = $rootScope.records[index - 1];

    this.title = record.title;
    this.id = record.id;
  }]);
})(window.angular);

