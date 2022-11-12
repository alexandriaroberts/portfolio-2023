/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Bezier } from 'gsap';
import { Container } from '../components/Container';

export default function Home() {
  return (
    <Container>
      <div sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div sx={{ gridColumn: 1 }}>
          <h1>Alexandria Roberts</h1>
          <p>
            Is a A UI Engineer with strong skills in UI design skills and focus
            on usability and learning new skills.
          </p>
        </div>
        <div sx={{ gridColumn: 2 }}>
          <img
            src='../profile.jpg'
            alt='Head Shot of Lexie'
            sx={{ maxHeight: '580px' }}
          />
        </div>
      </div>
    </Container>
  );
}
