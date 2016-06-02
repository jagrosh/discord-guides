var renderer = new marked.Renderer()
renderer.image = function(href,title,text){var out='<a href="'+href+'" target="_blank"><img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":"></a>";return out}

window.app = angular.module('TheCrossroadsGuides', [
  'ngAnimate',
  'ngMaterial',
  'ui.router'
])

window.app
  .config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}')
  })

  .config(function ($mdThemingProvider, $mdIconProvider) {
    // Material design theming
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('cyan')
      .warnPalette('amber')

    $mdThemingProvider.theme('input', 'default')
      .primaryPalette('grey')

    // Material design font selection
    $mdIconProvider.defaultFontSet('material-icons')
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    // Default state
    $urlRouterProvider.otherwise('/')

    // State definitions
    $stateProvider
      .state('index', {
        url: '/',
        template: '<div id="document-content" class="markdown-body"><p class="_text-center" style="margin: 100px 0;">Loading page content.</p></div>',
        controller: function ($scope, $rootScope, $http) {
          $http.get('https://raw.githubusercontent.com/TheCrossroads/discord-guides/master/index.md')
            .then(function (response) {
              $rootScope.ghLink = 'https://github.com/TheCrossroads/discord-guides/blob/master/index.md'
              document.getElementById('document-content').innerHTML = marked(response.data, {renderer: renderer})
            })
        }
      })

      .state('viewDocument', {
        url: '/:category/:document',
        template: '<div id="document-content" class="markdown-body"><p class="_text-center" style="margin: 100px 0;">Loading page content.</p></div>',
        controller: function ($scope, $rootScope, $state, $stateParams, $http, CATEGORIES) {
          var category = false

          for (var i = 0; i < CATEGORIES.length; i++) {
            if (CATEGORIES[i].file === $stateParams.category) {
              category = CATEGORIES[i]
            }
          }

          if (category === false) {
            return $state.go('index')
          }

          var doc = false

          for (var j = 0; j < category.documents.length; j++) {
            if (category.documents[j].file === $stateParams.document) {
              doc = category.documents[j]
            }
          }

          if (doc === false) {
            return $state.go('index')
          }

          $http.get('https://raw.githubusercontent.com/TheCrossroads/discord-guides/master/' + category.file + '/' + doc.file)
            .then(function (response) {
              $rootScope.ghLink = 'https://github.com/TheCrossroads/discord-guides/blob/master/' + category.file + '/' + doc.file
              document.getElementById('document-content').innerHTML = marked(response.data, {renderer: renderer})
            })
        }
      })
  })

  .run(function ($rootScope, $mdSidenav) {
    // GitHub link for current doc
    $rootScope.ghLink = 'https://github.com/TheCrossroads/discord-guides'

    // Global navigation controller
    $rootScope.navigation = {
      open: function () {
        $mdSidenav('nav').open()
      },

      close: function () {
        $mdSidenav('nav').close()
      },

      toggle: function () {
        $mdSidenav('nav').toggle()
      },

      opened: false
    }

    // Angular watch for navigation 'open' state changes
    $rootScope.$watch(function () { return $mdSidenav('nav').isOpen() }, function (open) {
      $rootScope.navigation.opened = open
    })
  })

  .controller('ContentCtrl', function ($scope, $mdMedia) {
    $scope.gtSm = false

    $scope.$watch(function () { return $mdMedia('gt-sm') }, function (gtSm) {
      $scope.gtSm = gtSm
    })
  })

  .controller('HeaderCtrl', function ($scope, $mdMedia) {
    $scope.gtMd = false

    $scope.$watch(function () { return $mdMedia('gt-md') }, function (gtMd) {
      $scope.gtMd = gtMd
    })
  })

  .controller('SidenavCtrl', function ($scope, CATEGORIES) {
    $scope.categories = CATEGORIES
  })

;(function () {
  var initInjector = angular.injector(['ng'])
  var $http = initInjector.get('$http')

  $http.get('https://raw.githubusercontent.com/TheCrossroads/discord-guides/master/categories.json')
    .then(function (response) {
      var data = response.data

      for (var i = 0; i < data.length; i++) {
        if (data[i].file === 'example') {
          data.splice(i, 1)
        }
      }

      angular.module('TheCrossroadsGuides').constant('CATEGORIES', data)

      angular.element(document).ready(function () {
        angular.bootstrap(document, ['TheCrossroadsGuides'])
      })
    })
})()
