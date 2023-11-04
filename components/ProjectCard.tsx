import { ReactNode } from 'react';

type CardProps = {
  href: string;
  image: string;
  alt: string;
  children: ReactNode;
  className?: string;
};

export const ProjectCard = ({
  href,
  image,
  alt,
  children,
  ...props
}: CardProps) => (
  <div>
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      sx={{ textDecoration: 'none', color: 'text' }}
    >
      <div
        sx={{
          mb: ['8px'],
          aspectRatio: '1.7 / 1',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
        {...props}
      >
        <img
          src={image}
          alt={alt}
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '4px',
            'a:hover &': {
              transform: `scale(1.01)`,
            },
            transition: 'all 0.3s ease',
          }}
        />
      </div>
    </a>
    <div
      sx={{
        fontFamily: 'Noto Serif',
        fontSize: ['16px', null, '20px'],
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: ['28px', null, '37px'],
        letterSpacing: '1px',
        mt: '16px',
        opacity: 0.8,
        'a:hover &': {
          opacity: 1,
        },
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </div>
  </div>
);
