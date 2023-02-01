/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';

import { Divider } from './Divider';

export type ProjectItemProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const ProjectItem = ({ href, children, ...props }: ProjectItemProps) => (
  <a
    href={href}
    target='_blank'
    rel='noreferrer'
    sx={{ textDecoration: 'none', color: 'text' }}
    {...props}
  >
    <a
      sx={{
        color: 'primary',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        ':hover': {
          bg: 'hsla(0,0%,100%,.05)',
        },
        transition: 'all 0.3s ease',
      }}
    >
      {children}
      <Divider color='primary' />
    </a>
  </a>
);
