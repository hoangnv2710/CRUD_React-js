import { Outlet } from 'react-router-dom';
import Header from './components/layout/header'
import './styles/global.css'
import './styles/app.css'
import { getUserById } from './services/api.service';

const App = () => {

  getUserById('684509b2c2129f635ad64ae7')

  return (
    <div id="app">
      <Header />
      <Outlet />
    </div>
  )
}

export default App;