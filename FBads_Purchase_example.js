/* ProductPurchase as custom Event for Google Tag Manager - Update 10.2018 MR//PD 
Trigger:  tag fire when customEvent 'transaction' or similar purchase event, populate dataLayer at the end of transaction (after payment gateway or on thank you page)
Remember: Set Tag Sequencing load before main pageView FBads tag
*/


<!--Product Purchase from Hybris only - Update 09.2018 MR//PD -->

<script>
  fbq('track', 'Purchase', {
    value: {{EE - Revenue}}, //purchase revenue as FLOAT
    currency: 'EUR',		
    contents: {{dlv - EEC ecommerce.purchase.products}}, //shows array of purchase
    content_type: 'product',
    product_catalog_id: '{{FB ads - product_catalog_id}}',
  });
</script>
