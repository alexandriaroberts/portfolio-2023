import { H3 } from '../Typography';
import { Socials } from '../Socials';

/**
 * Main `Footer` component.
 */
export const Footer = () => (
  <footer
    sx={{
      height: ['408px', null, '604px'],
      bg: 'primary',
    }}
  >
    <div
      sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <div
        sx={{
          position: 'absolute',
          left: '-140px',
          top: '-120px',
          transform: 'rotate(132deg)',
          width: '100%',
          minWidth: '206px',
          maxWidth: ['223px', '306px'],
          aspectRatio: '570 / 799',
          backgroundImage: `url('../orange-tree.png')`,
          backgroundSize: '100% 100%',
          display: 'block',
        }}
      />
      <div
        sx={{
          position: 'absolute',
          right: '-140px',
          bottom: '-100px',
          transform: 'rotate(-60deg)',
          width: '100%',
          minWidth: [0, '283px', '206px'],
          maxWidth: [0, '283px', '306px'],
          aspectRatio: '570 / 799',
          backgroundImage: `url('../orange-tree.png')`,
          backgroundSize: '100% 100%',
          display: ['none', 'block'],
        }}
      />
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <H3>You can find me on</H3>

      <Socials
        width={['40px', '60px']}
        height='60px'
        color='text'
        hoverColor='currentColor'
        sx={{ zIndex: '4', gap: ['32px', '48px'] }}
      />
    </div>
  </footer>
);
