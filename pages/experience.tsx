/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';

import { H2, H4, P } from '../components/Typography';
import { Container } from '../components/Container';
import { HeadingDecoration } from '../components/HeadingDecoration';
import { Divider } from '../components/Divider';
export default function Experinece() {
  function translate(
    arg0: string
  ): import('theme-ui').StylePropertyValue<
    import('csstype').Property.Transform | undefined
  > {
    throw new Error('Function not implemented.');
  }

  return (
    <Container>
      <div sx={{ mt: ['104px', '164px'] }}>
        <H2>
          <span>
            Experience
            <HeadingDecoration left={['85px', null, '120px', '348px']} />
          </span>
        </H2>
      </div>
      <div sx={{ display: 'grid', gridTemplateColumns: '0.5fr 1fr' }}>
        <Divider
          color='primary'
          width='1px'
          height='100%'
          sx={{
            gridColumn: 1,
            position: 'absolute',
            left: '150px',
            zIndex: -1,
          }}
        />
        <div
          sx={{
            gridColumn: 2,
          }}
        >
          <P>Edge and Node</P>
        </div>
      </div>
    </Container>
  );
}
