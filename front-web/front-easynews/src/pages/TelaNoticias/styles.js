import styled from "styled-components";

export const Body = styled.body`
  justify-content: space-evenly;
  align-items: center;
  align-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  background-color: #d3d3d3;
  padding-top: 6em;
  background-repeat: repeat-x;
`;

export const Card = styled.div`
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 1em;
  display: flex;
  height: 200px;
  width: 450px;
  max-width: 500px;
  border-radius: 2.5em;
  background-color: white;
  flex-grow: 1;
  flex-shrink: 0;
`;

export const Text = styled.text`
  justify-content: center;
  margin: 16px 16px 0px 16px;
  padding: 10px;
  display: flex;
  width: 450px;
  height: 150px;
  max-width: 500px;
  border-radius: 2.5em;
  flex-grow: 1;
  flex-shrink: 0;
`;

export const Badge = styled.div`
  justify-content: center;
  background-color: #d3d3d3;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  border-radius: 15px;
`;

export const Badges = styled.div`
  justify-content: space-between;
  margin: 0px 0px 26px 26px;
  display: flex;
  width: 300px;
`;
