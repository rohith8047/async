app.controller("myCtrl", function ($scope) {
    $scope.records = [
        "Alfreds Futterkiste",
        "Berglunds snabbköp",
        "Centro comercial Moctezuma",
        "Ernst Handel"
    ];


    $scope.count = 0;
    $scope.myFunc = function () {
        $scope.count++;
    };

    $scope.firstName = "sai";
    $scope.lastName = "rohith";


    $scope.counts = 0;
    $scope.change = function() {
        $scope.counts++;
    };

    $scope.name = "John Doe";
});

