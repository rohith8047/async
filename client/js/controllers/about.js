app.controller('aboutcontroll', ['$scope','$http', function($scope,$http) {
    $scope.aboutAlert = function() {
        alert('this is about page');

        $http({
        	method:'GET',
        	url:'/api/parallel'
        }).then(function success(response){
        	console.log(response);
        },
        function error(response){
        	console.log(response);
        });
    }
}]);
