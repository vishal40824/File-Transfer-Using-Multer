const app = angular.module('fileApp', ['ngRoute', 'ngAnimate']);

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
    
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'templates/home.html',
        controller: 'fileController'
    })
    .when('/softcat',{
        templateUrl: 'templates/softcat.html',
        controller: 'fileController'
    })
    .when('/specific',{
        templateUrl: 'templates/specificForm.html',
        controller: 'fileController'
    })
    .when('/fallback',{
        templateUrl: 'templates/fallback.html',
        controller: 'fileController'
    })
    .otherwise({
        redirect: 'templates/home.html',
        controller: 'fileController'
    });
});