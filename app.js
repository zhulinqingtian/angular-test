(function () {
  'use strict';

  /**
   * 先用**angular.module('pockmon-app', [])**声明模块，
   * 在app.js的module声明中加入'ngRoute'  引用路由模块
   * 再为模块添加控制器AppController
   *
   * 在app.js中添加对'app.monster'模块的依赖，
   * 并修改一下路由，使其初始化时默认加载 monster 模块
   */

  var myApp = angular.module('app', ['ngRoute', 'app.monster', 'app.skill', 'app.prop', 'app.hagberry']);

  myApp.controller('AppController', function ($scope) {});
})();