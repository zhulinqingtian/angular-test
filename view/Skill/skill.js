/**
 * monster模块
 */

(function () {
  'use strict';

  // 完成创建 app.skill 模块并引入ng-Route依赖
  var App = angular.module('app.skill', ['ngRoute']);

  // 定义变量
  var propText = {
    0: '一般',
    1: '格斗',
    2: '火',
    3: '冰',
    4: '电',
    5: '飞行',
    6: '藤鞭'
  };
  var typeText = {
    0: '物理',
    1: '特殊',
    2: '变化',
    3: '冰',
    4: '电',
    5: '飞行',
    6: '藤鞭'
  };
  var skillList = [
    {id: '001', name: '拍击', prop: 0, type: 0, power: 40, hit: 100},
    {id: '002', name: '空手劈', prop: 1, type: 0, power: 50, hit: 100},
    {id: '003', name: '火焰拳', prop: 2, type: 0, power: 75, hit: 100},
    {id: '004', name: '冰冻拳', prop: 3, type: 0, power: 75, hit: 100},
    {id: '005', name: '雷电拳', prop: 4, type: 0, power: 75, hit: 100},
    {id: '006', name: '旋风刀', prop: 0, type: 1, power: 80, hit: 10},
    {id: '007', name: '起风', prop: 5, type: 1, power: 40, hit: 100}
  ];

  App.controller('skillListController', function ($scope) {
    $scope.propText = propText;
    $scope.typeText = typeText;

    $scope.skillList = angular.forEach(skillList, function (item) {
      var prop = item.prop;
      var type = item.type;
      item.prop = typeof prop === 'number' ? $scope.propText[prop] : prop;
      item.type = typeof type === 'number' ? $scope.typeText[type] : type;
    });
    $scope.remove = function (index) {
      $scope.skillList.splice(index, 1);
    }
  });

  App.controller('skillDetailController', function ($scope, $routeParams) {
    angular.forEach(skillList, function (item) {
      if (item.id === $routeParams.id) {
        $scope.skillItem = item;
      }
    });
  });

  // 路由部分
  App.config(function ($routeProvider) {
    $routeProvider
      .when('/skill', {
        templateUrl: 'view/Skill/skill-list.html',
        controller: 'skillListController'
      })
      .when('/skillDetail/:id', {
        templateUrl: 'view/Skill/skill-detail.html',
        controller: 'skillDetailController'
      });
  });
})();