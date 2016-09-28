angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	mainService.getUsers().then(function(respones){
      $scope.users = respones.data.data;
    })
  }


  $scope.getUsers();

});
