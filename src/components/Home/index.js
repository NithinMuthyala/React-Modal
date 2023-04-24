import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="lg-image"
      />
    </div>
  </div>
)

export default Home
