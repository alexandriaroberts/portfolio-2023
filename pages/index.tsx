/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';

import { Container } from '../components/Container';
import { Divider } from '../components/Divider';
import { H1, H2, P } from '../components/Typography';
import { Socials } from '../components/Socials';

export default function Home() {
  return (
    <Container>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', null, '1fr 1fr'],
          mt: ['104px', '164px'],
          gap: ['16px', '64px'],
        }}
      >
        <div sx={{ gridColumn: 1 }}>
          <H1
            sx={{
              mb: '20px',
            }}
          >
            <span sx={{ textTransform: 'uppercase', mb: '30px' }}>
              Alexandria
            </span>
            <br />
            roberts
          </H1>
          <Divider width='80%' sx={{ mt: '20px' }} />
          <P
            sx={{
              my: '20px',
            }}
          >
            Is an UI Engineer with strong skills in UI design and focus on
            usability and love learning new tech.
          </P>
          <Socials sx={{ mt: '24px' }} />
        </div>
        <div
          sx={{
            gridColumn: [1, 2],
            display: 'grid',
            justifySelf: 'end',
          }}
        >
          <Divider
            width='1px'
            height='130%'
            sx={{
              position: 'absolute',
              top: '-25px',
              right: '0px',
              zIndex: -1,
            }}
          />
          <Divider
            color='primary'
            width='1px'
            height='107%'
            sx={{
              position: 'absolute',
              top: ['0', '60px'],
              right: '120px',
              zIndex: -1,
            }}
          />

          <div
            sx={{ maxWidth: '580px', height: '100%', mt: ['32px', '164px'] }}
          >
            <img
              src='../profile.jpg'
              alt='Head Shot of Lexie'
              sx={{
                width: ['255px', null, '100%'],
                maxWidth: '537px',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
      <main sx={{ mt: '164px' }}>
        <H2>
          About{' '}
          <span>
            <span
              sx={{
                display: 'inline-block',
                position: 'absolute',
                top: '40%',
                left: '50%',
                width: ['50px', null, '66px', '108px'],
                height: ['36px', null, '46px', '72px'],
                transform: 'translate(-50%, -50%)',
                borderRadius: '250px 250px 0 0',
                bg: 'secondaryOrange',
                zIndex: '-1',
              }}
            />
            me
          </span>
        </H2>
        <div sx={{ maxWidth: '840px', m: '0 auto' }}>
          <P>
            Is a A UI Engineer with strong skills in UI design skills and focus
            on usability and learning new skills.
          </P>
          <P>
            Is a A UI Engineer with strong skills in UI design skills and focus
            on usability and learning new skills. Is a A UI Engineer with strong
            skills in UI design skills and focus on usability and learning new
            skills. Is a A UI Engineer with strong skills in UI design skills
            and focus on usability and learning new skills. Is a A UI Engineer
            with strong skills in UI design skills and focus on usability and
            learning new skills.
          </P>
        </div>
      </main>
    </Container>
  );
}
