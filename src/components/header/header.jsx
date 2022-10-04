import './header.css'
import '../../data'
import { Link } from 'react-router-dom'
import Jump from '../../images/jump.png'
const Header = () => {
  return (
<header className='main_header'>
  <div className="container header-container">
    <div className="header-left">
      <h4>#100DaysofWorkOut</h4>
      <h1>Join The Legends of The Fitness World</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia esse libero, corporis dicta doloribus perferendis!</p>
      <Link to="/plans" className='btn lg'>Get Started</Link>
    </div>
    <div className="header-right">
      <div className="header-circle"></div>
      <div className="header-image">
        <Link to="/gallery"><img src={Jump} alt="logo img" /></Link>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header