import React, {useState} from 'react';
import{GiHamburgerMenu, GIHamburgerMenu} from 'react-icons/gi' ;
import{MdOutlineRestaurantMenu} from 'react-icons/md' ;
import './Navbar.css';
import images from '../../constants/images';




const Navbar = () => {
  const [toggleMenu, setToggleMenu]  = useState(false);
  return (

    
    <nav className = "app__navbar">
      <div className = "app__navbar-logo">
        <img src = {images.gericht}/>
      </div>
      <ul className = "app__navbar-links">
        <li className = "p__opensans"> <a href = "#home"></a>Home</li>
        <li className = "p__opensans"> <a href = "#about"></a>About</li>
        <li className = "p__opensans"> <a href = "#menu"></a>Menu</li>
        <li className = "p__opensans"> <a href = "#menu"></a>Contact</li>
      </ul>
      <div className = "app__navbar-login">
        <a href = "#login" className = "p__opensans">Log In / Register</a>
        <div />
        <a href = "#" className = "p__opensans">Book Table</a>
        </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color = "fff" fontSize={27} onClick ={() => setToggleMenu(true)} />
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className ='overlay__close' onClick ={() => {setToggleMenu(false)}} />
      
        <ul className = "app__navbar-smallscreen-links">
          <li className = "p__opensans"> <a href = "#home"></a>Home</li>
          <li className = "p__opensans"> <a href = "#about"></a>About</li>
          <li className = "p__opensans"> <a href = "#menu"></a>Menu</li>
          <li className = "p__opensans"> <a href = "#menu"></a>Contact</li>
        </ul>
        </div>


      </div>

    </nav>
  )
};

export default Navbar;
