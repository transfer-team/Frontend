import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'images/logo-pictcode.png';
import NotionLogo from 'images/notion.png';
import GithubLogo from 'images/github1.png';

import './styles.scss'

const Layout = (props: any) => {

  return (
    <div className='container background-1'>
      <header className="header">
        <Link to="/">
          <img src={Logo} alt="logo-pictcode" />
        </Link>
        <nav className="nav__menu">
          <Link to="/About">
            <a>About</a>
          </Link>
        </nav>
      </header>
      {props.children}
      <footer className="footer">
        <div className="footer__social">
          <a href="https://www.notion.so/Pictcode-c3f90b45e73946d1854f379c3da2bfeb">
            <img src={NotionLogo} alt="notion" />
          </a>
          <a href="https://github.com/Pictcode-team">
            <img src={GithubLogo} alt="github" />
          </a>
        </div>
        <p>Transfer team - 2021</p>
      </footer>
    </div>
  )
}

export default Layout;