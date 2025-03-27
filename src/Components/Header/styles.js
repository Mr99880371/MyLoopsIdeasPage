import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #061044;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 100px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Logo = styled.img`
  width: 160px;
  margin: 0 3rem;
  height: auto;
  object-fit: contain;
`;

export const Button = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const LogoutLink = styled.a`
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 1rem;
  font-size: 0.9rem;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
  background-color: transparent;
  color: white;
`;
