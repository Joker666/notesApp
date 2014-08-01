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
            $scope.$on('inner::chosen', function(e, data) {
                $($element).css({ "background": data });
                $scope.save($attrs.changeBackground, null, data);
            })
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

            scope.pick = function (color) {
                scope.myColor = color;
                scope.$emit('inner::chosen', color);
            };
        },
        template: '<ul>' +
            '<li ng-repeat="color in colors" ng-class="{selected: (color===myColor)}" ng-click="pick(color)" style="background-color:{{color}};">' +
            '</li>' +
            '</ul>'
    };
});