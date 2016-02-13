const ng = require('angular');
const controller = require('./home.ctrl');

/**
 * [module description]
 * @param  {[type]} "porybox.home" [description]
 * @param  {[type]} []             [description]
 * @return {[type]}                [description]
 */
ng.module('porybox.home', [])
	.component('homeTest',
  {
    bindings: {},
    templateUrl: 'home/home.view.html',
    controller: controller,
    controllerAs: 'home'
  });