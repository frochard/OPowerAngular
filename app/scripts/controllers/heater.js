//URL d'acces à l'API Starwars
var opowerApiUrl = "http://localhost:9000/opower/";

'use strict';

/**
 * @ngdoc function
 * @name opowerApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the opowerApp
 */
angular.module('opowerApp')
  .controller('HeaterCtrl', function($scope, $http){

    //On recupere l'URL pour lister les personnages
    var urlHeater = opowerApiUrl+"heater/";
    //On initialise la table
    //$scope.APIList=[];
    //On definit la fonction de parcours des pages de recherche
    var affichageTable=function(){
      $http.get(urlHeater).then(function(response) {
        if (response.data!=null){
          $scope.APIList = response.data.heater;
        }else{
          $scope.APIList = [];
        }
        console.log(JSON.stringify($scope.APIList));
      });
    }
    affichageTable();

    $scope.refresh=function(){
      affichageTable();
    }
    $scope.addHeater = function() {
      var data=$scope.heater;
      $http.post(urlHeater, JSON.stringify(data)).then(function(){affichageTable();/*success callback*/});
    };

    $scope.removeHeater = function(id) {
      $http.delete(urlHeater+id).then(function(){affichageTable();/*success callback*/});
    };
  });
