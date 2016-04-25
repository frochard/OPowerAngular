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
  .controller('PersonCtrl', function($scope, $http){

  //On recupere l'URL pour lister les personnages
  var urlPerson = opowerApiUrl+"person/";
  //On definit la fonction de parcours des pages de recherche
  var affichageTable=function(){
    $http.get(urlPerson).then(function(response) {
      if (response.data!=null){
        $scope.APIList = response.data.person;
      }else{
        $scope.APIList = [];
      }
      console.log(JSON.stringify($scope.APIList));
    });
  }
  affichageTable();

  $scope.addPerson = function() {
    var data=$scope.person;
    $http.post(urlPerson, JSON.stringify(data)).then(function(){affichageTable();/*success callback*/});
  };

  $scope.removePerson = function(id) {
    $http.delete(urlPerson+id).then(function(){affichageTable();/*success callback*/});
  };
});


