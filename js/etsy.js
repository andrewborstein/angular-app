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

