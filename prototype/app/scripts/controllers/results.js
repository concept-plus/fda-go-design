'use strict';

/**
 * @ngdoc function
 * @name fdagoApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the fdagoApp
 */
angular.module('fdagoApp').controller('ResultsCtrl', function($rootScope, $scope, $location , $timeout) {
  // set canvas id
  angular.element('body').attr('id', 'results-page');

  // sample data
  $scope.results = {
    'event': {
        total: 100,
        items: []
    },
    'label': {
        total: 100,
        items: []
    },
    'recall': {
        total: 100,
        items: []
    }
  };
  $scope.resultsMessage = 'Results returned....';
  $scope.selectedItem = null;
  $scope.selectedSubcategory = 'event';

  $location.url();
  var path = $location.path();
  var pathItems = path.split('/');
  var mobileView = function() {
      angular.element('#sidemenu .sidemenu-content').attr('aria-hidden', 'false');
      angular.element('#sidebar').hide();
      angular.element('#sidemenu').removeClass('hidden');
      angular.element('#navigation').show();
    },
    desktopView = function() {
      angular.element('#navigation').hide();
      angular.element('#sidemenu').addClass('hidden');
      angular.element('#sidemenu .sidemenu-content').attr('aria-hidden', 'true');
      angular.element('#sidebar').show();
    };

  $scope.category = decodeURIComponent(pathItems[pathItems.length - 2]);
  $scope.search = decodeURIComponent(pathItems[pathItems.length - 1]);

  // responsive monitor
  mobileView();
  if (angular.element(window).innerWidth() > 991) {
    desktopView();
  }
  angular.element(window).on('resize.doResize', function (){
    $scope.$apply(function(){
      if (angular.element(window).innerWidth() < 992) {
        // Handle mobile view
        mobileView();
      } else {
        // Handle desktop view
        desktopView();
      }
      $rootScope.resetSidemenu();
    });
  });

  $scope.$on('$destroy',function (){
       angular.element(window).off('resize.doResize'); //remove the handler added earlier
  });

  // datatables
  $scope.drawDataTable = function(){
    if(angular.element('#event-results-table_wrapper').length === 0){
      angular.element('#event-results-table').DataTable({
        'ordering': false,
        'oLanguage': {
          'sSearch': 'Filter:'
        },
        'responsive': true
      });
    }
    if(angular.element('#label-results-table_wrapper').length === 0){
        angular.element('#label-results-table').DataTable({
        'ordering': false,
        'oLanguage': {
          'sSearch': 'Filter:'
        },
        'responsive': true
      });
    }
    if(angular.element('#recall-results-table_wrapper').length === 0){
        angular.element('#recall-results-table').DataTable({
        'ordering': true,
        'order': [[0, 'desc']],
        'oLanguage': {
          'sSearch': 'Filter:'
        },
        'responsive': true
      });
    }
  };

  // tab events
  $scope.onClickTab = function(id) {
    $timeout(function() {
        angular.element('#'+id).tab('show');
    },100);
  };

  $timeout(function(){
    $rootScope.showLoading(false);
    if ($scope.category.indexOf('-recall') > -1){
      angular.element('#detail-tabs a:last').tab('show');
    } else {
      angular.element('#detail-tabs a:first').tab('show');
    }
    $scope.drawDataTable();
    angular.element('#results-container').addClass('in');
  }, 1000);

  $scope.collapse = function(index){
    angular.element('#result-' + index).collapse('toggle');
  };
});

