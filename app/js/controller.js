var ec=angular.module('energyController',[]);

ea.controller('homeController',['$scope',
    function homeController($scope){
        console.log('home page');
    }
]);

ea.controller('loginCtrl',['$scope','loginService',function($scope,loginService){
    $scope.loginSubmit=function(){
        loginService.doLogin($scope.user);
    };
}]);