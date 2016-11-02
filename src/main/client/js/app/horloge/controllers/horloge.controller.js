module.exports = function($scope, $interval) {
    $scope.horloge = new Date();
    $interval(function() {
        $scope.horloge = new Date();
    }, 1000);
};