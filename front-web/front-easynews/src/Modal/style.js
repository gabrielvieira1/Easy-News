import styled from "styled-components";

export const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ show }) => (show ? "block" : "none")};
`;

export const Section = styled.section`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.a`
  background-color: black;
  color: white;
  padding: 6px;
  border-radius: 13px;
  width: 200px;
  margin-bottom: 15px;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 18px;
  display: flex;
  justify-content: center;
`;

export const FieldLocation = styled.textarea`
resize: none;
padding: 8px 0 0 10px;
  border-radius: 12px;
  border-style: none;
  width: 400px;
  height: 34px;
  background-color: #c6c6c6;
  outline: 0;
`;

export const FieldName = styled.textarea`
resize: none;
padding: 8px 0 0 10px;
  border-radius: 12px;
  border-style: none;
  width: 400px;
  height: 34px;
  background-color: #c6c6c6;
  outline: 0;
`;

export const FieldText = styled.textarea`
resize: none;
  padding: 8px 0 0 10px;
  border-radius: 12px;
  border-style: none;
  width: 400px;
  height: 100px;
  background-color: #c6c6c6;
  outline: 0;
`;

export const ButtonClose = styled.button`
  width: 30px;
  background-color: #0085ff;
  margin: 5% 0% 0% 82%;
  border-radius: 12px;
`;

export const Label = styled.label`
padding-left: 100px;
padding-top: 30px;
  display: flex;
  width: 100%;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
`;

