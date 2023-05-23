MyApp=angular.module("MyApp1",[])
MyApp.controller("MyCt",["$scope","$http",function($scope,$http){
    $scope.Udata=[]
    $http({
        method:"Get",
        url:"/UsersD"
       
    }).then(function successCallback(response){
        $scope.Udata=response.data.data
        console.log(Udata)
    },function errorCallback(response){
        console.log(response)
    })

}])
