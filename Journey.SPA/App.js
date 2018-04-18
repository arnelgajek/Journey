var app = angular.module("app", ['ngRoute', 'LocalStorageModule']);

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

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});