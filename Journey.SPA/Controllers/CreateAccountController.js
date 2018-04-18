'use strict';
app.controller('CreateAccountController', ['$scope', '$location', '$timeout', 'authService', function ($scope, $location, $timeout, authService) {
    $scope.titleCreateAccount = "Skapa Konto";

    $scope.savedSuccessfully = false;
    $scope.message = "";

    $scope.registration = {
        userName: "",
        password: "",
        confirmPassword: ""
    };

    $scope.signUp = function () {

        authService.saveRegistration($scope.registration).then(function (response) {

            $scope.savedSuccessfully = true;
            $scope.message = "Kontot har skapats, du kommer att bli omdirigerad till login-sidan alldeles strax.";
            startTimer();

        },
            function (response) {
                var errors = [];
                for (var key in response.data.modelState) {
                    for (var i = 0; i < response.data.modelState[key].length; i++) {
                        errors.push(response.data.modelState[key][i]);
                    }
                }
                $scope.message = "Kunde inte registrera konto på grund av:" + errors.join(' ');
            });
    };

    var startTimer = function () {
        var timer = $timeout(function () {
            $timeout.cancel(timer);
            $location.path('/');
        }, 2000);
    };

}]);


//app.controller('CreateAccountController', function ($scope, $http, $route, $location) {
//    $scope.titleCreateAccount = "Skapa konto";
//    //$scope.createAccountData = {};

//    var accountUrl = "http://localhost:53130/api/Account/Register";

//    // Create new account:
//    $scope.createAccount = function () {
//        $http({
//            method: 'POST',
//            url: accountUrl,
//            data: $.param($scope.createAccountData),  // Passes in the data as a string.
//            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // Set the headers so Angular passing info as form data (not request payload)
//        }).then(function (data) { // Sends the user to the Login-page after successfully creating an account.
//            $location.url('/');
//        }, function (error) {
//            console.log(error);
//        });
//    };
//});
