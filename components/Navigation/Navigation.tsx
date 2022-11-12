/* eslint-disable @next/next/no-img-element */
// TODO: Find a way to remove these imports with jsx
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container } from '../Container';
import { NavLink } from './NavLink';

export const Navigation = () => (
  <Container>
    <nav
      sx={{
        display: 'grid',
        gridTemplateColumns: '60fr 320fr 50fr',
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
        <NavLink href='/about' target='_self'>
          About
        </NavLink>
        <NavLink href='/experience' target='_self'>
          Experience
        </NavLink>
      </div>
    </nav>
    {
      // TODO: Alternative to current mobile navigation
    }
    <div
      sx={{
        position: 'absolute',
        right: '-40px',
        top: '-90px',
        transform: 'rotate(-140deg)',
        display: ['none', null, 'inline-block'],
      }}
    >
      <img src='../orange-tree.png' alt='' sx={{ width: '306px' }} />
    </div>
  </Container>
);
