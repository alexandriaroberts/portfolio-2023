/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { HTMLAttributes, ReactNode } from 'react';

import { P } from '../components/Typography';

export type CardProps = {
  href: string;
  image: string;
  children: ReactNode;
  className?: string;
};

export const ProjectCard = ({ href, image, children, ...props }: CardProps) => (
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
        alt=''
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
    <P
      sx={{
        mt: '16px',
        opacity: 0.8,
        'a:hover &': {
          opacity: 1,
        },
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </P>
  </a>
);
