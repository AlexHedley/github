var myApp = angular.module('myApp', []);
myApp.controller('myController', function ($scope, $http) {   

    loadRepos = () => {
        $http.get('https://api.github.com/users/alexhedley/repos')
        .then(function(response) {
            $scope.repos = response.data; //.map(r => r.name);
            //console.log($scope.repos);
        });
    }
    
    $scope.OpenRepository = (repo) => {
        window.open(repo.html_url);
    }

    $scope.OpenRepositoryHomepage = (repo) => {
        window.open(repo.homepage);
    }
    
    $scope.init = () => {
        loadRepos();
    };

});