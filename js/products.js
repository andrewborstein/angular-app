// wrap the whole thing in an empty function
(function() {

  // var app = angular.module('application name', [dependencies]);
  var app = angular.module('store-products', []);

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'includes/product-title.html'
    };
  });

  app.directive('productReviews', function(){
    return {
      restrict: 'E',
      templateUrl: 'includes/product-reviews.html'
    };
  });

  app.directive('productGallery', function(){
    return {
      restrict: 'E',
      templateUrl: 'includes/product-gallery.html',
      controller: function() {
        this.current = 0;
        this.setCurrent = function(newGallery) {
          this.current = newGallery || 0;
        };
        this.isCurrent = function(newGallery) {
          return this.current === checkGallery;
        };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: 'E',
      templateUrl: 'includes/product-tabs.html',
      controller: function() {
        this.tab = 1;
        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };
        this.setTab = function(setTab) {
          this.tab = setTab;
        };
      },
      controllerAs: 'tab'
    };
  });

})();