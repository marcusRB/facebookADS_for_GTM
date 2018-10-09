# FACEBOOK ADS for Developers 
## How to deploy Conversion Tracking for Google Tag Manager v.102018

### Conversion Tracking
You can use the Facebook pixel to track your website visitors' actions. This is called conversion tracking. Tracked conversions appear in the Facebook Ads Manager and the Facebook Analytics dashboard, where they can be used to analyze the effectiveness of your conversion funnel and to calculate your return on ad investment. You can also use tracked conversions to define custom audiences for ad optimization and dynamic ad campaigns. Once you have defined custom audiences, we can use them to identify other Facebook users who are likely to convert and target them with your ads.

There are three ways to track conversions with the pixel:

	- standard events, which are visitor actions that we have defined and that you report by calling a pixel function
	- custom events, which are visitor actions that you have defined and that you report by calling a pixel function
	- custom conversions, which are visitor actions that are tracked automatically by parsing your website's referrer URLs

Requirements
The pixel's [base code](#base_code_pixe) must already be installed on every page where you want to track conversions.

### Standard Events
Standard events are predefined visitor actions that correspond to common, conversion-related activities, such as searching for a product, viewing a product, or purchasing a product. Standard events support parameters, which allow you to include an object containing additional information about an event, such as product IDs, categories, and the number of products purchased.

Standard Events
You can use the fbq('track') function to track the following standard events. Standard events also support parameter objects with specific object properties, which allow you to include detailed information about an event.

Event Name	Event Description	Object Properties
AddPaymentInfo

When payment information is added in the checkout flow.

A person clicks on a save billing information button.	
content_category, content_ids, contents, currency, value

None required.
AddToCart

When a product is added to the shopping cart.

A person clicks on an add to cart button.	
content_ids, content_name, content_type, contents, currency, value

None required.
Required for Dynamic Ads: content_ids, content_type, and contents

AddToWishlist

When a product is added to a wishlist.

A person clicks on an add to wishlist button.	
content_name, content_category, content_ids, contents, currency, value

None required.
CompleteRegistration

When a registration form is completed.

A person submits a completed subscription or signup form.	
content_name, currency, status, value

None required.
Contact

When a person initiates contact with your business via telephone, SMS, email, chat, etc.

A person submits a question about a product.	None required.
CustomizeProduct

When a person customizes a product.

A person selects the color of a t-shirt.	None required.
Donate

When a person donates funds to your organization or cause.

A person adds a donation to the Humane Society to their cart.	None required.
FindLocation

When a person searches for a location of your store via a website or app, with an intention to visit the physical location.

A person wants to find a specific product in a local store.	None required.
InitiateCheckout

When a person enters the checkout flow prior to completing the checkout flow.

A person clicks on a checkout button.	
content_category, content_ids, contents, currency, num_items, value

None required.
Lead

When a sign up is completed.

A person clicks on pricing.	
content_category, content_name, currency, value

None required.
PageView

This is the default pixel tracking page visits.

A person lands on your website pages.	None required.
Purchase

When a purchase is made or checkout flow is completed.

A person has finished the purchase or checkout flow and lands on thank you or confirmation page.	
content_ids, content_name, content_type, contents, currency, num_items, value

Required: currency and value

Required for Dynamic Ads: content_ids, content_type, and contents

Schedule

When a person books an appointment to visit one of your locations.

A person selects a date and time for a dentist appointment.	None required.
Search

When a search is made.

A person searches for a product on your website.	
content_category, content_ids, contents, currency, search_string, value

None required.
StartTrial

When a person starts a free trial of a product or service you offer.

A person selects a free week of your game.	
currency, predicted_ltv, value

None required.
SubmitApplication

When a person applies for a product, service, or program you offer.

A person applies for a credit card, educational program, or job.	None required.
Subscribe

When a person applies to a start a paid subscription for a product or service you offer.

A person subscribes to your streaming service.	
currency, predicted_ltv, value

None required.
ViewContent

When a key page is viewed such as a product page.

A person lands on a product details page.	
content_ids, content_name, content_type, contents, currency, value

None required.
Required for Dynamic Ads: content_ids, content_type, and contents


Custom Events
If our predefined standard events aren't suitable for your needs, you can track your own custom events, which also can be used to define custom audiences for ad optimization. Custom events also support parameters, which you can include to provide additional information about each custom event.


Tracking Custom Events
You can track custom events by calling the pixel's fbq('trackCustom') function, with your custom event name and (optionally) a JSON object as its parameters. Just like standard events, you can call the fbq('trackCustom') function anywhere between your webpage's opening and closing <body> tags, either when your page loads, or when a visitor performs an action like clicking a button.

For example, let's say you wanted to track visitors who share a promotion in order to get a discount. You could track them using a custom event like this:

<pre>
	fbq('trackCustom', 'ShareDiscount', {promotion: 'share_discount_10%'});
</pre>


### Custom Conversions
Each time the pixel loads, it automatically calls fbq('track', 'PageView') to track a PageView standard event. PageView standard events record the referrer URL of the page that triggered the function call. You can use these recorded URLs in the Events Manager to define visitor actions that should be tracked.

For example, let's say that you send visitors who subscribe to your mailing list to a thank you page. You could set up a custom conversion that tracks website visitors who have viewed any page that has /thank-you in its URL. Assuming your thank you page is the only page with /thank-you in its URL, and you've installed the pixel on that page, anyone who views it will be tracked using that custom conversion.

Once tracked, custom conversions can be used to optimize your ad campaigns, to define custom audiences, and to further refine custom audiences that rely on standard or custom events.

Since custom conversions rely on complete or partial URLs, you should make sure that you can define visitor actions exclusively based on unique strings in your website URLs.

#### Creating Custom Conversions
Custom conversions are created entirely within the Events Manager. Refer to our Advertiser Help document to learn how.


### Parameters
Parameters are optional, JSON-formatted objects that you can include when tracking standard and custom events. They allow you to provide additional information about your website visitors' actions. Once tracked, parameters can be used to further define any custom audiences you create.

To include a parameter object with a standard or custom event, format your parameter data as an object using JSON, then include it as the third function parameter when calling the fbq('track') or fbq('trackCustom') functions.

For example, let's say you wanted to track a visitor who purchased multiple products as a result of your promotion. You could do this:

<pre>
	fbq('track', 'Purchase',
  // begin parameter object data
  {
    value: 115.00,
    currency: 'USD',
    contents: [
      {
        id: '301',
        quantity: 1,
        item_price: 85.00
      },
      {
        id: '401',
        quantity: 2,
        item_price: 15.00
      }],
    content_type: 'product'
  }
  // end parameter object data
);

</pre>

Note that if you want to use data included in event parameters when defining custom audiences, key values must not contain any spaces.


#### Object Properties
You can include the following predefined object properties with any custom events, and any standard events that support them. Format your parameter object data using JSON.