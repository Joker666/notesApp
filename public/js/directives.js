//notesApp.directive('resize', function ($window) {
//    return function(){
//        angular.element($window).bind('resize', function() {
//            console.log(angular.element($window)[0].innerWidth);
//        });
//    }
//})

notesApp.directive('alerti', function(){
    return {
        scope:{
            deleteBoard: '&',
            item: '@'
        },
        link: function(scope, element){
            element.click(function(){
                return alertify.confirm("Do you want to delete the board and all of it's notes ?",
                    function(){
                        scope.deleteBoard({board:scope.item});
                        alertify.success('Ok');
                    }).setting({
                        title: 'Confirm',
                        transition:'zoom',
                        movable: false
                    }).show();
            });
        }
    }
});

notesApp.directive('ngColorPicker', function () {
    var defaultColors = [
        '#F5FFFA',
        '#e1e1e1',
        '#fbd75b',
        '#ffb878',
        '#ff887c'
    ];
    return {
        scope: {
            selected: '=',
            customizedColors: '=colors',
            savebackground: '&',
            id: '@'
        },
        restrict: 'AE',
        link: function (scope) {
            var noteID = scope.id;
            scope.colors = scope.customizedColors || defaultColors;
            var myColor = scope.selected || scope.colors[0];
            //For add notes' initial background
            scope.selected = myColor;
            scope.pick = function (color) {
                myColor = color;
                scope.selected = color;
                if(angular.isDefined(noteID)){
                    scope.savebackground({id:noteID, description:null, background:color});
                }
            };
        },
        template: '<ul>' +
            '<li ng-repeat="color in colors" ng-class="{selected: (color===selected)}" ng-click="pick(color)" style="background-color:{{color}};">' +
            '</li>' +
            '</ul>'
    };
});