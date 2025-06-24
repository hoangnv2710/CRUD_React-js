import { NavLink } from 'react-router-dom'
import './slidebar.css'

const SlideBar = () => {
    return (
        <div className="slidebar-panel">
            <div className="slidebar-menu-item">
                <NavLink className="slidebar-menu-item-text" to='product'>Product Management</NavLink>
            </div>
            <div className="slidebar-menu-item">
                <NavLink className="slidebar-menu-item-text" to='order'>Order Management</NavLink>
            </div>
        </div>
    )
}

export default SlideBar