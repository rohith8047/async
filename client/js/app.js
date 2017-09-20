var app = angular.module('myApp', [ 'ui.router', 'ui.bootstrap']);
        app.config(function ($stateProvider, $locationProvider,$urlRouterProvider) {
            // $urlRouterProvider.otherwise('/home')
                $stateProvider
                    .state('login',{
                        url:'/login',
                        templateUrl:'views/login.html'
                    })
                    .state('about',{
                        url:'/about',
                        templateUrl:'views/about.html'
                    })

                    .state('newregister',{
                            url:'/newregister',
                            templateUrl:'views/newregister.html'
                        })

        .state('index',{
                url:'/index',
                templateUrl:'views/index.html'
            });


            $locationProvider.html5Mode(true);

        });
