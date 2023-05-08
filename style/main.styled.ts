"use client"

import styled from "styled-components";

export const BodySection = styled.body`
  @import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');
  font-family: 'Cairo', sans-serif;
  border: black double 10px;
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2px 50px;
  //width: 70%;
  //margin: auto;
`;
export const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 5px;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavBarItem = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0.5rem;
`;

export const StartButton = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border: black solid 2px;
  border-radius: 5px;
`;