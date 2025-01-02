import { useState, useEffect } from 'react';
import { H2, H4, H6, P, P16, S18 } from '../components/Typography';
import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';
import { HeadingDecoration } from '../components/HeadingDecoration';
import { ProjectItem } from '../components/ProjectItem';
import { SocialsIcon } from '../components/SocialsIcon';
import { Tag } from '../components/Tag';
import { Box } from 'theme-ui';

export default function Projects() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

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
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: [
              '1fr',
              'repeat(2, 1fr)',
              null,
              'repeat(3, 1fr)',
            ],
            gap: ['32px', '40px', '48px'],
            mt: ['40px', '60px', '80px'],
            pb: ['64px', '80px', '296px'],
          }}
        >
          <ProjectCard
            href='https://www.diversitychain.xyz/'
            image='../projects/diversity.png'
            alt='showing screenshot of display nfts app'
          >
            <H6 sx={{ mb: '12px' }}>
              DiversityChain to help people get great jobs in crypto
            </H6>
            <P16>
              Project is done done in NextJS, TailwindCSS, MongoDB, NodeJS and
              Express. A bit of chatGPT and web3.
            </P16>
            <div
              sx={{
                mt: '16px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              <Tag>NextJS</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Express</Tag>
              <Tag>MongoDB</Tag>
              <Tag>TailwindCSS</Tag>
              <Tag>NodeJS</Tag>
            </div>
          </ProjectCard>
          <ProjectCard
            href='https://display-nfts.netlify.app/'
            image='../projects/display-nfts.png'
            alt='showing screenshot of display nfts app'
          >
            <H6 sx={{ mb: '12px' }}>
              Display of NFT&apos;s from ERC-721 address
            </H6>
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
            alt='graph blogs image'
          >
            <H6 sx={{ mb: '12px' }}>Graph Protocols Blog App</H6>
            <P16>
              I helped build this new blog app while we started from scratch, it
              was an absolutely fun work to do while at Graph Protocol.
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
            href='https://skin-video-analysis-tool.vercel.app/'
            image='../projects/skin-test-tool.png'
            alt='showing screenshot of display nfts app'
          >
            <H6 sx={{ mb: '12px' }}> Skin Video analysis tool Project </H6>
            <P16>
              This project is a web application designed to guide users through
              capturing five images of skin diagnostic device, sending them to a
              mock server, and displaying the results.
            </P16>
            <div sx={{ display: 'flex', mt: '16px' }}>
              <S18>Link to Code here: </S18>
              <SocialsIcon
                href='https://github.com/alexandriaroberts/skin-video-analysis-tool'
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
              <Tag>NextJS</Tag>
              <Tag>TypeScript</Tag>
              <Tag>TailwindCSS</Tag>
              <Tag>NodeJS</Tag>
            </div>
          </ProjectCard>
          <ProjectCard
            href='https://codepen.io/iamlexieonearth/full/QYNmEa'
            image='../projects/flower-game.png'
            alt='flower games full screen'
          >
            <H6 sx={{ mb: '12px' }}>Flower Game in VueJS</H6>
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
          {/* <ProjectCard
            href='https://react-form-with-api.netlify.app/'
            image='../projects/react-form.png'
            alt='react forms screenshot'
          >
          React
            <P>Helped build this new blog app we started from scratch.</P>
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
          </ProjectCard> */}
        </Box>
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
            my: ['64px', null, '64px'],
            maxWidth: '1288px',
          }}
        >
          <ProjectItem href='https://codepen.io/iamlexieonearth/full/KEoMye'>
            <H4>Space Game</H4>
            <P>
              This is a space game using JavaScript and Canvas, you have to use
              your arrow keys to catch an alien by moving the space man
            </P>
            <P>
              <S18>Tech Stack:</S18> JavaScript, Canvas
            </P>
          </ProjectItem>
          <ProjectItem href='https://codepen.io/iamlexieonearth/pen/vwPRPY'>
            <H4>Nasa API VueJS</H4>
            <P>
              This project got me my first Codepen featured, done in VueJs with
              Nasa API.
            </P>
            <P>
              <S18>Tech Stack:</S18> VueJS, CSS, Nasa API
            </P>
          </ProjectItem>
        </div>
      </div>
    </Container>
  );
}
