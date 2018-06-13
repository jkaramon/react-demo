// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.section`
  height: 100vh;
  width: 100vw;
`;

const Header = styled.section`
  height: 100vh;
  width: 100vw;
`;
const ChapterTitle = styled.section`
  height: 100vh;
  width: 100vw;
`;

export function HomePage() {
  return (
    <Container>
      <Header>User List Demo App</Header>

      <ChapterTitle>Used Technologies</ChapterTitle>
      <ChapterTitle>Used Technologies</ChapterTitle>
      <Link to="/users">Users</Link>
    </Container>
  );
}
