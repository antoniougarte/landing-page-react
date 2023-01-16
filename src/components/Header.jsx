import React, {useState} from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [click, setClick] = useState(false);

  const showMenu= ()=>{
    setClick(!click)
  }
  return (
    <>

    <header className='header shadow-2xl text-neutral-50'>
      <div className='container'>
        <div className='header__menu'>
          <div className='header__menu__logo'>
            <span className='text-3xl mr-1 ml-3' >
            <ion-icon name="skull-sharp"></ion-icon>
            </span>
            <span className='text-3xl ff' > Hallowen</span>
          </div>
          <nav className={`header__menu__nav ${click && "vv"}`}>
              <Link className={`py-2 px-2 ${click && "vv"}`} to='/'>Home</Link>
              <Link className={`py-2 px-2 ${click && "vv"}`} to='/about'>About</Link>
          </nav>
          <div className='btn-menu'>
            <span className=' flex cursor-pointer text-3xl mr-3'
            onClick={showMenu}>
            <ion-icon name="menu-outline"></ion-icon>
            </span>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header