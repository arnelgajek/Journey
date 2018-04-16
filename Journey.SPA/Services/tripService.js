//'use strict';
//app.factory('tripService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

//    var serviceBase = ngAuthSettings.apiServiceBaseUri;

//    var tripsServiceFactory = {};

//    var _getTrips = function () {

//        return $http.get(serviceBase + 'api/trips').then(function (results) {
//            return results;
//        });
//    };

//    tripsServiceFactory.getTrips = _getTrips;

//    return tripsServiceFactory;

//}]);