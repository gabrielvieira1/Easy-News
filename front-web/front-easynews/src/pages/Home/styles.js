import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #818DFF 0%, rgba(211, 239, 249, 0) 100%);
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const Slogan = styled.h1`
  text-align: center;
  padding: 0px 150px 23px;
  color: #020F83;
  font-size: 45px;
  font-weight: 100;
`

export const Image = styled.img`
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 184px;
    padding-top: 53px;
`

export const LinkMapa = styled.a`
  text-decoration: none;
  padding: 22.5px 25px;
  background: #5B63AF;
  border-radius: 40px;
  font-weight: bold;
  font-size: 35px;
  color: #ffffff;
  margin-top: 47px;
  margin-right: 184px;
`;

export const LinkEntrar = styled.a`
  margin-left: 134px;
  text-decoration: none;
  padding: 3.5px 41px;
  background: #5B63AF;
  border-radius: 2.9rem;
  font-weight: bold;
  font-size: 35px;
  color: #ffffff;
`;

export const LinkSobre = styled.a`
    
    text-decoration: none;
    font-weight: bold;
    font-size: 35px;
    color: #ffffff;
  &:hover {
    transition: 0.3s;
    color: #5B63AF !important;
  }
`;
