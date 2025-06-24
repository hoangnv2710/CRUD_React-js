import { Outlet } from 'react-router-dom';
import Header from './components/layout/header'
import './styles/global.css'
import './styles/app.css'
import { getUserById } from './services/api.service';
import SlideBar from './components/layout/slidebar';

const App = () => {

  getUserById('684509b2c2129f635ad64ae7')

  return (
    <div id="app">
      <Header />
      <div className="app-container">
        <SlideBar />
        <Outlet />
      </div>

    </div>
  )
}

export default App;