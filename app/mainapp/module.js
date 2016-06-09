"use strict";


angular.module('app.mainapp', ['ui.router'])
    .config(function ($stateProvider) {

        $stateProvider
            .state('app.mainapp', {
                url: '/home',
                data: {
                    title: 'Blank'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/mainapp/views/home.html',
                        // controller: 'mainappCtrl'
                    }
                }
            })
    });
