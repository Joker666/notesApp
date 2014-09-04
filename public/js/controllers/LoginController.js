notesApp.controller("LoginController", function($scope, $state, AuthenticationService) {
    $scope.pageClass = 'page-login';

    $scope.credentials = { email: "", password: "" };

    $scope.login = function() {
        AuthenticationService.login($scope.credentials).success(function() {
            $state.go('boards');
        });
    };
});