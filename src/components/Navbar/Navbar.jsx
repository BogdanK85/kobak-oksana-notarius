import ScrollIndicator from 'components/ScrollIndicator/ScrollIndicator';
import { useApp } from 'context/AppContext';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { Container, Nav, NavLinks } from 'styles/GlobalStyles';
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';
import { BsMoon, BsSun } from 'react-icons/bs';
import { BurgerMenu, Header, MobileNavLinks } from './Navbar.styled';

const Navbar = () => {
  const { state, dispatch } = useApp();
  const { theme } = state;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef();

  const handleThemeToggle = () => {
    dispatch({
      type: 'TOGGLE_THEME',
      payload: theme === 'light' ? 'dark' : 'light',
    });
  };

  useEffect(() => {
    const animation = gsap.fromTo(
      mobileMenuRef.current.children,
      { x: -300 },
      {
        x: 0,
        stagger: 0.02,
      }
    );

    return () => {
      animation.kill();
    };
  });

  return (
    <Header theme={theme}>
      <ScrollIndicator />
      <Container>
        <Nav>
          <BurgerMenu onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <IoMdClose /> : <HiOutlineMenuAlt2 />}
          </BurgerMenu>
          <MobileNavLinks
            className={mobileMenuOpen ? 'open' : ''}
            ref={mobileMenuRef}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Contact
              </NavLink>
            </li>
          </MobileNavLinks>
          <NavLinks>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
              >
                Contact
              </NavLink>
            </li>
          </NavLinks>
          <div className="toggle">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="theme-checkbox"
              checked={theme === 'dark'}
              onChange={handleThemeToggle}
            />
            <label htmlFor="checkbox" className="theme-label">
              <div className="ball"></div>
              <BsMoon />
              <BsSun />
            </label>
          </div>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;
