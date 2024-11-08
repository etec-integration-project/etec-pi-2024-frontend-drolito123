import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #004225;  /* Un verde más oscuro para el fondo */
  color: white;
  text-align: center;
  padding: 1rem;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 RemerasCo - Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
