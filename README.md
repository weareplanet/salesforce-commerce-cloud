# Salesforce Commerce Cloud WeArePlanet Cartridge

WeArePlanet provides LINK cartridges to integrate with Salesforce Commerce Cloud (SFCC). These cartridges enable a SFRA storefront to use the WeArePlanet payment service. These cartridges support SFRA version 4.x.x.

## Requirements

It is required to have an WeArePlanet account to use these cartridges. Please signup [here](https://www.weareplanet.com/contact/sales).

## Integration
Our cartridges integrate the checkout process with WeArePlanet. Each of the steps below are required to get your WeArePlanet integration working. You need admin rights to the instance you are uploading these cartridges to.

### 1. Upload cartridge

_To import the cartridges please use [Salesforce Commerce Cloud CLI](https://github.com/SalesforceCommerceCloud/sfcc-ci). Check the [`sfcc-ci code:deploy`](https://github.com/SalesforceCommerceCloud/sfcc-ci#pushing-code) command._

1. Upload these cartridges to your site 

2. Administration >  Sites >  Manage Sites > *YourSite* > Settings : Add `int_weareplanet:` to the beginning of the __Cartridges:__ string and apply

3. Administration >  Sites >  Manage Sites > Business Manager  > Settings : Add `bm_weareplanet:int_weareplanet:` to the beginning of the __Cartridges:__ string and apply. Please do this for each of the sites.

4. Administration >  Organization >  Roles > Administrator - Business Manager Modules : Enable `WeArePlanet` for each of the users you would like to be able to configure `WeArePlanet`.

### 2. Upload metadata
Please rename the folder `yourSiteId` to the name of your site, and please replicate the folder for each of your sites before zipiping.
1. `zip metadata`
2. Administration >  Site Development >  Site Import & Export > Import > metadata.zip

### 3. Add weareplanet payment method
* Merchant Tools >  Ordering >  Payment Methods : Verify that `WEAREPLANET` is the only payment method enabled. Optionally you can leave `CREDIT_CARD` enabled also.

### 4. Add weareplanet payment processor

* Merchant Tools >  Ordering >  Payment Processors > Verify that a processor with ID: `WEAREPLANET` exists.


### 5. Apply credentials
Have your WeArePlanet credentials handy.

* Merchant Tools > Site Preferences > WeArePlanet

If the path `Merchant Tools > Site Preferences > WeArePlanet` does not exist, please repeat steps 1.3 and 1.4. 


### 6. Profit
Congratulations! You are now integrated with WeArePlanet.

## Installation, Usage and Configuration

Installation, Usage and Configuration is explained in WeArePlanet's [online documentation](https://plugin-documentation.weareplanet.com/weareplanet/salesforce-commerce-cloud/1.0.16/docs/en/documentation.html).

## Support

For further questions regarding the integration to WeArePlanet, contact the [WeArePlanet Support](https://paymentshub.weareplanet.com/space/select?target=/support).

## License

Please see the [license file](https://github.com/weareplanet/weareplanet-salesforce-commerce-cloud/blob/master/LICENSE) for more information.