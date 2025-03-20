import React from 'react';
import horizontalLogo from '../../my-loop-logo.svg';
import { HeaderContainer, LogoContainer, Logo, Button } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={horizontalLogo} alt="My Loop of Ideas" />
      </LogoContainer>
      <Button>Sign Up</Button>
      <Button>Log In</Button>
    </HeaderContainer>
  );
};

export default Header;