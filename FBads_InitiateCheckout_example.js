/* InitiateCheckout as ViewContent for Google Tag Manager - Update 10.2018 MR//PD 
Trigger: when Step 1 loaded or Step 2 initiate, extract checkout value from dataLayer
Remember: Set Tag Sequencing load before main pageView FBads tag
*/

<script>
  fbq('track', 'InitiateCheckout', {
    value: {{cJS - EEC - checkoutValue}}, //as FLOAT
    currency: 'EUR',
  });
</script>