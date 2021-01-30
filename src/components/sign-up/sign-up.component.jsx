import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            display:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    render(){
        const {displayName, email, password, confirmPassword}=this.state;
        return(
            <div className="sign-up">
                <h2 className="title">
                    I do not have a account
                </h2>
                <span>Sign Up with email and password</span>
                <form  className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput>
                   type='text'
                   name='displayName'
                   value={displayName}
                   onChange={this.handleChange}
                   label='Display Name'
                   required
                    </FormInput>

                </form>
            </div>
        )
    }
}