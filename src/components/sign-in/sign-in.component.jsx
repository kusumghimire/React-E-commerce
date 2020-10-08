import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handelSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password </span>
        <form onSubmit={this, handleSubmit}>
          <input type="email" name="email" value={this.state.email} required />
          <Label htmlFor="email">Email</Label>
          <input type="submit" value="Submit Form" />
        </form>

      </div>
    )
  }
}