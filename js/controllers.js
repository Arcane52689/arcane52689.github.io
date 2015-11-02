


var portfolioControllers = angular.module('portfolioControllers',[]);


portfolioControllers.controller('AboutCtrl', function() {
  this.name = "Thomas Jenkins"
})


portfolioControllers.controller('SkillsCtrl', function() {

})


portfolioControllers.controller('ProjectsCtrl', function($scope) {
  this.projects = [{
    'name': "Classic Car Classifieds",
    'description': 'A classifieds site for cars where users can sell and look for vehicles and parts.',
    'features': [
      'Single page Backbone App consuming a restful Rails JSON API.',
      'BCrypt overrides standard Auth procedures',
      'Utilizes OmniAuth to allow users to log in with Twitter',
      'Utilizes custom made search methods to look through all vehicle and part sales',
      'Allows users to sort, limit, and update search results',
      'Allows users to set up notifications when new requests matching their preferences are created'
    ],
    'mainImageUrl': './images/projects/classic-car.png',
    'github': 'https://github.com/arcane52689/Classic-Car-Classifieds',
    'live' : 'http://classic-car-classifieds.net'
  },

    {
      'name': "Austroids",
      'description': 'An Australian twist on the classic game, Asteroids.  Users must navigate a koala around the continent while avoiding the deadly creatures.',
      'features': [
        'Complete javascript based game, using HTML5 canvas element as the background',
        'Uses Canvas method to draw indidual images instead of standard shapes',
        'Uses trigonometry to determine direction based on polar coordinates'
      ],
      'mainImageUrl': './images/projects/austroids.png',
      'github': 'https://github.com/arcane52689/asteroids',
      'live': 'http://www.tomjenkins.ninja/asteroids'
    },
    {
      'name': "Chess",
      'description': 'A chess game built using Ruby',
      'features': [
        'Breakdown of pieces into base classes to dry code up as much as possible',
        'Uses the colorize gem to display the background squares in alternating colors',
        'Includes a simple AI for one player games'
      ],
      'mainImageUrl': './images/projects/chess.png',
      'github': 'https://github.com/arcane52689/Chess'
    },
    {
      'name': "Snake",
      'description': 'A throw back to the classic nokia snake.',
      'features': [
        'Converts boards from 2D array to 1D string for easy rendering',
        "Uses Jquery to change classes.  Display is regulated almost entirely by Jquery's add/remove class feature (updating the score requires DOM insertion)"
      ],
      'mainImageUrl': './images/projects/snake.png',
      'github': 'https://github.com/arcane52689/Snake',
      'live': 'http://www.tomjenkins.ninja/snake'
    },

    {
      'name': 'AngularModelFactory',
      'description': 'A lightweight model and collection system created to emulate some of the functionality found in Backbone.js',
      'features': [
        'Uses prototypical inhertance instead of the Backbone/Underscore extend method',
        'BaseModel uses save to create or update the database based on the isNew function',
        'Models use fetch to grab json from the server and convert it into a model',
        'BaseCollection includes a number of ruby-like methods, including map, any, none, and each',
        'BaseCollection features a where method that takes a callback and returns a duplicate collection containing only the items for which the callback returns true. Similar to array.select in ruby'
      ],
      'mainImageUrl': './images/projects/model_factory.png'
    }

  ]
  this.classes = [
    "cars",
    "austroids",
    "chess",
    "snake",
    "models"
  ]
  this.project = this.projects[0];



  this.selectProject = function(index) {
    this.project = this.projects[index];
    this.selectedClass = this.classes[index];
  };

  this.checkItemClass = function(index) {
    if (this.project === this.projects[index]) {
      return 'selected';
    }
    return '';
  }

  this.checkDisplayClass = function() {
    return this.selectedClass;
  }

})

portfolioControllers.controller('ContactCtrl', function() {

})
