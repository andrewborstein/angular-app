// wrap the whole thing in an empty function
(function() {

  /*
  shop_id = 'fiddlefishstore'
  api_key = '3ugcu6nyygcbysomqa2ed2ja';
  etsyURL = 'https://openapi.etsy.com/v2/shops/'+shop_id+'/listings/active.js?method=GET&api_key='+api_key+'&fields=title,url,price,quantity,description&limit=100&includes=MainImage,'

  var html = "";
  $.ajax({
    url: etsyURL,
    dataType: 'jsonp',
    beforeSend: function() {
      $('#etsy').addClass('loading'); // Show loader icon
    },
    complete: function() {
      $('#etsy').removeClass('loading'); // Hide loader icon
    },
    success: function(data) {
      if (data.ok) {
        console.log(data);
        console.log(data.results);
        console.log(data.results[0].title);

        var notyet = ''
        
        // Total number of items in your shop
        var listingsTotal = 'You have '+data.count+' products in your shop';

        $.each( data.results, function ( i, item ) {
        // Specific Listing Title
        var image = this.MainImage.url_570xN;
        var title = this.title;
        var url = this.url;
        var price = this.price;
        var quantity = this.quantity;
        var id = this.listing_id;
        var desc = this.description;
        html += '<li class="item">' + 
                '<a href="' + url + '">' +
                  '<img class="avatar" src="' + image + '">' + 
                  '<h4 class="title">' + title + '</h4>' + 
                  '</a>' +
                  '<p class="desc">' + desc + '</p>' +
                  '<p class="price"><strong>Price</strong>: $' + price + '</p>' +
                  '<p class="quantity"><strong>Quantity</strong>: ' + quantity + '</p>' + 
                '</li>';
        });
        $( '.total' ).prepend(listingsTotal);
        $( '.items' ).append(html);
      } else {
        alert(data.error);
      }
    }
  });
  */

  // var app = angular.module('application name', [dependencies]);
  var app = angular.module('store', ['store-products']);

  // controller for the whole store
  app.controller('StoreController', [ '$scope', '$http', function($scope,$http) {
    var store = this;
    this.products = gems;
    store.products = [];
    shop_id = 'fiddlefishstore'
    api_key = '&api_key=3ugcu6nyygcbysomqa2ed2ja';
    fields = '&fields=title,url,price,quantity,description';
    limit = '&limit=100';
    includes = '&includes=MainImage';
    callback = '&callback=JSON_CALLBACK';
    etsyURL = 'https://openapi.etsy.com/v2/shops/'+shop_id+'/listings/active.js?method=GET'
      +api_key
      +fields
      +limit
      +includes
      +callback    

    $http({method: 'JSONP', url: etsyURL}).
      success(function(data, status) {
        $scope.status = status;
        $scope.data = data;
      }).
      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
    });

  }]);

  // controller for the reviews
  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
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