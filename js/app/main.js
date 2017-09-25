(function () {
    var controller = function ($scope, $http) {
        $http.get("https://api.github.com/users/learninghabits")
            .then(function (response) {
                //use $scope to assign a model
                $scope.user = response.data;
            });
    };
    var app = angular.module("applicationHost", []); //-- the array is a list of dependendencies
    app.controller("MainController", ["$scope", "$http", controller]);
})();