'use stict'

var myAppTestAngular = angular.module('myAppTestAngular', []);

myAppTestAngular.controller('ctrltest1', ['$scope', '$interval' , function ($scope, $interval) {

    var time_format = 'M/d/yy h:mm:ss';

	function heure(){
		var date = new Date();
		//var texte = dateFilter(new Date(), format);
		var heure = date.getHours();
		var minute = date.getMinutes();
		var seconde = date.getSeconds();
		var texte = heure+" : "+minute+" : "+seconde;
		$scope.horloge = texte;

	};

	//heure();

	//$interval(heure(), 1000);

	var interval = setInterval(heure(), 1000);

	$scope.message='coucou';

	/*
    function updateTime() {
    	element.text(dateFilter(new Date(), format));
    }

    // watch the expression, and update the UI on change.
    scope.$watch(attrs.myCurrentTime, function(value) {
    	format = value;
        updateTime();
    });

    stopTime = $interval(updateTime, 1000);
    */

	

}]);


//Pourquoi ça marche ce truc !!!?!!?
angular.module('myAppTestAngular').directive('horloge', function () {
	return {
		link: function (scope, element, attrs) {
			function afficheHeure(){
				var date = new Date();
				var heure = date.getHours();
				var minute = date.getMinutes();
				var seconde = date.getSeconds();
				element.text(heure+" : "+minute+" : "+seconde);
			}
			var interval = setInterval(afficheHeure,1000);
		}
	};
});