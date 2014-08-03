notesApp.controller("LoginController", function($scope, $state, AuthenticationService) {
    $scope.pageClass = 'page-login';

    $scope.credentials = { email: "", password: "" };

    $scope.login = function() {
        AuthenticationService.login($scope.credentials).success(function() {
            $state.go('boards');
        });
    };
});

notesApp.controller('BoardsController', function(BoardsService, $scope, AuthenticationService, $state, $timeout, UserInfo){
    $scope.pageClass = 'page-boards';
    $scope.logout = function() {
        AuthenticationService.logout().success(function() {
            $state.go('login');
        });
    };

    $scope.getBoards = function(){
        BoardsService.getData().then(function (data) {
            $scope.boards = data.boards;
        });
    }

    $scope.getBoards();


    var saveTimeoutForBoards;
    $scope.save = function(id, title, description){
        $timeout.cancel(saveTimeoutForBoards);
        saveTimeoutForBoards = $timeout(function(){
            BoardsService.update(id, title, description).then(function(){
                console.log('board updated');
            });
        }, 1000);
    }

    $scope.addBoard = function(){
        BoardsService.addNew(UserInfo.getUser().id, $scope.newboard.title, $scope.newboard.description).then(function(data){
            console.log('board added');
            $scope.boards.push(data.board);
            $scope.newboard.description = '';
            $scope.newboard.title = '';
        });
    }
});

notesApp.controller('NotesController', function($scope, NotesService, $stateParams, $timeout){
    $scope.pageClass = 'page-notes';

    $scope.getNotes = function(){
        NotesService.getData($stateParams['boardId']).then(function (data) {
            $scope.notes = data.notes;
        });
    }

    $scope.getNotes();

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

    $scope.addNote = function(){
        NotesService.addNew($stateParams['boardId'], $scope.newnote.description, $scope.newnote.background).then(function(data){
            console.log('note added');
            $scope.notes.push(data.note);
            $scope.newnote.description = '';
            $scope.newnote.background = '#F5FFFA';
        });
    }
})