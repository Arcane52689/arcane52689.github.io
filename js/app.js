var portfolioApp = angular.module('myApp', [
  'ngRoute',
  'portfolioControllers'
]);
portfolioApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/skills', {
        templateUrl: 'partials/skills.html',
        controller: 'SkillsCtrl',
        controllerAs: 'skills'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
  }


  ])
