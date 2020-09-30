import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer migração completa de servidor</p>
      <img src="https://avatars1.githubusercontent.com/u/63272258?s=400&u=1cca8064766a06062b74746db7a96023caa721bf&v=4" alt=""/>
    </Container>
  );
}