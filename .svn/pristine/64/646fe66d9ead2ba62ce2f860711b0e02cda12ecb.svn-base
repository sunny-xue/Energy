var es=angular.module('energyService',[]);

es.value('myValue','value');

es.factory('doLogin',['$window','myValue',function doLoginFactory($window,myValue){
    return 'doLogin loaded';
}]);

es.service('myService',['$window','myValue',function($window,myValue){
    this.getKey='myService'+myValue;
}]);

es.provider('myProvider',function(){
    this.$get=['myValue', function(myValue){
        return myValue;
    }];
});

es.constant('myConstant','constant loaded');