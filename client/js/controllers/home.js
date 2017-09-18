
app.controller('homecontroll', ['$scope','$http', function($scope,$http) {
    $scope.homeAlert = function() {
        alert('this is home page');

        $http({
        	method:'GET',
        	url:'/api/series'
        }).then(function success(response){
        	console.log(response);
        },
        function error(response){
        	console.log(response);
        });
    }
}]);
