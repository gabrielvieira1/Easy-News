import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 40% 60%;
`

export const Left = styled.div`
  background: linear-gradient(180deg, #FFFE84 52.6%, #FFFFFF 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  /* grid-area: right; */
`
export const Slogan = styled.h1`
    padding-bottom: 40px;
    margin-left: 100px;
    
    font-family: SF UI Display;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 57px;
    width: 614px;
    height: 112px;
    color: #C27803;

    text-align: left;
   
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

export const LinkCadastro = styled.a`
    width: 326px;
    height: 66px;
    text-decoration: none;
    padding: 3.5px 90px;
    background: #FF2C5F;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 20px;
    font-family: SF UI Display;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    &:hover {
    transition: 0.5Ss;
    background-color: #700A22 !important;
  }
`;

export const LinkGoogle = styled.a`

    text-decoration: none;
    font-weight: bold;
    font-size: 35px;
    color: #5B63AF;
  &:hover {
    transition: 0.3s;
    color: #5B63AF !important;
  }
`;