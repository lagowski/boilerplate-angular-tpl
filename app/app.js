'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

angular.module('app', [
    // 'ngMaterial',
    // 'satellizer',
    //'ngSanitize',
    // 'ngAnimate',
    'restangular',
    'ui.router',
    'ui.bootstrap',

    // App
    'app.layout',
    'app.mainapp'
])



    .constant('APP_CONFIG', window.appConfig)

    .run(function ($rootScope
        , $state, $stateParams
    ) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        // editableOptions.theme = 'bs3';
    });
