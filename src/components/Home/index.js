import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const logoutFunction = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/ebank/login')
    // console.log(history)
  }

  return (
    <div className="h-bg">
      <div className="but-align">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <button onClick={logoutFunction} type="button">
          Logout
        </button>
      </div>
      <h1>Your Flexibility, Our Excellence</h1>
      <img
        alt="digital card"
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
      />
    </div>
  )
}

export default Home
