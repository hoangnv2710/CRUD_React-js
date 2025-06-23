import './header.css'

const Header = () => {
    return (<>
        <div className='header-bar'>
            <div className="header-content">
                <div className="logo-box">
                    <img src="/src/assets/logo/logo-s.png" height="100%" />
                </div>
                Seller center
                {/* Trung tâm người bán */}
            </div>
        </div>
    </>)
}

export default Header;