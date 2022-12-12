/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';

import { H2, P, P16 } from '../components/Typography';
import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';

export default function Projects() {
  return (
    <Container>
      <div sx={{ mt: ['104px', '164px'] }}>
        <H2>
          <span>
            Projects
            <span
              sx={{
                display: 'inline-block',
                position: 'absolute',
                top: '40%',
                left: ['85px', null, '120px', '240px'],
                width: ['50px', null, '66px', '108px'],
                height: ['36px', null, '46px', '72px'],
                transform: 'translate(-50%, -50%)',
                borderRadius: '250px 250px 0 0',
                bg: 'secondaryOrange',
                zIndex: '-1',
              }}
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
          }}
        >
          <ProjectCard
            href='https://thegraph.com/blog/'
            image='../projects/graph-blog.png'
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
    </Container>
  );
}
