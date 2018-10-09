/* mainFacebookADS pixel code customized for Google Tag Manager - Update 10.2018 MR//PD 
Trigger: tag works in all PageViews or custom webpages  
Remember: Put outside noscript PIXEL_code into custom IMG
*/



<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '{{FBads - pixelID}}'); //create a custom variable as "constant" with pixel_ID
  fbq('track', 'PageView');
</script>

<!-- move imgPixel into IMG tag -->  

<!-- End Facebook Pixel Code -->