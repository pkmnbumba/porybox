const ng = require('angular');
const controller = require('./add.ctrl');

/**
 * [module description]
 * @param  {[type]} "porybox.add" [description]
 * @param  {[type]} []             [description]
 * @return {[type]}                [description]
 */
ng.module('porybox.add', ['porybox.box', 'ngMessages', 'ngFileUpload'])
  .component('addMenu',
  {
    bindings: {
      boxes: '=',
      prefs: '='
    },
    templateUrl: 'add/add.view.html',
    controller: ['$scope', 'io', '$mdDialog', '$mdMedia', '$mdBottomSheet', controller],
    controllerAs: 'add'
  });
