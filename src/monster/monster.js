/**
 * monster模块
 */

(function () {
  'use strict';

  // 完成创建 app.monster 模块并引入ng-Route依赖
  var monsterApp = angular.module('app.monster', ['ngRoute']);

  // 定义变量
  var monsters = [
    { id:'001', name:'妙蛙种子', count: 1, weight: 6.9, property: '草/毒', type: '种子宝可梦',
      character: { common: '茂盛', conceal: '叶绿素'},
      img: 'https://s1.52poke.wiki/wiki/thumb/2/21/001Bulbasaur.png/300px-001Bulbasaur.png'
    },
    { id:'002', name:'妙蛙草', count: 1, weight: 13.0, property: '草/毒', type: '种子宝可梦',
      character: { common: '茂盛', conceal: '叶绿素'},
      img: 'https://s1.52poke.wiki/wiki/thumb/7/73/002Ivysaur.png/300px-002Ivysaur.png'
    },
    { id:'003', name:'妙蛙花', count: 1, weight: 100, property: '草/毒', type: '种子宝可梦',
      character: { common: '茂盛', conceal: '叶绿素'},
      img: 'https://s1.52poke.wiki/wiki/thumb/a/ae/003Venusaur.png/300px-003Venusaur.png'
    },
    { id:'004', name:'小火龙', count: 1, weight: 8.5, property: '火', type: '蜥蜴宝可梦',
      character: { common: '猛火', conceal: '太阳之力'},
      img: 'https://s1.52poke.wiki/wiki/thumb/7/73/004Charmander.png/300px-004Charmander.png'
    },
    { id:'025', name:'皮卡丘', count: 1, weight: 6, property: '电', type: '鼠宝可梦',
      character: { common: '静电', conceal: '避雷针'},
      img: 'http://s1.52poke.wiki/wiki/thumb/0/0d/025Pikachu.png/260px-025Pikachu.png',
      forms: [
        { name: '偶像皮卡丘', src: 'http://s1.52poke.wiki/wiki/thumb/e/e8/025Pikachu-Pop_Star.png/260px-025Pikachu-Pop_Star.png'},
        { name: '博士皮卡丘', src: 'http://s1.52poke.wiki/wiki/thumb/2/2f/025Pikachu-PhD.png/260px-025Pikachu-PhD.png'},
        { name: '面罩摔角手皮卡丘', src: 'http://s1.52poke.wiki/wiki/thumb/e/e7/025Pikachu-Libre.png/260px-025Pikachu-Libre.png'},
        { name: '贵妇皮卡丘', src: 'http://s1.52poke.wiki/wiki/thumb/f/f0/025Pikachu-Belle.png/260px-025Pikachu-Belle.png'},
        { name: '重摇滚皮卡丘', src: 'http://s1.52poke.wiki/wiki/thumb/4/4f/025Pikachu-Rock_Star.png/260px-025Pikachu-Rock_Star.png'},
      ] }
  ];

  monsterApp.controller('listController', function ($scope) {
    $scope.monsters = monsters;
    $scope.remove = function (index) {
      $scope.monsters.splice(index, 1);
    }
  });

  monsterApp.controller('detailController', function ($scope, $routeParams) {
    angular.forEach(monsters, function (element) {
      if (element.id === $routeParams.id) {
        $scope.monster = element;
      }
    });
  });

  // 路由部分
  monsterApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/monster/monster-list.html',
        controller: 'listController'
      })
      .when('/monster', {
        templateUrl: 'src/monster/monster-list.html',
        controller: 'listController'
      })
      .when('/detail/:id', {
        templateUrl: 'src/monster/monster-detail.html',
        controller: 'detailController'
      })
      .otherwise({
        redirectTo: '/'  // 初始化时默认加载 monster 模块
      });
  });
})();