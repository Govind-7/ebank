import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {psw: '', loginStatus: false, id: '', errorMsg: ''}

  submitunction = async event => {
    const {psw, id} = this.state
    event.preventDefault()
    // const userId = document.getElementById('userId').value
    // const passWrd = document.getElementById('pin').value
    const url = 'https://apis.ccbp.in/ebank/login'
    const details = {user_id: id, pin: psw}
    // console.log(details)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      this.setState({loginStatus: false})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg, loginStatus: true})
      //   console.log(data)
    }
  }

  changeId = event => {
    this.setState({id: event.target.value})
  }

  changePsw = event => {
    this.setState({psw: event.target.value})
  }

  render() {
    const {psw, loginStatus, errorMsg, id} = this.state
    // Cookies.remove('jwt_token')
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="m-bg">
        <div className="bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />

          <form onSubmit={this.submitunction}>
            <h1>Welcome Back!</h1>
            <label htmlFor="userId">User ID</label>
            <br />
            <input
              className="input-pin"
              value={id}
              placeholder="Enter User ID"
              onChange={this.changeId}
              type="text"
              id="userId"
            />
            <br />
            <label htmlFor="pin">PIN</label>
            <br />
            <input
              className="input-pin"
              placeholder="Enter PIN"
              value={psw}
              onChange={this.changePsw}
              type="password"
              id="pin"
            />
            <br />
            <button className="login-but" type="submit">
              Login
            </button>
            {loginStatus ? <p className="error-msg">{errorMsg}</p> : ''}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
