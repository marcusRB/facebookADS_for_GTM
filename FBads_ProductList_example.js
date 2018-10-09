/* ProductList from Categories only for Google Tag Manager - Update 10.2018 MR//PD 
Trigger: Service webpage or Product webpage show products list as Impressions. Extract them from dataLayer
Remember: Set Tag Sequencing load before main pageView FBads tag
*/




<script>
  fbq('track', 'ViewContent', {
    content_ids: {{cJS - dlv - product.id}}, //shows first 10 elements only for large ecommerce as ARRAY
    content_type: 'product_group', // choose between products or product_group 
    product_catalog_id: '{{FB ads - product_catalog_id}}', // ID of product Catalog on Facebook repository
    content_name: '{{cJS - dlv - categoryName}}',  // name of category
    content_category: '{{cJS - dlv - categoryList}}', // category of product, STRING and concat with '>'
  });
</script>