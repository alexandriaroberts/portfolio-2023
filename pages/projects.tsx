/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';

import { H2, H4, P, P16 } from '../components/Typography';
import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';
import { Divider } from '../components/Divider';

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
            mb: '704px',
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
      <div
        sx={{
          height: ['408px', null, '604px'],
          mt: ['104px', '164px'],
          position: 'absolute',
          left: 0,
          bottom: '20%',
          width: '100%',
          overflow: 'hidden',
          bg: 'text',
        }}
      >
        <div
          sx={{
            position: 'absolute',
            top: '-27%',
            left: '35%',
            width: '100%',
            minWidth: [0, '283px', '206px'],
            maxWidth: [0, '283px', '306px'],
            aspectRatio: '570 / 799',
            backgroundImage: `url('../orange-tree.png')`,
            backgroundSize: '100% 100%',
            display: ['none', 'block'],
          }}
        />
        <div
          sx={{
            height: '50%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            alignContent: 'center',
            marginLeft: '64px',
            mt: '204px',
            mb: '64px',
          }}
        >
          <div sx={{ color: 'primary' }}>
            <H4>React Form</H4>
            <P16>React interactive form</P16>
            <Divider color='primary' width='75%' />
          </div>
          <div sx={{ color: 'primary' }}>
            <H4>React Form</H4>
            <P16>React interactive form</P16>
            <Divider color='primary' width='75%' />
          </div>
          <div sx={{ color: 'primary' }}>
            <H4>React Form</H4>
            <P16>React interactive form</P16>
            <Divider color='primary' width='75%' />
          </div>
          <div sx={{ color: 'primary' }}>
            <H4>React Form</H4>
            <P16>React interactive form</P16>
            <Divider color='primary' width='75%' />
          </div>
        </div>
      </div>
    </Container>
  );
}
