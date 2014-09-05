notesApp.controller('BoardsController', function(BoardsService, $scope, AuthenticationService, $state, $timeout, UserInfo, expiry){
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

    $scope.trash = function(board){
        $scope.boards.splice($scope.boards.indexOf(board),1);
        BoardsService.destroy(board.id).then(function(){
            console.log('board removed');
        });
    }
});