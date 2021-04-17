import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 40% 60%;
`;

export const Left = styled.div`
  background: linear-gradient(180deg, #fffe84 52.6%, #ffffff 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  /* grid-area: right; */
`;
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
  color: #c27803;

  text-align: left;
`;

export const Image = styled.img``;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 184px;
  padding-top: 53px;
`;

export const LinkMapa = styled.a`
  text-decoration: none;
  padding: 22.5px 25px;
  background: #5b63af;
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
  background: #5b63af;
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
    color: #5b63af !important;
  }
`;

export const LinkCadastro = styled.a`
  margin-top: 80px;
  width: 326px;
  height: 66px;
  text-decoration: none;
  padding: 3.5px 90px;
  background: #ff2c5f;
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
    transition: 0.5ss;
    background-color: #700a22 !important;
  }
`;

export const LinkGoogle = styled.a`
  margin-top: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 35px;
  color: #5b63af;
  &:hover {
    transition: 0.3s;
    color: #5b63af !important;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 15px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 1em;
`;

export const Fieldset = styled.fieldset`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 11px;
  display: grid;
  border: 0;
`;

export const FieldsetEmail = styled.fieldset`
  width: 100%;
  border: 0;
`;

export const Label = styled.label`
  font-family: SF UI Display;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80%;
`;
