// Your JavaScript Code here
var app = angular.module("thumbsApp", []);

app.controller("thumbsCtrl", function($scope, $http){
    $http.get('/api/thumbnails').then(function(response){
        $scope.images = response.data["thumbnails"];
    });
});