import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const Protected = props => {
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return <Route {...props} />
}

export default Protected
