// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from "../themes";

const Container = styled.section`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.grayLightest};
  min-height: 100vh;
  color: ${colors.grayDarker};
`;
const Wrapper = styled.section`
  width: 800px;
  padding-top: 24px;
`;
const Header = styled.h1`
  text-align: center;
  font-size: 28px;
  margin: 48px 0;
  font-weight: bold;
  color: ${colors.primary};
`;
const ChapterTitle = styled.section`
  margin-top: 18px;
  margin-bottom: 6px;
  font-size: 22px;
  color: ${colors.primaryDarker};
`;
const Code = styled.code`
  font-family: Menlo, Consolas, Monaco, monospace;
  font-size: 18px;
  white-space: pre;
`;

const List = styled.ul`
  padding-left: 15px;
`;

const ListItem = styled.li`
  list-style-type: disc;
  line-height: 24px;
  a {
    padding-right: 6px;
  }
`;

const HeroPanel = styled.section`
  margin: 12px 0;
  padding: 15px;
  border: 1px solid ${colors.gray};
  background-color: ${colors.white};
  border-radius: 9px;
  a {
    text-decoration: none;
  } 
`;
const HeroContent = styled.p`
  text-align: center;
  font-size: 28px;
  margin: 9px 0;
  font-weight: bold;
  color: ${colors.success};
`;
export function HomePage() {
  return (
    <Container>
      <Wrapper>
        <Header>User List Demo App</Header>
        <HeroPanel>
          <Link to="/users">
            <HeroContent>Go to user list</HeroContent>
          </Link>
        </HeroPanel>
        <ChapterTitle>Source</ChapterTitle>
        <HeroPanel>
          <a href="https://github.com/jkaramon/react-demo">
            https://github.com/jkaramon/react-demo
          </a>
        </HeroPanel>
        <ChapterTitle>Getting started</ChapterTitle>
        <HeroPanel>
          <Code>
            {`
              yarn # install dependencies
              yarn test # Run tests
              yarn start # Run app
            `}
          </Code>
        </HeroPanel>
        <ChapterTitle>Used Technologies</ChapterTitle>
        <List>
          <ListItem>React, Redux, React Router</ListItem>
          <ListItem>
            <a href="https://redux-saga.js.org/">redux-saga</a>
            for handling side-effects
          </ListItem>
          <ListItem>
            <a href="https://www.styled-components.com/docs">styled-components</a>
            and <a href="https://polished.js.org/">polished</a>
            for CSS in JS
          </ListItem>
          <ListItem>
            <a href="https://prettier.io/">prettier</a>
            for code formatting
          </ListItem>
          <ListItem>
            <a href="https://eslint.org/">eslint</a>
            and <a href="https://flow.org/">flow</a>
            for better code quality
          </ListItem>
          <ListItem>
            <a href="https://facebook.github.io/jest/">eslint</a>
            for testing
          </ListItem>

        </List>
        <ChapterTitle>Missing Pieces</ChapterTitle>
        <List>
          <ListItem>Tests - only example for reducer and component test provided</ListItem>
          <ListItem>
            Form Validation - client side validation should be implemented
            in UserForm and server side validation result from api should
            be bound to UserForm
          </ListItem>
        </List>

      </Wrapper>
    </Container>
  );
}
