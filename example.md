# Conversion Tracking - Facebook Pixel - Documentation

## Standard Events

Standard events are predefined visitor actions that correspond to common, conversion-related activities, such as searching for a product, viewing a product, or purchasing a product. Standard events support [parameters][1], which allow you to include an object containing additional information about an event, such as product IDs, categories, and the number of products purchased.

### Tracking Standard Events

All standard events are tracked by calling the pixel's `fbq('track')` function, with the event name, and (optionally) a JSON object as its parameters. For example, here's a function call to track when a visitor has completed a purchase event, with currency and value included as a parameter:
    
    
    fbq('track', 'Purchase', '{currency: 'USD', value: 30.00}');

If you called that function, it would be tracked as a purchase event in the Events Manager:

![][2]

You can call the `fbq('track')` function anywhere between your web page's opening and closing `` tags, either when the page loads, or when a visitor completes an action, such as clicking a button.

For example, if you wanted to track a standard purchase event _after a visitor has completed the purchase_, you could call the `fbq('track')` function on your _purchase confirmation page_, like this:
    
    
    
      ...
      
      ...
    

If instead you wanted to track a standard purchase event _when the visitor clicks a purchase button_, you could tie the `fbq('track')` function call to the purchase button _on your checkout page_, like this:
    
    
    Purchase
    

Note that the example above uses jQuery to trigger the function call, but you could trigger the function call using any method you wish.

### Standard Events

You can use the `fbq('track')` function to track the following standard events. Standard events also support [parameter][3] objects with specific object properties, which allow you to include detailed information about an event.

Event Name | Event Description | Object Properties | 
| 

`AddPaymentInfo`

 | 

When payment information is added in the checkout flow.

_A person clicks on a save billing information button._ | 

`content_category`, `content_ids`, `contents`, `currency`, `value`

_None required._ |  
| --------------||||||  
|  

`AddToCart`

 | 

When a product is added to the shopping cart.

_A person clicks on an add to cart button._ | 

`content_ids`, `content_name`, `content_type`, `contents`, `currency`, `value`

_None required._

_Required for Dynamic Ads: `content_ids`, `content_type`, and `contents`_

 |  | | |
| 

`AddToWishlist`

 | 

When a product is added to a wishlist.

_A person clicks on an add to wishlist button._ | 

`content_name`, `content_category`, `content_ids`, `contents`, `currency`, `value`

_None required._ | 
| 

`CompleteRegistration`

 | 

When a registration form is completed.

_A person submits a completed subscription or signup form._ | 

`content_name`, `currency`, `status`, `value`

_None required._ | 
| 

`Contact`

 | 

When a person initiates contact with your business via telephone, SMS, email, chat, etc.

_A person submits a question about a product._ | _None required._ | 
| 

`CustomizeProduct`

 | 

When a person customizes a product.

_A person selects the color of a t-shirt._ | _None required._ | 
| 

`Donate`

 | 

When a person donates funds to your organization or cause.

_A person adds a donation to the Humane Society to their cart._ | _None required._ | 
| 

`FindLocation`

 | 

When a person searches for a location of your store via a website or app, with an intention to visit the physical location.

_A person wants to find a specific product in a local store._ | _None required._ | 
| 

`InitiateCheckout`

 | 

When a person enters the checkout flow prior to completing the checkout flow.

_A person clicks on a checkout button._ | 

`content_category`, `content_ids`, `contents`, `currency`, `num_items`, `value`

_None required._ | 
| 

`Lead`

 | 

When a sign up is completed.

_A person clicks on pricing._ | 

`content_category`, `content_name`, `currency`, `value`

_None required._ | 
| 

`PageView`

 | 

This is the default pixel tracking page visits.

_A person lands on your website pages._ | _None required._ | 
| 

`Purchase`

 | 

When a purchase is made or checkout flow is completed.

_A person has finished the purchase or checkout flow and lands on thank you or confirmation page._ | 

`content_ids`, `content_name`, `content_type`, `contents`, `currency`, `num_items`, `value`

_**Required: **`currency` and `value`_

_Required for Dynamic Ads: `content_ids`, `content_type`, and `contents`_

 | 
| 

`Schedule`

 | 

When a person books an appointment to visit one of your locations.

_A person selects a date and time for a dentist appointment._ | _None required._ | 
| 

`Search`

 | 

When a search is made.

_A person searches for a product on your website._ | 

`content_category`, `content_ids`, `contents`, `currency`, `search_string`, `value`

_None required._ | 
| 

`StartTrial`

 | 

When a person starts a free trial of a product or service you offer.

_A person selects a free week of your game._ | 

`currency`, `predicted_ltv`, `value`

_None required._ | 
| 

`SubmitApplication`

 | 

When a person applies for a product, service, or program you offer.

_A person applies for a credit card, educational program, or job. _ | _None required._ | 
| 

`Subscribe`

 | 

When a person applies to a start a paid subscription for a product or service you offer.

_A person subscribes to your streaming service._ | 

`currency`, `predicted_ltv`, `value`

_None required._ | 
| 

`ViewContent`

 | 

When a key page is viewed such as a product page.

_A person lands on a product details page._ | 

`content_ids`, `content_name`, `content_type`, `contents`, `currency`, `value`

_None required._
