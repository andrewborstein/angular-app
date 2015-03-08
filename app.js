// wrap the whole thing in an empty function
(function() {
   // var app = angular.module('application name', [dependencies]);
  var app = angular.module('gemStore', []);

  // controller for the details panel
  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  // controller for the image gallery
  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery) {
      this.current = newGallery || 0;
    };
    this.isCurrent = function(checkGallery) {
      return this.current === checkGallery;
    };
  });

  // controller for the panel
  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    { 
      name: 'Azurite', 
      price: 2.95, 
      description: 'This little gemmy went to market.',
      canPurchase: true, 
      solOut: false,
      images: [
        'img/javascript.png', 
        'img/jquery.png', 
        'img/coffeescript.png'
      ],
      specs: 'Some specs go here.',
      review: 'This gem is so sweeeet!'
    },
    { 
      name: 'Bloodstone', 
      price: 5.95, 
      description: 'This little gemmy came home.',
      canPurchase: true, 
      solOut: false,
      images: [
        'img/css3.png', 
        'img/less.png', 
        'img/sass.png'
      ],
      specs: 'Spectators n such.',
      review: 'YOLO, gem. Nahmean?'
    },
    { 
    name: 'Zircon', 
    price: 3.95, 
    canPurchase: true, 
    description: 'This little gemmy I don\'t know.',
    solOut: false,
    images: [
        'img/ruby.png',
        'img/rails.png',
        'img/rspec.png' 
      ],
      specs: 'More spectaclees.',
      review: 'OMG this gem.'
    }
  ];
})();