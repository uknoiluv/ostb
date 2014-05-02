ostb.controller('IndexController', function($scope) {
})

.controller('Login', function($scope) {
  console.log('Login controller');
})

.controller('Dashboard', function($scope) {
  console.log('Dashboard');
})

.controller('Example', function($scope) {
  console.log('Example controller');
})

.controller('IndexContent', function($scope){
  $scope.indexContent = 'test';
})

.controller('Example1', function($scope) {
    var init = function() {
    var converter = new Showdown.converter();
    var view = document.getElementById('view');
    var editor = ace.edit("editor");
    console.log('editor', editor);
    editor.setReadOnly(true);
    editor.session.setUseWrapMode(true);
    editor.setShowPrintMargin(false);
    editor.resize(true);
      
    var connection = new sharejs.Connection('/channel');

    connection.open('', function(error, doc) {
      if (error) {
        console.error(error);
        return;
      }

      doc.attach_ace(editor);
      editor.setReadOnly(false);

      var render = function() {
        view.innerHTML = converter.makeHtml(doc.snapshot);
      };

      window.doc = doc;
      
      render();
      doc.on('change', render);

      editor.getSession().on('changeScrollTop',function(scroll){
        var lengthScroll = $('#right')[0].scrollHeight - $('#right').height();
        $('#right').scrollTop(scroll);
        console.log('editor scroll hit', scroll);
      });

    });
  };
  init();
  console.log('Example1 controller');
})


// ----- project CRUD controllers -----

.controller('VersionsController', function($scope, ProjectsFactory) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.getVersions = function(project) {
    ProjectsFactory.getVersions(project)
    .then(function(data) {
      $scope.versions = data;
      console.log($scope.versions);
    })
    .catch(function(err) {
      $scope.error = err;
    });
  };
})

.controller('ProjectsController', function($scope, ProjectsFactory) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.createProject = function(project) {
    ProjectsFactory.create(project)
    .then(function() {
      console.log('success');
    })
    .catch(function(err) {
      $scope.error = err;
    });
  };

  $scope.cloneProject = function(project) {
    ProjectsFactory.clone(project)
    .then(function() {
      console.log('success');
    })
    .catch(function(err) {
      $scope.error = err;
    });
  };

  $scope.deleteProject = function(project) {
    ProjectsFactory.delete(project)
    .then(function() {
      console.log('success');
    })
    .catch(function(err) {
      $scope.error = err;
    });
  };

  $scope.commitProject = function(project) {
    var temp = project.commitBody;
    project.commitBody = {}
    project.commitBody['content.md'] = temp;

    ProjectsFactory.commit(project)
    .then(function() {
      console.log('success');
    })
    .catch(function(err) {
      $scope.error = err;
    });
  };
})

.controller('ProjectsListController', function($scope, ProjectsFactory) {  
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.getProjects = function(user) {
    ProjectsFactory.getProjects(user)
    .then(function(data) {
      $scope.projects = data;
      console.log($scope.projects);
    })
    .catch(function(err) {
      $scope.error = err;
    });
  };

  $scope.projects = [{"_id":"5362922047d8d6c5a5000003","commits":{"1e331319524e4dfd877a41f9228dcda304a526e6":{"commitMessage":"version 2","date":"2014-05-01T18:38:44.715Z"},"962189663b16694c661c4035e8c40d6fc29cb984":{"commitMessage":"Created new project pro","date":"2014-05-01T18:27:44.397Z"}},"repo":"pro","username":"adrian"}]

})

.controller('UsersController', function($scope, UsersFactory) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.createUser = function(user) {
    UsersFactory.create(user)
    .then(function() {
      console.log('success');
    })
    .catch(function(err) {
      $scope.error = err;
    });
  };

  $scope.deleteUser = function(user) {
    UsersFactory.delete(user)
    .then(function() {
      console.log('success');
    })
    .catch(function(err) {
      $scope.error = err;
    });
  };
})


.controller('ProjectDetailController', function($scope, $stateParams) {
  console.log($stateParams);
})

