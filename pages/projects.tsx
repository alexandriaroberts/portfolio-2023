/* eslint-disable @next/next/no-img-element */

import { H2, H4, P, P16 } from '../components/Typography';
import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';
import { HeadingDecoration } from '../components/HeadingDecoration';
import { ProjectItem } from '../components/ProjectItem';

export default function Projects() {
  return (
    <Container>
      <div sx={{ my: ['104px', '164px'] }}>
        <H2>
          <span>
            Projects
            <HeadingDecoration
              left={['93px', null, '130px', '241px']}
              width={['40px', null, '56px', '100px']}
            />
          </span>
        </H2>
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: [
              '1fr',
              'repeat(auto-fill, minmax(min(259px, 100%), 1fr))',
              null,
              'repeat(auto-fill, minmax(min(389px, 100%), 1fr))',
            ],
            gap: '64px',
            textAlign: 'center',
            mt: ['64px', null, '104px'],
            pb: ['764px', '804px'],
          }}
        >
          <ProjectCard
            href='https://display-nfts.netlify.app/'
            image='../projects/display-nfts.png'
          >
            Display of NFT&apos;s from ERC-721 address
            <P16 sx={{ mt: '16px' }}>
              The side project which uses Alechemy&apos;s SDK to display
              NFT&apos;s from Ethereum addresses. Tech: NextJs,Alchemy SDK,
              Theme-UI
            </P16>
          </ProjectCard>
          <ProjectCard
            href='https://thegraph.com/blog/'
            image='../projects/graph-blog.png'
          >
            Graph Protocols Blog
            <P16 sx={{ mt: '16px' }}>
              I helped build this new blog app while we started from scratch, it
              was an absolutely fun work to do while at Graph Protocol which is
              in my main stack React/NextJS
            </P16>
          </ProjectCard>
          {/* <ProjectCard
            href='https://thegraph.com/blog/'
            image='../projects/graph-hack.png'
          >
            Graph Protocols Blog
            <P16 sx={{ mt: '16px' }}>
              Info:Helped build this new app while we started from scratch,{' '}
            </P16>
          </ProjectCard>
          <ProjectCard
            href='https://thegraph.com/blog/'
            image='../projects/graph-hack.png'
          >
            Graph Protocols Blog
            <P16 sx={{ mt: '16px' }}>
              Info:Helped build this new app while we started from scratch,{' '}
            </P16>
          </ProjectCard> */}
        </div>
      </div>
      <div
        sx={{
          height: 'auto',
          mt: ['104px', '164px'],
          position: 'absolute',
          left: 0,
          bottom: ['408px', '408px', '604px'],
          width: '100%',
          overflow: 'hidden',
          bg: 'text',
        }}
      >
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', null, '1fr 1fr'],
            gridTemplateRows: ['auto', null, '1fr 1fr'],
            gridGap: ['32px', null, '64px'],
            alignContent: 'center',
            px: ['32px', '64px'],
            mx: 'auto',
            my: ['64px', null, '164px'],
            maxWidth: '1288px',
          }}
        >
          <ProjectItem href='https://github.com/alexandriaroberts/react-form-with-api'>
            <H4>React Form</H4>
            <P16>
              React interactive form, Info: Helped build this new app while we
              started from scratch. Languages:ReactJS, Netlify, Netlify hosting,
              Restcountries.eu API
            </P16>
          </ProjectItem>
          <ProjectItem href='https://github.com/alexandriaroberts/FlowerGame-VueJS'>
            <H4>Flower Game VueJS</H4>
            <P16>
              This is fun little VueJS game, you have to click on the flower to
              get the points. Languages:VueJS, SCSS/SASS, Netlify
            </P16>
          </ProjectItem>
          <ProjectItem href='https://github.com/alexandriaroberts/Space-Game-with-Canvas'>
            <H4>Space Game</H4>
            <P16>
              This is a space game using JavaScript and Canvas, you have to use
              your arrow keys to catch an alien by moving the space man
              Languages:JavaScript, Canvas
            </P16>
          </ProjectItem>
          <ProjectItem href='https://github.com/alexandriaroberts/Nasa-API'>
            <H4>Nasa API VueJS</H4>
            <P16>
              This project got me my first Codepen featured, doen in VueJs with
              Nasa API Languages:VueJS, CSS, Nasa API
            </P16>
          </ProjectItem>
        </div>
      </div>
    </Container>
  );
}
