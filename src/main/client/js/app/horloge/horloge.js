angular.module("horloge", [])
       .controller("horlogeController", function($scope, $interval) {
           $scope.horloge = new Date();
           $interval(function() {
               $scope.horloge = new Date();
           }, 1000);
       })
       .component("horloge", {
           controller: "horlogeController",
           templateUrl: "templates/horloge/horloge.html"
       });