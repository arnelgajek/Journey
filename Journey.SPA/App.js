var app = angular.module("app", ['ngRoute'/*, 'LocalStorageModule', 'angular-loading-bar'*/]);

app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/Views/LoginView.html",
                controller: 'LoginController'
            })
            .when("/CreateAccount", {
                templateUrl: "/Views/CreateAccountView.html",
                controller: 'CreateAccountController'
            })
            .when("/Summary", {
                templateUrl: "/Views/SummaryView.html",
                controller: 'SummaryController'
            })
            .when("/NewJourney", {
                templateUrl: "/Views/NewJourneyView.html",
                controller: 'NewJourneyController'
            })
            .when("/Report", {
                templateUrl: "/Views/JourneyReportView.html",
                controller: 'JourneyReportController'
            })
            .when("/HandleVehicle", {
                templateUrl: "/Views/HandleVehicleView.html",
                controller: 'HandleVehicleController'
            })
            .when("/ChatSupport", {
                templateUrl: "/Views/ChatSupportView.html",
                controller: 'ChatSupportController'
            })
            .otherwise({ redirectTo: "/" });
    });

// The settings for the Servicebase:
//var serviceBase = 'http://localhost:53130/';
//app.constant('ngAuthSettings', {
//    apiServiceBaseUri: serviceBase,
//    clientId: 'ngAuthApp'
//});

//app.config(function ($httpProvider) {
//    $httpProvider.interceptors.push('authInterceptorService');
//});

//app.run(['authService', function (authService) {
//    authService.fillAuthData();
//}]);