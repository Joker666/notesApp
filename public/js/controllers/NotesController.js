notesApp.controller('NotesController', function($scope, NotesService, $stateParams, $timeout){
    $scope.pageClass = 'page-notes';

    $scope.getNotes = function(){
        NotesService.getData($stateParams['boardId']).then(function (data) {
            $scope.notes = data.notes;
        });
    }

    $scope.getNotes();

    $scope.trash = function(note){
        console.log(note);
        console.log($scope.notes.indexOf(note));
        $scope.notes.splice($scope.notes.indexOf(note),1);
        NotesService.removeData($stateParams['boardId'], note.id).then(function(){
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