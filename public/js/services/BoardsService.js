notesApp.factory('BoardsService', function($http, $q, UserInfo){
    return {
        getData: function(){
            var defer = $q.defer();
            $http.get("/boards").success(function (data) {
                    defer.resolve(data);
                    UserInfo.setUser(data.user);
                }
            ).error(function () {
                    defer.reject('An error has occurred :(');
                }
            );
            return defer.promise;

        },
        addNew: function(id, title, description) {
            var defer = $q.defer();
            var url = "/boards";
            var params = {user_id: id, title: title, description: description};

            $http.post(url, params).success(function (data) {
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
        },
        destroy: function(boardId) {
            console.log(boardId);
            var defer = $q.defer();
            $http.delete("/boards/" + boardId).success(defer.resolve).error(defer.reject);
            return defer.promise;
        }
    };
});