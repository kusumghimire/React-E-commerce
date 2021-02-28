import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebase.utils';
import  CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv,OptionLink} from './header.styles.jsx';
// import { connectAdvanced } from 'react-redux';

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>
      {
        currentUser ?
        <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>
        :
        <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
      {hidden ? null : <CartDropdown />
      }
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);