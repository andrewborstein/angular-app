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

  // controller for the reviews
  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
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
      reviews: [{
          body: 'This gem is so sweeeet!',
          stars: '2',
          author: 'joe@schmoe.com',
        }]
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
      reviews: [{
          body: 'YOLO, gem. Nahmean?',
          stars: '4',
          author: 'guy@smiley.com',
        }]
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
      reviews: [{
          body: 'OMG this gem is a GEM.',
          stars: '5',
          author: 'person@email.com',
        }, {
          body: 'Ohhh boy Here we go.',
          stars: '1',
          author: 'dude@wheresmycar.com',
        }]
    }
  ];
})();