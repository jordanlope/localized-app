import React, { Component } from 'react';
import './Login.css';
import { withRouter } from 'react-router-dom';

export default class Login extends Component {
//     static contextType = RealtorContext  

    state = { error: null }

    // handleSubmit = ev => {
    //   ev.preventDefault()
    //   const { user_name, password } = ev.target

    //   this.setState({ error: null })

    //   AuthApiService.postLogin({
    //     user_name: user_name.value,
    //     password: password.value,
    //   }).then(res => {
    //     console.log('Respond after login', res.user)
    //     console.log(res.user.full_name)
    //     this.context.setRealtor(
    //       res.user.realtorid,
    //       res.user.full_name,
    //       res.user.user_name,
    //       res.user.email,
    //       res.user.description
    //     )

    //     console.log('Realtors: ', this.context.getRealtor())

    //     user_name.value = ''
    //     password.value = ''
    //     TokenService.saveAuthToken(res.authToken)

    //     this.props.history.push('/addFarmHouse')
    //   }).catch(res => {
    //     console.log(res.error)
    //     this.setState({ error: res.error })
    //   })
    // }

    render() {
      //const { error } = this.state
      return (
        <form 
          className='LoginForm'
          onSubmit={this.handleSubmit}>
          {/* <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div> */}
          <div className='user_name'>
            <label htmlFor='LoginForm__user_name'>
              User name
            </label>
            <input
              required
              name='user_name'
              id='LoginForm__user_name'>
            </input>
          </div>
          <div className='password'>
            <label htmlFor='LoginForm__password'>
              Password
            </label>
            <input
              required
              name='password'
              type='password'
              id='LoginForm__password'>
            </input>
          </div>
          <button type='submit'>
            Login
          </button>
        </form>
      );
    }
}