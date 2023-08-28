import { H2, H4, H5, S20, P } from '../components/Typography';
import { Container } from '../components/Container';
import { HeadingDecoration } from '../components/HeadingDecoration';
import { Divider } from '../components/Divider';

export default function Experinece() {
  return (
    <Container>
      <div sx={{ my: ['104px', null, '164px'] }}>
        <div>
          <H2>
            <span>
              Experience
              <HeadingDecoration
                left={['130px', null, '182px', '339px']}
                width={['50px', null, '66px', '132px']}
              />
            </span>
          </H2>
          <H5 sx={{ mb: '64px', textAlign: 'center' }}>
            You can also download my cv{' '}
            <a
              href='/AlexandriaRobertsCV.pdf'
              download
              sx={{
                color: 'secondaryOrange',
                textDecoration: 'none',
                fontStyle: 'italic',
              }}
            >
              here
            </a>{' '}
            please! 📇
          </H5>
        </div>
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '0.2fr 0.8fr', null, '225fr 840fr'],
            maxWidth: '840px',
            m: '0 auto',
          }}
        >
          <Divider
            color='primary'
            width='1px'
            height='100%'
            sx={{
              opacity: ['0', 1],
              gridColumn: 1,
              position: 'absolute',
              left: ['25px', null, '100px', '150px'],
              zIndex: -1,
            }}
          />
          <div
            sx={{
              gridColumn: 2,
            }}
          >
            <H4>
              Edge and Node <S20>(UI Engineer, Feb 2022 - November 2022)</S20>
            </H4>
            <div
              sx={{
                mt: '32px',
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
              }}
            >
              <P>
                - Worked in NextJs, React, ThemeUI and shipped many marketing
                pages and UI&apos;s in tight deadlines.
              </P>
              <P>
                - Worked on creating a design system and developed components
                using storybook in NextJS, TypeScript.
              </P>
              <P>
                - Organized resources and tasks on a complex project to enable
                on-time delivery.
              </P>
              <P>
                - Refactored and optimized existing code. Optimised performance
                of the websites.
              </P>
            </div>
          </div>

          <div
            sx={{
              gridColumn: 2,
              mt: '64px',
            }}
          >
            <H4>
              APY Vision{' '}
              <S20>
                (Front-End Developer Intern, April 2021 - December 2021)
              </S20>
            </H4>
            <div
              sx={{
                mt: '32px',
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
              }}
            >
              <P>
                - Working as an intern in my first crypto/proper front-end
                developer job where I would use React, Ethers.JS & SASS. I
                learned a lot from the seniors and the team, it was a great
                experience!
              </P>
              <P>
                - Worked on creating a marketing site, one page apps for trends
                etc in React, Sass for the company. See marketing site here: APY
                VISION
              </P>
              <P>
                - Building web interfaces, features using API&apos;s, bug fixes
                and updating front-end design while moving from V1 to V2.
              </P>
              <P>
                - Working with storybook, creating web pages to show different
                types of protocols data and tracking.
              </P>
            </div>
          </div>

          <div
            sx={{
              gridColumn: 2,
              mt: '64px',
            }}
          >
            <H4>
              Rooots <S20>(Front-End Developer, April 2020)</S20>
            </H4>
            <div
              sx={{
                mt: '32px',
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
              }}
            >
              <P>
                This is a project I started while working doing Mozilla&apos;s
                incubator program as a founder and team leader, with managing a
                team of 5, as well as conducting user interviews for research
                project to we developed on working a MVP using VueJS. This was a
                passion side project of mine which sadly I stopped working on in
                the end!
              </P>
            </div>
          </div>

          <div
            sx={{
              gridColumn: 2,
              mt: '64px',
            }}
          >
            <H4>
              Joyjet Digital Space Agency{' '}
              <S20>(Front-End Developer, Sept 2019 - Feb 2020 )</S20>
            </H4>
            <div
              sx={{
                mt: '32px',
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
              }}
            >
              <P>
                - Developed new user-facing features in languages such as HTML5,
                CSS and JavaScript.
              </P>
              <P>- Created email designs.</P>
              <P>
                - Created landing pages using Bootstrap and some Jquery on old
                projects. As well developed sites using Divi in Wordpress.
              </P>
              <P>
                - Optimizing applications for maximum speed and scalability
                using Google Developer Tools and Lighthouse.
              </P>
              <P>
                - Participated in daily team meetings, sharing the things we
                achieved on the day before and our to do lists for the day while
                collaborating with other team members remotely.
              </P>
            </div>
          </div>

          <div
            sx={{
              gridColumn: 2,
              mt: '64px',
            }}
          >
            <H4>
              She Loves Data{' '}
              <S20>(Part-time Front-End Developer, Dec 2018 - Sept 2019)</S20>
            </H4>
            <div
              sx={{
                mt: '32px',
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
              }}
            >
              <P>
                - Working part-time while learning to code, working with mostly
                wordpress templates, sometimes writing code in one or more
                programming or scripting languages, such as HTML5, CSS or
                JavaScript in Word Press.
              </P>
              <P>
                - Deciding on the best technologies/plugins and languages for
                the project, testing sites and applications in different
                browsers and environments.
              </P>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
