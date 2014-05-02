var ostb = angular.module('ostb', [
  'ui.router',
  'factories.users',
  'factories.projects'
])

.config(function($stateProvider) {
  console.log($stateProvider);
  $stateProvider
  .state('login', {
    url: "/login",
    views: {
      'content': {
        templateUrl: 'partials/login.html',
        controller: 'Login'
      }
    }
  })
  .state('logout', {
    url: "/logout",
    views: {
      'content': {
        template: '<h1>All out of logs!</h1>',
        controller: 'Example'
      }
    }
  })
  .state('dashboard', {
    url: "/dashboard",
    views: {
      'content': {
        templateUrl: 'partials/dashboard.html',
        controller: 'Dashboard'
      }
    }
  })
  .state('example', {
    url: "/example",
    views: {
      'content': {
        template: '<h1>What a good example!</h1>',
        controller: 'Example'
      }
    }
  })
  .state('editor', {
    url: "/editor",
    views: {
      'content': {
        templateUrl: 'partials/editor.html',
        controller: 'Example1'
      }
    }
  })
  .state('versions', {
    url: "/versions",
    views: {
      'content': {
        templateUrl: 'partials/versions.html',
        controller: 'Example'
      }
    }
  })
  .state('projectCrud', {
    url: "/projectCrud",
    views: {
      'content': {
        templateUrl: 'partials/projectCrudTest.html',
        controller: 'Example'
      }
    }
  })
  // .state('user', {
  //   url: "/user",
  //   views: {
  //     'content': {
  //       templateUrl: 'partials/page.html',
  //       controller: 'ProjectDetailController'
  //     }
  //   }
  // })
  .state('project', {
    url: "/:projectName",
    views: {
      'content': {
        templateUrl: 'partials/page.html',
        controller: 'ProjectDetailController'
      }
    }
  })
})

// This is test data.
window.documentsData = {
  pages: {
    1: {
      name: "Mental Disorders of Coal Miners in Pre-Unification East Germany"
    }
  },
  books: {
    1: {
      name: "Mining Coal Miners: Spelunking the Depths of The Coal Miner Psyche",
      pages: {

      }
    }
  }
};
console.log(window.documentsData);

