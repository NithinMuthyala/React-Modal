import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
        alt="website logo"
        className="logo"
      />
    </Link>

    {/* <GiHamburgerMenu className="nav-icon" /> */}
    <Popup
      modal
      trigger={
        <button type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu className="nav-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <div className="close-container">
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="closeicon" />
            </button>
          </div>
          <ul className="navigater-container">
            <li className="item">
              <Link to="/" className="flex-container">
                <button
                  data-testid="hamburgerIconButton"
                  type="button"
                  onClick={() => close()}
                >
                  <AiFillHome className="icon" />
                </button>
                <p className="text">Home</p>
              </Link>
            </li>
            <li className="item">
              <Link to="/about" className="flex-container">
                <button
                  type="button"
                  data-testid="hamburgerIconButton"
                  onClick={() => close()}
                >
                  <BsInfoCircleFill className="icon" />
                </button>
                <p className="text">About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default Header
