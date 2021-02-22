import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
const priceForStripe = price*100;
const publishableKey ='pk_test_51INbtmEDV1OQTgdxgHzm7ueWWv7IcD9muKeX0zzmkelbghZjGHBMm0tCDVzp8bEgf0QX4AR6wOnXoU64fDEMP17K00ouxgUWja'

return(
    <StripeCheckout 
    
    />
)
}