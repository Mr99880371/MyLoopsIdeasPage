import React from 'react';
import horizontalLogo from '../../my-loop-logo.svg';
import { HeaderContainer, LogoContainer, Logo, Button, LogoutLink } from './styles';

const SignUpForm = ({ onSubmit, name, setUserName }) => (
  <div>
    <input value={name} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Name"/>
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button onClick={onSubmit} type="submit">Sign Up</button>
  </div>
);

const LogInForm = ({ onSubmit }) => (
  <div>
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button onClick={onSubmit} type="submit">Log In</button>
  </div>
);

const Welcome = ({ name }) => {
  return <h1 style={{ fontFamily: 'cursive' }}>Hello {name}!</h1>;
};

const Header = () => {
  const [loginIn, setLoginIn] = React.useState(localStorage.getItem('isLoggedIn') === 'true');
  const [showSignUp, setShowSignUp] = React.useState(false);
  const [showLogIn, setShowLogIn] = React.useState(false);
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');

  const handleSignUp = () => {
    setShowSignUp(true);
    setShowLogIn(false);
  };

  const handleLogIn = () => {
    setShowLogIn(true);
    setShowSignUp(false);
  };

  const handleSubmit = () => {
    setLoginIn(true);
    setShowSignUp(false);
    setShowLogIn(false);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', userName);
  };

  const handleLogout = () => {
    setLoginIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={horizontalLogo} alt="My Loop of Ideas" />
      </LogoContainer>
      {loginIn ? (
        <>
          <Welcome name={userName} />
          <LogoutLink onClick={handleLogout}>Sair</LogoutLink>
        </>
      ) : showSignUp ? (
        <SignUpForm onSubmit={handleSubmit} name={userName} setUserName={setUserName} />
      ) : showLogIn ? (
        <LogInForm onSubmit={handleSubmit} />
      ) : (
        <div>
          <Button onClick={handleSignUp}>Sign Up</Button>
          <Button onClick={handleLogIn}>Log In</Button>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;