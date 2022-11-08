import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'


export default function Navbar({loginData,logOut}) {
  
  return (
    <>
      <nav className= {`navbar navbar-expand-lg bg-dark ${style.navBg}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Noxe</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {loginData? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className='nav-link' to={"home"}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to={"movies"}>Movies</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to={"tvshows"}>Tv shows</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to={"people"}>People</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to={"about"}>About</Link>
        </li>

      </ul>:''}

      <ul className='navbar-nav m-0 list-unstyled d-flex ms-auto align-items-center'>
        {loginData? <h5 className={`mx-3 my-0 nameNav ${style.nameNav}`}>Wellcome {loginData.first_name}</h5>:''}
        <div className='social-links me-3 d-flex align-items-center'>
          <i className='fab fa-facebook'></i>
          <i className='fab fa-instagram mx-3'></i>
          <i className='fab fa-spotify'></i>
        </div>

          {!loginData? <>
            <li className="nav-item">
          <Link className={`nav-link login ${style.login}`} to={"login"}>Login</Link>
          </li>
          <li className="nav-item">
          <Link className={`nav-link register ${style.register} `} to={"register"}>Register</Link>
          </li>
          
          </> :<li className="nav-item">
          <a className={`nav-link logOut ${style.logOut}`} onClick={logOut}>Log out</a>
          </li>}
          
          
      </ul>
     
    </div>
  </div>
</nav>

    </>
  )
}
