import { H2, H4, P16, S18 } from '../components/Typography';
import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';
import { HeadingDecoration } from '../components/HeadingDecoration';
import { ProjectItem } from '../components/ProjectItem';
import { SocialsIcon } from '../components/SocialsIcon';
import { Tag } from '../components/Tag';

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
              'repeat(auto-fill, minmax(min(369px, 100%), 1fr))',
            ],
            gap: ['64px', '104px'],
            mt: ['64px', null, '104px'],
            pb: ['364px', '404px', '504px'],
          }}
        >
          <ProjectCard
            href='https://display-nfts.netlify.app/'
            image='../projects/display-nfts.png'
          >
            Display of NFT&apos;s from ERC-721 address
            <P16>
              The side project which uses Alechemy&apos;s SDK to display
              NFT&apos;s from Ethereum addresses.
            </P16>
            <div sx={{ display: 'flex', mt: '16px' }}>
              <S18>Link to Code here: </S18>
              <SocialsIcon
                href='https://github.com/alexandriaroberts/display-nfts'
                xlinkHref='../images/sprite.svg#github'
                title='Github'
              />
            </div>
            <div
              sx={{
                mt: '16px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              <Tag>Next</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Web3</Tag>
              <Tag>Alchemy SDK</Tag>
              <Tag>Theme UI</Tag>
            </div>
          </ProjectCard>
          <ProjectCard
            href='https://thegraph.com/blog/'
            image='../projects/graph-blog.png'
          >
            Graph Protocols Blog
            <P16>
              I helped build this new blog app while we started from scratch, it
              was an absolutely fun work to do while at Graph Protocol.{' '}
            </P16>
            <div
              sx={{
                mt: '16px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              <Tag>Next</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Web3</Tag>
              <Tag>Theme UI</Tag>
            </div>
          </ProjectCard>
          <ProjectCard
            href='https://codepen.io/iamlexieonearth/full/QYNmEa'
            image='../projects/flower-game.png'
          >
            Flower Game in VueJS
            <P16>
              This is fun little VueJS game, you have to click on the flower to
              get the points.
            </P16>
            <div sx={{ display: 'flex', mt: '16px' }}>
              <S18>Link to Code here:</S18>
              <SocialsIcon
                href='https://github.com/alexandriaroberts/FlowerGame-VueJS'
                xlinkHref='../images/sprite.svg#github'
                title='Github'
              />
            </div>
            <div
              sx={{
                mt: '16px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              <Tag>VueJS</Tag>
              <Tag>SCSS/SASS</Tag>
              <Tag>Netlify</Tag>
            </div>
          </ProjectCard>
          <ProjectCard
            href='https://react-form-with-api.netlify.app/'
            image='../projects/react-form.png'
          >
            Graph Protocols Blog
            <P16>
              Info:Helped build this new app while we started from scratch,{' '}
            </P16>
            <div sx={{ display: 'flex', mt: '16px' }}>
              <S18>Link to Code here:</S18>
              <SocialsIcon
                href='https://github.com/alexandriaroberts/react-form-with-api'
                xlinkHref='../images/sprite.svg#github'
                title='Github'
              />
            </div>
            <div
              sx={{
                mt: '16px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              <Tag>React</Tag>
              <Tag>SCSS/SASS</Tag>
              <Tag>Restcountries.eu API</Tag>
            </div>
          </ProjectCard>
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
            gridTemplateRows: ['auto', null, '1fr'],
            gridGap: ['32px', null, '64px'],
            alignContent: 'center',
            px: ['32px', '64px'],
            mx: 'auto',
            my: ['64px', null, '164px'],
            maxWidth: '1288px',
          }}
        >
          <ProjectItem href='https://codepen.io/iamlexieonearth/full/KEoMye'>
            <H4>Space Game</H4>
            <P16>
              This is a space game using JavaScript and Canvas, you have to use
              your arrow keys to catch an alien by moving the space man
            </P16>
            <P16>
              <S18>Tech Stack:</S18> JavaScript, Canvas
            </P16>
          </ProjectItem>
          <ProjectItem href='https://codepen.io/iamlexieonearth/pen/vwPRPY'>
            <H4>Nasa API VueJS</H4>
            <P16>
              This project got me my first Codepen featured, done in VueJs with
              Nasa API.
            </P16>
            <P16>
              <S18>Tech Stack:</S18> VueJS, CSS, Nasa API
            </P16>
          </ProjectItem>
        </div>
      </div>
    </Container>
  );
}
