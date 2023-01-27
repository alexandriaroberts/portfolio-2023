/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';

import { H2 } from '../components/Typography';
import { Container } from '../components/Container';
import { HeadingDecoration } from '../components/HeadingDecoration';

export default function Experinece() {
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
    </Container>
  );
}
