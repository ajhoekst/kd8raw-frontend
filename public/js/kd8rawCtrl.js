var kd8rawApp = angular.module('kd8rawApp', []);

kd8rawApp.controller('kd8rawCtrl', function ($scope) {
  $scope.messages = [
    {'name': 'KD8RAW',
     'text': 'Hello'},
    {'name': 'Andrew',
     'text': 'Greetings'}
  ];
});