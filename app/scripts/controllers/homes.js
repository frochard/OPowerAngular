
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
  .controller('HomesCtrl', function($scope, $http){

    //On recupere l'URL pour lister les personnages
    var urlHome = opowerApiUrl+"homes/";
    //On initialise la table
    //$scope.APIList=[];
    //On definit la fonction de parcours des pages de recherche
    var affichageTable=function(){
      $http.get(urlHome).then(function(response) {
        if (response.data!=null){
          $scope.APIList = response.data.home;
        }else{
          $scope.APIList = [];
        }
        console.log(JSON.stringify($scope.APIList));
      });
    }
    affichageTable();

    $scope.addHome = function() {
      var data=$scope.home;
      $http.post(urlHome, JSON.stringify(data)).then(function(){affichageTable();/*success callback*/});
    };

    $scope.removeHome = function(id) {
      $http.delete(urlHome+id).then(function(){affichageTable();/*success callback*/});
    };
  });
