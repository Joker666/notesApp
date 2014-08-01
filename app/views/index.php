<!DOCTYPE html>
<html ng-app="notesApp">
<head>
    <title>NoteApp</title>
    <link rel="stylesheet" href="/css/loading-bar.css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/styles.css">

    <script src="/js/lib/jquery.js"></script>
    <script src="/js/lib/angular.js"></script>
    <script src="/js/lib/underscore.js"></script>
    <script src="/js/lib/loading-bar.js"></script>
    <script src="/js/lib/ng-infinite-scroll.js"></script>
    <script src="/js/lib/angular-ui-router.js"></script>
    <script src="/js/lib/angular-animate.js"></script>
    <script src="/js/lib/angular-resource.js"></script>
    <script src="/js/app.js"></script>
    <script src="/js/services.js"></script>
    <script src="/js/controllers.js"></script>
    <script src="/js/directives.js"></script>
</head>
<body>
<div class="page {{ pageClass }}" ui-view></div>
</body>
</html>