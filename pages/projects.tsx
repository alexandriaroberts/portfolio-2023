/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';

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
            <HeadingDecoration left={['85px', null, '120px', '240px']} />
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
            mb: '704px',
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
            image='../projects/graph-hack.png'
          >
            Graph Protocols Blog
            <P16 sx={{ mt: '16px' }}>
              I helped build this new blog app while we started from scratch, it
              was an absolutely fun work to do while at Graph Protocol which is
              in my main stack React/NextJS
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
          </ProjectCard>
          <ProjectCard
            href='https://thegraph.com/blog/'
            image='../projects/graph-hack.png'
          >
            Graph Protocols Blog
            <P16 sx={{ mt: '16px' }}>
              Info:Helped build this new app while we started from scratch,{' '}
            </P16>
          </ProjectCard>
        </div>
      </div>
      <div
        sx={{
          height: 'auto',
          mt: ['104px', '164px'],
          position: 'absolute',
          left: 0,
          bottom: ['16%', '20%'],
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
            gridGap: '64px',
            alignContent: 'center',
            mx: '64px',
            my: ['164px'],
          }}
        >
          <ProjectItem href=''>
            <H4>React Form</H4>
            <P16>
              React interactive form, Info: Helped build this new app while we
              started from scratch,
            </P16>
          </ProjectItem>
          <ProjectItem href=''>
            <H4>React Form</H4>
            <P16>React interactive form</P16>
          </ProjectItem>
          <ProjectItem href=''>
            <H4>React Form</H4>
            <P16>React interactive form</P16>
          </ProjectItem>
          <ProjectItem href=''>
            <H4>React Form</H4>
            <P16>React interactive form</P16>
          </ProjectItem>
        </div>
      </div>
    </Container>
  );
}
