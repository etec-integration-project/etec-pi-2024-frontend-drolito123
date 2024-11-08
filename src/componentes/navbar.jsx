import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #287233;  /* Verde oscuro al estilo Lacoste */
  color: white;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
  margin: 0;
`;

const NavItems = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin-left: 1rem;

    &:hover {
      color: #a4de02;  /* Verde claro para el hover, inspirado en tonos frescos de Lacoste */
    }
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Logo>RemerasCo</Logo>
      <NavItems>
        <Link to="/">Home</Link>
        <Link to="/remeras">Remeras</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/login">Login</Link>
      </NavItems>
    </Nav>
  );
}

export default NavBar;
