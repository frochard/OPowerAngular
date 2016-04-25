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
  .controller('ElectronicDevicesCtrl', function ($scope, $http) {

    //On recupere l'URL pour lister les personnages
    var urlElectronic_devices = opowerApiUrl + "electronicdevice/";
    //On initialise la table
    //$scope.APIList=[];
    //On definit la fonction de parcours des pages de recherche
    var affichageTable = function () {

      $http.get(urlElectronic_devices).then(function (response) {
        if (response.data != null) {
          $scope.APIList = response.data.electronicDevice;
        } else {
          $scope.APIList = [];
        }
        console.log(JSON.stringify($scope.APIList));
      });
    }
    affichageTable();

    $scope.addElectronic_devices = function () {
      var data = $scope.electronic_devices;
      $http.post(urlElectronic_devices, JSON.stringify(data)).then(function () {
        console.log("refresh");
        affichageTable();
        /*success callback*/
      });
    };

    $scope.removeElectronic_devices = function (id) {
      $http.delete(urlElectronic_devices + id).then(function () {
        console.log("refresh");
        affichageTable();
        /*success callback*/
      });
    };
  });
