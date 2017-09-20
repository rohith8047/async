
app.controller('homecontroll', ['$scope','$http', function($scope,$http) {
    $scope.homeAlert = function() {

        $http({
        	method:'GET',
        	url:'/api/series'
        }).then(function success(response){
        	console.log(response);
        },
        function error(response){
        	console.log(response);
        });

        $('.message a').click(function(){
            $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        });


    }
}]);
