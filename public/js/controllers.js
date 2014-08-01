notesApp.controller("LoginController", function($scope, $state, AuthenticationService) {
    $scope.pageClass = 'page-login';

    $scope.credentials = { email: "", password: "" };

    $scope.login = function() {
        AuthenticationService.login($scope.credentials).success(function() {
            $state.go('boards');
        });
    };
});

notesApp.controller('BoardsController', function(BoardsService, $scope, AuthenticationService, $state, $timeout){
    $scope.pageClass = 'page-boards';
    $scope.logout = function() {
        AuthenticationService.logout().success(function() {
            $state.go('login');
        });
    };

    $scope.boards = [];
    BoardsService.getData().then(function (data) {
        angular.forEach(data.boards, function (value) {
            $scope.boards.push(value);
        });
    });


    var saveTimeoutForBoards;
    $scope.save = function(id, title, description){
        $timeout.cancel(saveTimeoutForBoards);
        saveTimeoutForBoards = $timeout(function(){
            BoardsService.update(id, title, description).then(function(){
                console.log('board updated');
            });
        }, 1000);
    }
});

notesApp.controller('NotesController', function($scope, NotesService, $stateParams, $timeout){
    $scope.pageClass = 'page-notes';

    $scope.notes = [];
    NotesService.getData($stateParams['boardId']).then(function (data) {
        angular.forEach(data.notes, function (value) {
            $scope.notes.push(value);
        });
    });

    $scope.trash = function(idx, id){
        $scope.notes.splice(idx, 1);
        NotesService.removeData($stateParams['boardId'], id).then(function(){
            console.log('note removed');
        });
    };


    var saveTimeoutForNotes;
    $scope.save = function(id, description, background){
        $timeout.cancel(saveTimeoutForNotes);
        saveTimeoutForNotes = $timeout(function(){
            NotesService.update($stateParams['boardId'], id, description, background).then(function(){
                console.log('note updated');
            });
        }, 1000);
    }

})