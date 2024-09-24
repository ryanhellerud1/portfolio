import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem 0;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

function Header() {
  return (
    <Nav>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
        <NavItem><NavLink to="/skills">Skills</NavLink></NavItem>
        <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Header;