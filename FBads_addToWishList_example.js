/* WishList as ViewContent for Google Tag Manager - Update 10.2018 MR//PD 
Trigger: Service webpage or Product webpage when fire Wishlist button or custom event
Remember: Set Tag Sequencing load before main pageView FBads tag
*/

<!-- Update 28.09.2018 v2 MR//PD 
Product addToWishList from categoryList and detailProduct -
NOTE: script use DOM scraping, please check last version of your CMS for to get the values, instead doesn't work well or value returned will be null-->

<script>
  fbq('track', 'AddToWishlist', {
    value: {{cJS - EEC - product.detail.price}}, //product detail Price as FLOAT
    currency: 'EUR',							// currency as STRING
    content_ids: {{wishlist prodId}}, 			//shows objectType ARRAY
    content_type: 'product',					// choose between products or product_group 
    product_catalog_id: '{{FB ads - product_catalog_id}}', // ID of product Catalog on Facebook repository
    content_name: '{{cJS - favoriteName}}',  			// name of product, STRING
    content_category: '{{cJS - dlv - categoryList}}'	// category of product, STRING and concat with '>'
  });
</script>