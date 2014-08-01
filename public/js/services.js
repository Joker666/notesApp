notesApp.factory("SessionService", function() {
    return {
        get: function(key) {
            return sessionStorage.getItem(key);
        },
        set: function(key, val) {
            return sessionStorage.setItem(key, val);
        },
        unset: function(key) {
            return sessionStorage.removeItem(key);
        }
    }
});

notesApp.factory("AuthenticationService", function($http, SessionService) {

    var cacheSession   = function() {
        SessionService.set('authenticated', true);
    };

    var uncacheSession = function() {
        SessionService.unset('authenticated');
    };

    var loginError = function(response) {
        console.log(response.flash);
    };

    return {
        login: function(credentials) {
            var login = $http.post("/auth/login", credentials);
            login.success(cacheSession);
            login.error(loginError);
            return login;
        },
        logout: function() {
            var logout = $http.get("/auth/logout");
            logout.success(uncacheSession);
            return logout;
        },
        isLoggedIn: function() {
            return SessionService.get('authenticated');
        }
    };
});

notesApp.factory('BoardsService', function($http, $q){
    return {
        getData: function(){
            var defer = $q.defer();
            $http.get("/boards").success(function (data) {
                    defer.resolve(data);
                }
            ).error(function () {
                    defer.reject('An error has occurred :(');
                }
            );
            return defer.promise;

        },
        update: function (boardId, title, description) {
            var defer = $q.defer();
            var url = "/boards/" + boardId;
            var params = {title: title, description: description};

            $http.put(url, params).success(defer.resolve).error(defer.reject);

            return defer.promise;
        }
    };
});

notesApp.factory('NotesService', function($http, $q){
    return {
        getData: function(id){
            var defer = $q.defer();
            $http.get("/boards/" + id + '/notes').success(function (data) {
                    defer.resolve(data);
                }
            ).error(function () {
                    defer.reject('An error has occurred :(');
                }
            );
            return defer.promise;

        },
        removeData: function(boardId, noteId){
            var defer = $q.defer();
            $http.delete("/boards/" + boardId + '/notes/' + noteId).success(function (data) {
                    defer.resolve(data);
                }
            ).error(function () {
                    defer.reject('An error has occurred :(');
                }
            );
            return defer.promise;

        },
        update: function (boardId, noteId, description) {
            var defer = $q.defer();
            var url = "/boards/" + boardId + '/notes/' + noteId;
            var params = {description: description};

            $http.put(url, params).success(defer.resolve).error(defer.reject);

            return defer.promise;
        }
    };
});