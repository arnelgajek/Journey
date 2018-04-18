'use strict';
app.factory('tripService', ['$http', function ($http) {

    var serviceBase = 'http://localhost:52891/';
    var tripServiceFactory = {};

    var _getTrips = function () {

        return $http.get(serviceBase + 'api/trips').then(function (results) {
            return results;
        });
    };

    tripServiceFactory.getTrips = _getTrips;

    return tripServiceFactory;

}]);