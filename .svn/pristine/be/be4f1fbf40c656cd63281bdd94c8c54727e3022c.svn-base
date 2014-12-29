var ea=angular.module("energyPlatform",['ui.router','energyController','energyService']);

ea.provider('appLauncher',function(){
    this.$get=['myConstant', function(myConstant){
        return myConstant;
    }];
});

//appLauncher要加一个Provider关键字，否则会提示找不到上述定义的provider
ea.config(['$stateProvider','$urlRouterProvider','myConstant','appLauncherProvider',
    function($stateProvider,$urlRouterProvider,myConstant,appLauncherProvider){

        console.log(appLauncherProvider);
        console.log(myConstant);

        $stateProvider.state('login',{
            url:'/login',
            templateUrl:'login.html',
            controller:"loginController"
        }).state('home',{
            url:'/home',
            templateUrl:'tmpls/views/home.html',
            controller:'homeController'
        });

         $urlRouterProvider.otherwise('login');

}]);
