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
  display: grid;
  grid-template-rows: 1fr 50px;
  margin: 1em;
  height: 200px;
  width: 450px;
  max-width: 500px;
  border-radius: 2.5em;
  background-color: #85c3ff;
  padding: 20px;
`;

export const Text = styled.text`
  color: black;
  font-weight: bold;  
`;

export const Badge = styled.a`
  background-color: white;
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
