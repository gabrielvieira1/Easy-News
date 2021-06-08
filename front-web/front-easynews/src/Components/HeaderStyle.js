import styled from "styled-components";

export const Header = styled.header`
  background-color: #0085ff;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
`;

export const Image = styled.img``;

export const MapButton = styled.a`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
`;

export const AddNews = styled.button`
  background-color: #ff533b;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-style: normal;
  border-radius: 2.5em;
  padding: 9px;
  color: white;
  margin-left: 1em;
  cursor: pointer;
`;

export const UserIcon = styled.img`
  display: flex;
`;

export const UserGreeting = styled.a`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 0, 4em;
  padding-left: 1em;
  display: flex;
  margin-right: 1em;
`;
