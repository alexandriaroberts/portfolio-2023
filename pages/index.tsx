/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { TimelineLite, TweenMax, Back, Bezier } from 'gsap';

import { Container } from '../components/Container';
import { Divider } from '../components/Divider';
import { H1, H2, P } from '../components/Typography';
import { Socials } from '../components/Socials';
import { HeadingDecoration } from '../components/HeadingDecoration';

const images: string[] = [
  'https://uploads-ssl.webflow.com/622dbec40bef54e41bd8c025/62bcb8d6809ed2655024dd54_01.svg',
  'https://uploads-ssl.webflow.com/622dbec40bef54e41bd8c025/62bcb8d5c3f4e447fa662f1d_03.svg',
  // 'https://via.placeholder.com/100',
  // Add more image URLs here as desired
];

export default function Home() {
  if (typeof document !== 'undefined') {
    document.addEventListener('mousemove', function (event: MouseEvent) {
      const imageUrl = images[Math.floor(Math.random() * images.length)];
      const image = new Image(50, 50);
      image.src = imageUrl;
      image.style.position = 'absolute';
      image.style.left = event.clientX + 'px';
      image.style.top = event.clientY + 'px';
      document.getElementById('image-trail')?.appendChild(image);
      setTimeout(() => {
        image.remove();
      }, 1000);
    });
  }

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
        <div
          id='image-trail'
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '50px',
            height: '50px',
            background: 'transparent',
            zIndex: '-1',
            pointerEvents: 'none',
          }}
        />
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
            <HeadingDecoration left={'50%'} />
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
