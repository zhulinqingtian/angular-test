(function () {
  'use strict';

  var app = angular.module('app.prop', ['ngRoute']);

  var typeMap = {
    0: '野外使用和其它',
    1: '化石',
    2: '进化石',
    3: '贵重道具'
  };
  var propList = [
    {id: '001', name: '除虫喷雾', type: 0, description: '使用后，在较短的一段时间内，弱小的野生宝可梦将完全不会出现。'},
    {id: '002', name: '白银喷雾', type: 0, description: '弱小的野生宝可梦将完全不会出现。效果比除虫喷雾更持久。'},
    {id: '003', name: '黄金喷雾', type: 0, description: '弱小的野生宝可梦将完全不会出现。效果比白银喷雾更持久。'},
    {id: '004', name: '离洞绳', type: 0, description: '结实的长绳。可以从洞窟或迷宫中脱身。'},
    {id: '005', name: '蓝色玻璃哨', type: 0, description: '以蓝色玻璃制成的哨子。可以治愈睡眠状态。'},
    {id: '006', name: '红色玻璃哨', type: 0, description: '以红色玻璃制成的哨子。可以治愈着迷状态。'},
    {id: '007', name: '浅滩贝壳', type: 0, description: '在浅滩洞穴这地方找到的贝壳。'},
    {id: '008', name: '甜甜蜜', type: 0, description: '在草丛或洞窟等地方使用后，被甜甜香气吸引的野生宝可梦就会出现。'},
    {id: '009', name: '湿湿肥', type: 0, description: '培育树果时的肥料。但完全不适合丰缘地区的土壤，所以没什么效果。'},
    {id: '0010', name: '朱红色花蜜', type: 0, description: '在乌拉乌拉花园里获得的花蜜。可以改变特定宝可梦的样子。'},
    {id: '0011', name: '日之石', type: 2, description: '能让某些特定宝可梦进化的神奇石头。像太阳一样赤红。'},
    {id: '0012', name: '冰之石', type: 2, description: '能让某些特定宝可梦进化的神奇石头。有着雪花般的花纹。'},
    {id: '0013', name: '叶之石', type: 2, description: '能让某些特定宝可梦进化的神奇石头。有着叶子般的花纹。'},
    {id: '0014', name: '美丽之羽', type: 3, description: '仅仅只是漂亮，没有任何效果，极其普通的羽毛。'},
    {id: '0015', name: '心之鳞片', type: 3, description: '有着美丽心形外形且非常珍稀的鳞片。有些人收到会很高兴。'},
    {id: '0016', name: '羽毛化石', type: 1, description: '据说是鸟宝可梦的祖先，古代宝可梦的化石。好像是翅膀的一部分。'}
  ];

  app.controller('propController', function ($scope) {
    $scope.typeMap = typeMap;
    $scope.propList = angular.forEach(propList, function (item) {
      var type = item.type;
      item.type = typeof type === 'number' ? $scope.typeMap[type] : type;
    });
    $scope.remove = function (index) {
      $scope.propList.splice(index, 1);
    }
  });

  app.controller('propDetailController', function ($scope, $routeParams) {
    angular.forEach(propList, function (item) {
      if (item.id === $routeParams.id) {
        $scope.propDetailItem = item;
      }
    });
  });

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/prop', {
        templateUrl: 'src/Prop/prop-list.html',
        controller: 'propController'
      })
      .when('/propDetail/:id', {
        templateUrl: 'src/Prop/prop-detail.html',
        controller: 'propDetailController'
      });
  });
})();