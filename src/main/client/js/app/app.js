angular.module("raspi-dashboard", ["horloge"])
       .controller("test", function($scope, $http) {
           $scope.data = "data de test";
           $http.get("/api/test").then(function(response) {
               console.log(response);
               $scope.data = response.data.test;
           });
       });