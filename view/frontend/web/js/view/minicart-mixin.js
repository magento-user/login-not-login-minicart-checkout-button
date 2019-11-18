define([
    'uiComponent',
    'Magento_Customer/js/customer-data',
    'jquery',
    'ko',
    'underscore',
    'sidebar',
    'mage/translate',
    'mage/dropdown'
], function (Component, customerData, $, ko, _) {
    'use strict';

    var mixin = {
        isCustomerLoggedIn: function () {
            var customer = customerData.get('customer');
            if(customer().firstname){
                return true;
            }else{
                return false;
            }
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});