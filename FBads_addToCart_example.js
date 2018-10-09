/* AddToCart as customEvent for Google Tag Manager - Update 10.2018 MR//PD 
Trigger: tag works when custom event 'addToCart' from dataLayer fired  
Remember: Set Tag Sequencing load before main pageView FBadsTag
*/



<script>
  fbq('track', 'AddToCart', {
    value: {{cJS - EEC - product.addToCart.price}}, //product detail Price as FLOAT
    currency: 'EUR',								// currency as STRING
    content_ids: {{cJS - dlv - product.id}},	 //shows first 10 elements only for large ecommerce. objectType ARRAY
    content_type: 'product',					// choose between products or product_group 
    product_catalog_id: '{{FB ads - product_catalog_id}}', // ID of product Catalog on Facebook repository
    content_name: '{{cJS - dlv - productName}}', // name of product, STRING
    content_category: '{{cJS - dlv - categoryList}}', // category of product, STRING and concat with '>'
  });
</script>