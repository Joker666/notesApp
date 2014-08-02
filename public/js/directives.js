//notesApp.directive('resize', function ($window) {
//    return function(){
//        angular.element($window).bind('resize', function() {
//            console.log(angular.element($window)[0].innerWidth);
//        });
//    }
//})

notesApp.directive('changeBackground', function () {
    return {
        restrict: 'A',
        controller: function($scope, $element, $attrs) {
            console.log($scope.myColor);
//            $scope.$on('inner::chosen', function(event, data) {
//                console.log(event);
//                $($element).css({ "background": data });
//                if($attrs.changeBackground){
//                    $scope.save($attrs.changeBackground, null, data);
//                }
//                //$scope.save($attrs.changeBackground, null, data);
//            })
        }
    };
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
            customizedColors: '=colors'
        },
        restrict: 'AE',
        link: function (scope, element, attr) {
            scope.colors = scope.customizedColors || defaultColors;
            scope.myColor = scope.selected || scope.colors[0];

            //For add notes' initial background
            scope.selected = scope.myColor;
            scope.pick = function (color) {
                scope.myColor = color;
                scope.selected = color;
            };
        },
        template: '<ul>' +
            '<li ng-repeat="color in colors" ng-class="{selected: (color===myColor)}" ng-click="pick(color)" style="background-color:{{color}};">' +
            '</li>' +
            '</ul>'
    };
});