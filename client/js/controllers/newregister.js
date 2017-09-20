app.controller("NavCtrl", function ($scope, $uibModal) {
    $scope.openregisterModal = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: 'sm'
        });

        modalInstance.result.then(function (selectedItem) {
        }, function () {
        });
    }

});

app.controller('ModalInstanceCtrl', function ($scope) {



});



