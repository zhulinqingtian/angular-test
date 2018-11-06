(function () {
  'use strict';

  var app = angular.module('app.hagberry', ['ngRoute']);

  var hagberryList = [
    {id: '001', name: '黄金的果实', description: '携带后，可以回复自己３０点体力。'},
    {id: '002', name: '解毒的果实', description: '携带后，可以治愈自己的中毒状态。'},
    {id: '003', name: '苦涩的果实', description: '携带后，可以治愈自己的混乱状态。'},
    {id: '004', name: '樱子果', description: '让宝可梦携带后，可以治愈麻痹。'},
    {id: '005', name: '蔓莓果', description: '用于制作宝可方块，制作出来的宝可方块可用来打磨帅气。红色的果实尝起来是辣的。'},
    {id: '006', name: '哈密果', description: '如果把它交给宝可梦，宝可梦就会变得非常容易和训练家亲密，但特攻的基础点数会降低。'}

  ];

  app.controller('hagberryController', function ($scope) {
    $scope.hagberryList = hagberryList;
    $scope.remove = function (index) {
      $scope.hagberryList.splice(index, 1);
    }
  });

  app.controller('hagberryDetailController', function ($scope, $routeParams) {
    angular.forEach(hagberryList, function (item) {
      if (item.id === $routeParams.id) {
        $scope.hagberryDetailItem = item;
      }
    })
  });

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/hagberry', {
        templateUrl: 'src/hagberry/hagberry-list.html',
        controller: 'hagberryController'
      })
      .when('/hagberry/:id', {
        templateUrl: 'src/hagberry/hagberry-detail.html',
        controller: 'hagberryDetailController'
      })
  });
})();