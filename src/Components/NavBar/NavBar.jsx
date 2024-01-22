import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <nav>
            <div className="brand">
                <h2>Qr Genrator</h2>
            </div>
            <ul className='navList'>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Contact</Link></li>
                <li><Link>Services</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar