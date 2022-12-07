/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';

import { H2, P } from '../components/Typography';
import { Container } from '../components/Container';

export default function Projects() {
  return (
    <Container>
      <div sx={{ mt: ['104px', '164px'] }}>
        <H2 sx={{ position: 'relative' }}>
          Projects
          <span
            sx={{
              display: 'inline-block',
              position: 'absolute',
              top: '40%',
              left: '23%',
              width: ['50px', null, '66px', '108px'],
              height: ['36px', null, '46px', '72px'],
              transform: 'translate(-50%, -50%)',
              borderRadius: '250px 250px 0 0',
              bg: 'secondaryOrange',
              zIndex: '-1',
            }}
          />
        </H2>
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: ['repeat(2, 1fr)'],
            textAlign: 'center',
          }}
        >
          <div sx={{}}>
            <div sx={{}} />
            <P>Project 1</P>
          </div>
          <div>
            <P>Project 2</P>
          </div>
          <div>
            <P>Project 3</P>
          </div>
          <div>
            <P>Project 4</P>
          </div>
        </div>
      </div>
    </Container>
  );
}
