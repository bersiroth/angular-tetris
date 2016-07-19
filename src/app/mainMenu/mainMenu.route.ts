/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/mainMenu/mainMenu.html',
      controller: 'MainMenuController',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}
