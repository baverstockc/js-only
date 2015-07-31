var app = angular.module('PatientApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 
}]);

app.controller('DemoCtrl', function($scope) {
    $scope.user = {
      title: 'Mr',
      email: 'ipsum@lorem.com',
      firstName: 'Christian',
      lastName: 'Baverstock' ,
      company: 'Google' ,
      address: '59 otter Close' ,
      city: 'Stratford' ,
      county: 'London' ,
      summary: 'Stuff',
      postalCode : 'E15 2PZ'
    };
  })
  .config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  });