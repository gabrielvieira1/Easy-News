import styled from "styled-components";

export const Body = styled.div`
  justify-content: space-evenly;
  align-items: center;
  align-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  background-color: white;
  padding-top: 6em;
  background-repeat: repeat-x;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column ;
  margin: 1em;
  height: 200px;
  width: 450px;
  max-width: 500px;
  border-radius: 2.5em;
  background: linear-gradient(360deg, #818DFF 0%, rgba(211, 239, 249, 0) 100%);
  padding: 20px;
`;

export const Text = styled.text`
margin-top: 20px;
  color: black;
  font-weight: normal;  
`;

export const Badge = styled.a`
  background-color: #e0e3ff;
  padding: 4px;
  border-radius: 15px;
  margin-right: 10px;
`;

export const Badges = styled.div`
  width: 100%;
  margin: auto; 
  justify-content: flex-start;
  display: flex;
`;

export const Title = styled.p`
margin-top: 20px;
  color: black;
  font-weight: bolder;  
  height: auto;
  width: auto;
`;

