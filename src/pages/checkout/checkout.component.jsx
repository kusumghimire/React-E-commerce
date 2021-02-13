import React  from 'react';
import {connect} from 'react-redux';
import {createStructredSelector} from 'reselect';

import {selectCartItems} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = () =>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>
                   Product
                </span>
            </div>
            <div className="header-block">
                <span>
                    Description
                </span>
            </div>
            <div className="header-block">
                <span>
                    Quantity
                </span>
            </div>
            <div className="header-block">
                <span>
                    Price 
                </span>
            </div>
            <div className="header-block">
                <span>
                    Remove
                </span>
            </div>
        </div>
    </div>
);
 const mapStateToProps = createStructredSelector({
     cartItems: selectCartItems
 });

export default CheckoutPage;