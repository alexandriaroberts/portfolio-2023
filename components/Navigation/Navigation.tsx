import { Container } from '../Container';
import { NavLink } from './NavLink';

type NavigationProps = {
  className?: string;
};

export const Navigation = ({ className, ...props }: NavigationProps) => (
  <Container {...props} sx={{ overflow: 'hidden' }}>
    <nav
      sx={{
        display: 'grid',
        gridTemplateColumns: '60fr 320fr 50fr',
        alignItems: 'center',
        justifyContent: 'center',
        mt: '80px',
      }}
    >
      <a href='\'>
        <img
          src='../heart.svg'
          alt='home'
          sx={{
            width: ['40px', null, '60px'],
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
      </a>
      <div
        sx={{
          justifySelf: 'center',
          display: 'flex',
          gap: ['24px', '32px'],
        }}
      >
        <NavLink href='/projects' target='_self'>
          Projects
        </NavLink>
        <NavLink href='/experience' target='_self'>
          Experience
        </NavLink>
      </div>
    </nav>
    {
      // TODO: Alternative to current mobile navigation
    }
    <div
      sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: '-1',
        overflow: 'hidden',
      }}
    >
      <div
        sx={{
          position: 'absolute',
          right: '-40px',
          top: '-90px',
          transform: 'rotate(-132deg)',
          width: '100%',
          minWidth: '206px',
          maxWidth: '306px',
          aspectRatio: '570 / 799',
          backgroundImage: `url('../orange-tree.png')`,
          backgroundSize: '100% 100%',
          display: ['none', null, 'block'],
          overflow: 'hidden',
        }}
      />
    </div>
  </Container>
);
