var app = angular.module('myApp', [ 'ui.router']);
        app.config(function ($stateProvider, $locationProvider,$urlRouterProvider) {
            $urlRouterProvider.otherwise('/home')
                $stateProvider
                    .state('home',{
                        url:'/home',
                        templateUrl:'views/home.html'
                    })
                    .state('about',{
                        url:'/about',
                        templateUrl:'views/about.html'
                    });

            $locationProvider.html5Mode(true);

        });
