import React, { useState } from 'react';
import { Link } from 'react-scroll';

const pages = ['Home', 'Timeline', 'Projects'];

function Header() {
  const [openNavMenu, setOpenNavMenu] = useState(false);

  const handleToggleNavMenu = () => {
    setOpenNavMenu(!openNavMenu);
  };

  const handleCloseNavMenu = () => {
    setOpenNavMenu(false);
  };

  return (
    <header style={{ background: '#007EA7', position: 'fixed', width: '100%', zIndex: 100 }}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
        <Link to="Home" smooth={true} duration={500}>
          <h3 style={{ margin: 0, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: '#fff', textDecoration: 'none' }}>
            LAKSHMAN SAMVITH DUNNA
          </h3>
        </Link>

        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
          onClick={handleToggleNavMenu}
        >
          <span style={{ display: 'block', width: '24px', height: '24px', position: 'relative' }}>
            <span
              style={{
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: '#FFF',
                position: 'absolute',
                top: '50%',
                left: '0',
                transform: openNavMenu ? 'rotate(-45deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: '#FFF',
                position: 'absolute',
                top: '50%',
                left: '0',
                transform: openNavMenu ? 'rotate(45deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: '#FFF',
                position: 'absolute',
                top: '50%',
                left: '0',
                opacity: openNavMenu ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}
            />
          </span>
        </button>

        <ul
          style={{
            display: openNavMenu ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: 0,
            padding: 0,
            position: 'absolute',
            top: '100%',
            left: '0',
            width: '100%',
            backgroundColor: '#007EA7',
            listStyleType: 'none',
            zIndex: 99,
          }}
        >
          {pages.map((page) => (
            <li key={page} style={{ padding: '1rem', color: '#FFF' }}>
              <Link to={page} smooth={true} duration={700} onClick={handleCloseNavMenu} style={{ color: 'inherit', textDecoration: 'none' }}>
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;  