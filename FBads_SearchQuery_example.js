/* SearchQuery as ViewContent for Google Tag Manager - Update 10.2018 MR//PD 
Trigger: fire tag when search query exist in the URL or searchQuery event fired
Remember: Set Tag Sequencing load before main pageView FBads tag
*/

<script>
  fbq('track', 'Search', {
    search_string: '{{URL - SearchQuery}}', //search term or terms as STRING
    content_ids: {{cJS - dlv - product.id}}, //show only first 10 elements in ARRAY
  	content_type: 'product', // choose between products or product_group 
    content_category: '{{cJS - dlv - categoryName}}' // category of product, STRING and concat with '>'
  });
</script>
