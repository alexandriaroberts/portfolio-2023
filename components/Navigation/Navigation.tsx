/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container } from '../Container';
import { NavLink } from './NavLink';
import React from 'react';

export const Navigation = () => (
  <Container>
    <nav
      sx={{
        display: 'grid',
        gridTemplateColumns: '60px 1fr',
        justifyContent: 'center',
        mt: '80px',
      }}
    >
      <a href='\'>
        <img src='../heart.svg' alt='home' />
      </a>
      <div
        sx={{
          justifySelf: 'center',
          display: 'flex',
          gap: '32px',
        }}
      >
        <NavLink href='/about' target='_self' sx={{}}>
          About
        </NavLink>
        <NavLink href='/experience' target='_self'>
          Experience
        </NavLink>
      </div>
    </nav>
    <div
      sx={{
        position: 'absolute',
        right: '-40px',
        top: '-90px',
        transform: 'rotate(-140deg)',
      }}
    >
      <img src='../orange-tree.png' alt='' sx={{ width: '306px' }} />
    </div>
  </Container>
);
