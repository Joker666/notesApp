notesApp.factory("AuthenticationService", function($http, SessionService) {

    var cacheSession   = function() {
        SessionService.set('authenticated', true);
    };

    var uncacheSession = function() {
        SessionService.unset('authenticated');
    };

    var loginError = function(response) {
        return response.flash;
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