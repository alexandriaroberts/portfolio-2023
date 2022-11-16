/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container } from '../components/Container';
import { Divider } from '../components/Divider';

export default function Home() {
  return (
    <Container>
      <div
        sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', mt: '164px' }}
      >
        <div sx={{ gridColumn: 1 }}>
          <h1
            sx={{
              fontFamily: 'Lora, serif',
              fontSize: '78px',
              fontStyle: 'normal',
              fontWeight: '200',
              lineHeight: '78px',
              letterSpacing: '2px',
              mb: '20px',
            }}
          >
            <span sx={{ textTransform: 'uppercase', mb: '30px' }}>
              Alexandria
            </span>
            <br />
            roberts
          </h1>
          <Divider width='80%' sx={{ mt: '20px' }} />
          <p
            sx={{
              fontFamily: 'Noto Serif',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '37px',
              letterSpacing: '2px',
              mb: '20px',
            }}
          >
            Is an UI Engineer with strong skills in UI design and focus on
            usability and love learning new tech.
          </p>
        </div>
        <div sx={{ gridColumn: 2 }}>
          <div
            sx={{ maxWidth: '580px', height: '100%', mt: '164px', mr: '120px' }}
          >
            <img
              src='../profile.jpg'
              alt='Head Shot of Lexie'
              sx={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
