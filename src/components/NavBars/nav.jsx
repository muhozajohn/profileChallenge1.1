import {Link,NavLink, useLocation,} from 'react-router-dom'
import './nav.css'
import Logo from '../../images/logo.png'
import { links } from '../../data'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useState } from 'react'

function Nav() {
  const [DisplayMenu,SetDisplayMenu] =useState(false);
  // const [isActive,SetIsActive] = useState('/');
  const location = useLocation()
  
  return (
    <nav>
      <div className="container nav_container">
        <Link to='/' className='logo' onClick={()=> SetDisplayMenu(false)}> <img src={Logo} alt="Nav Logo"/> </Link>
        <ul className={`nav_links ${DisplayMenu ? 'display-nav' : 'hide-nav'}`}>
            {
              links.map(({name, path}, index) =>{
                return(
                  <li key={index}><NavLink to={path} className={location.pathname === path ? 'active-nav' : ''} onClick={()=>SetDisplayMenu(prev => !prev)} >{name}</NavLink></li>
                )
              })
            }
        </ul>
        <button className='btns' onClick={()=>SetDisplayMenu(prev => !prev)}>
          { DisplayMenu ? <FaTimes /> :  <FaBars /> }
        </button>
      </div>
    </nav>
  )
}

export default Nav