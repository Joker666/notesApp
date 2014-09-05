var notesApp = angular.module('notesApp', [
    'ui.router',
    'angular-loading-bar',
    'infinite-scroll',
    'ngAnimate',
    'ngResource'
]);

notesApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/#");
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .state('boards', {
            url: '/boards',
            templateUrl: 'templates/boards.html',
            controller: 'BoardsController',
            resolve: {
                'expiry': function($http){
                    return $http.get('/expiry');
                }
            }
        })
        .state('boards.notes', {
            url: '/:boardId/notes',
            views: {
            '@': {
                    templateUrl: 'templates/notes.html',
                    controller: 'NotesController'
                }
            }
        })
});

notesApp.config(function($httpProvider){
    var logsOutUserOn401 = function($state, $q, SessionService){
        var success = function(response){
            return response;
        };
        var error = function(response){  //HTTP not authorized
            if(response.status === 401){
                SessionService.unset('authenticated');
                $state.go('login');
                return $q.reject(response);
            } else {
                return $q.reject(response)
            }
        };

        return function(promise){
            return promise.then(success, error);
        }
    }
});

notesApp.run(function($rootScope, $state, AuthenticationService, $stateParams) {
    var statesThatRequireAuth = ['boards', 'boards.notes'];

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if(_(statesThatRequireAuth).contains(toState.name) && !AuthenticationService.isLoggedIn()) {
            event.preventDefault();
            $state.go('login');
            console.log("Please log in to continue.");
        }
    });

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});