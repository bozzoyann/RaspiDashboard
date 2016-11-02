module.exports = function($scope, $http) {
    $scope.facts = [];
    $http.get("/api/fun_flux").then(function(response) {
        var funFlux = response.data;
        for (var i = 0; i < funFlux.length; i++) {
            $scope.facts.push(funFlux[i]);
        }
    });
};