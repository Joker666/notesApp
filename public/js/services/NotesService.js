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
        addNew: function(boardId, description, background) {
            var defer = $q.defer();
            var url = "/boards/" + boardId + '/notes';
            var params = {board_id: boardId, description: description, background: background};

            $http.post(url, params).success(function (data) {
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
            $http.delete("/boards/" + boardId + '/notes/' + noteId).success(defer.resolve).error(defer.reject);
            return defer.promise;

        },
        update: function (boardId, noteId, description, background) {
            var defer = $q.defer();
            var url = "/boards/" + boardId + '/notes/' + noteId;
            var params = {description: description, background: background};

            $http.put(url, params).success(defer.resolve).error(defer.reject);

            return defer.promise;
        }
    };
});